import React, { useState } from 'react'
import axios from 'axios'
import FileSelector from '../FileSelector/FileSelector'
import './App.css'

const App: React.FC = (): React.ReactElement => {
  const [file, setFile] = useState<File | null>(null)

  const handleSetFile = (file: File | null): void => {
    setFile(file)
  }

  const handleFormSubit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    e.stopPropagation()

    if (file === null) return

    const formData = new FormData()
    formData.append('uploaded', file)
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    }
    axios
      .post('/printer/print', formData, { headers })
      .then((res) => {
        console.log(res)
        setFile(null)
      })
      .catch((err) => { console.log(err) })
  }

  return (
    <>
      <h1>Rasp-Printer</h1>
      <form>
        <FileSelector file={file} handleSetFile={handleSetFile} />
        <button className='print-btn' onClick={handleFormSubit}>Print</button>
      </form>
    </>
  )
}

export default App
