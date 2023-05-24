const multer = require('multer');
const fs = require('fs');
const router = require('express').Router();
const fileHelper = require('../helpers/fileHelper');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', (_, response) => {
  response.status(200).json({ status: 'ok', online: true });
});

router.post('/print', upload.any(), async (req, res) => {
  console.log('saving file...');
  const file = req.files[0] || null;

  if (!file) {
    return res.status(400).json({ success: false, error: 'Could not receive file' });
  }

  await fileHelper.printFile(file);
  

  res.status(200).json({ success: true });
});

module.exports = router;
