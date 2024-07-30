const getStudentIdsSum = (students) => students.reduce((preVal, curl) => preVal + curl.id, 0);

export default getStudentIdsSum;
