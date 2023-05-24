import React, { useRef } from 'react'
import './FileSelector.css'

interface FileSelectorProps {
  file: File | null
  handleSetFile: (file: File | null) => void
}

const FileSelector: React.FC<FileSelectorProps> = ({ file, handleSetFile }: FileSelectorProps): React.ReactElement => {
  const fileSelector: React.LegacyRef<HTMLInputElement> = useRef(null)

  const handleFileSelection = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    e.preventDefault()
    fileSelector.current?.click()
  }

  const handleClearFile = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    e.preventDefault()
    handleSetFile(null)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    e.stopPropagation()

    const files = e.target.files
    if (files === null || files.length === 0) {
      return
    }

    handleSetFile(files[0])
  }

  return (
    <div className="file-box">
      <input type='file' ref={fileSelector} onChange={onInputChange} accept='.pdf, .txt'/>
        <span className='file-name'>{ file !== null ? file.name : 'Select a file' }</span>
        <div className="action-buttons">
          <button className='clear-button' onClick={handleClearFile}>Clear</button>
          <button className='select-button' onClick={handleFileSelection}>Select</button>
        </div>
    </div>
  )
}

export default FileSelector
