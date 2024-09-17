const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data.trim().split('\n');

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

    for (const [field, firstNames] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }

    return Promise.resolve();
  } catch (error) {
    console.error('Error:', error.message);
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
