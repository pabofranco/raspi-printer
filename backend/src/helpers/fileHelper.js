const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

module.exports.printFile = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const { originalname, buffer } = file;
      const normalizedName = originalname.replaceAll(' ', '_');
      const filePath = path.resolve(__dirname, '../files', normalizedName);

      fs.writeFileSync(filePath, buffer);

      const proc = exec(`lp ${filePath}`);
      proc.stdout.on('data', (data) => console.log('DATA RECEIVED: ', data));
      proc.stderr.on('data', (data) => console.log('ERROR: ', data.toString()));
      proc.stderr.on('error', (data) => console.log('ERROR: ', data.toString()));

      resolve();
    } catch(ex) {
      console.log('Error while printing file: ', ex);
      reject(ex);
    }
  });
};
