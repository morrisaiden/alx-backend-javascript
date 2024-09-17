const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an Express application
const app = express();

// Helper function to read the database file asynchronously
const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = {};
      let studentCount = 0;

      lines.forEach((line, idx) => {
        if (idx === 0) return; // Skip header
        const fields = line.split(',');
        const firstName = fields[0];
        const field = fields[fields.length - 1];

        if (field && firstName) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
          studentCount += 1;
        }
      });

      resolve({ studentCount, students });
    }
  });
});

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the /students endpoint
app.get('/students', (req, res) => {
  const databasePath = path.join(__dirname, process.argv[2]);

  countStudents(databasePath)
    .then(({ studentCount, students }) => {
      let responseText = `This is the list of our students\nNumber of students: ${studentCount}\n`;

      for (const field in students) {
        if (Object.prototype.hasOwnProperty.call(students, field)) {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        }
      }

      res.set('Content-Type', 'text/plain');
      res.send(responseText.trim());
    })
    .catch((err) => {
      res.set('Content-Type', 'text/plain');
      res.send(err.message);
    });
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
