const fs = require('fs');
const path = require('path');

const directoryPath = './dist/lazy-import';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory contents:', err);
    return;
  }

  // Filter files to keep only those with the .js extension
  const jsFiles = files.filter((file) => path.extname(file) === '.js');

  // Delete each file
  jsFiles.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${filePath}`);
  });

  console.log('File deletion completed!');
});

