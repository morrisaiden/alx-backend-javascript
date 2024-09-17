import fs from 'fs';
// import path from 'path';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const students = {};
      const lines = data.trim().split('\n').slice(1); // Skipping header

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });

      resolve(students);
    }
  });
});

export default readDatabase;
