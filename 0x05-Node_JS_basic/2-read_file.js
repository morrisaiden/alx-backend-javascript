const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();

    const lines = data.split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // const headers = lines[0].split(',');
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    console.log(`Number of students: ${students.length}`);

    const fieldCounts = {};

    students.forEach((studentLine) => {
      const studentData = studentLine.split(',');

      const field = studentData[studentData.length - 1];
      const firstName = studentData[0];

      if (fieldCounts[field]) {
        fieldCounts[field].push(firstName);
      } else {
        fieldCounts[field] = [firstName];
      }
    });

    for (const [field, firstName] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${firstName.length}. List: ${firstName.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
