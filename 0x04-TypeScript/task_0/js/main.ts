interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

function createStudent(student: Student) {
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        age: student.age, // Corrected from 'Number' to student.age
        location: student.location
    };
}

const student1 = createStudent({ firstName: "Morris", lastName: "Mwai", age: 27, location: "Nakuru" });
const student2 = createStudent({ firstName: "Alex", lastName: "Alexis", age: 20, location: "Nairobi" });

const studentsList = [student1, student2];

const table = document.createElement("table");

// Create table header row
const headerRow = document.createElement("tr");
const headers = ["First Name", "Last Name", "Age", "Location"];
headers.forEach(headerText => {
    const header = document.createElement("th");
    header.innerHTML = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Create table rows for each student
studentsList.forEach(student => {
    const trow = document.createElement("tr");

    const tdataFirstName = document.createElement("td");
    tdataFirstName.innerHTML = student.firstName;
    trow.appendChild(tdataFirstName);

    const tdataLastName = document.createElement("td");
    tdataLastName.innerHTML = student.lastName;
    trow.appendChild(tdataLastName);

    const tdataAge = document.createElement("td");
    tdataAge.innerHTML = student.age.toString();
    trow.appendChild(tdataAge);

    const tdataLocation = document.createElement("td");
    tdataLocation.innerHTML = student.location;
    trow.appendChild(tdataLocation);

    table.appendChild(trow);
});

// Append the table to the document body or a specific container
document.body.appendChild(table);
