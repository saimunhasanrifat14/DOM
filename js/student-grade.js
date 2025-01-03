const username = prompt("enter your name")
const usermark = prompt("enter your Mark")
const students = [
    { name: username, marks: usermark },
];

function calculateGrades(studentArray) {
    const results = [];
    let grade;
        if (student.marks >= 80) {
            grade = "A+";
        } else if (student.marks >= 70) {
            grade = "A";
        } else if (student.marks >= 60) {
            grade = "A-";
        } else {
            grade = "B";
        }

        results.push({
            name: student.name,
            marks: student.marks,
            grade: grade
        });

    return results;
}
const finalResults = calculateGrades(students);
console.log(finalResults);