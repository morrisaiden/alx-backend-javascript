import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((students) => {
        res.write('This is the list of our students');
        Object.keys(students).sort().forEach((field) => {
          res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        });
        res.end();
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      const dbPath = process.argv[2];
      readDatabase(dbPath)
        .then((students) => {
          res.write(`List: ${students[major].join(', ')}`);
          res.end();
        })
        .catch(() => res.status(500).send('Cannot load the database'));
    }
  }
}

export default StudentsController;
