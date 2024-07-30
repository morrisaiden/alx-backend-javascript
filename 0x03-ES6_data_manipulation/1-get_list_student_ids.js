export default function getListStudentIds(students) {
    if (students instanceof Array) {
        // Map student to their IDs
        return students.map((student) => student.id);
    }
    return [];
}
