const students = [
    { name: "John", score: 85, attendance: 92 },
    { name: "Jane", score: 74, attendance: 88 },
    { name: "Ryan", score: 91, attendance: 95 },
    { name: "Maria", score: 68, attendance: 79 },
    { name: "Anna", score: 82, attendance: 75 }
];

let passedCount = 0;
let failedCount = 0;
let invalidCount = 0;

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function getAcademicResult(score) {
    if (score >= 75) {
        return "Passed";
    } else {
        return "Failed";
    }
}

function getAttendanceStatus(attendance) {
    if (attendance >= 90) {
        return "Excellent";
    } else if (attendance >= 80) {
        return "Good";
    } else {
        return "Warning";
    }
}

function isValidValue(value) {
    return value >= 0 && value <= 100;
}

console.log("===== STUDENT REPORT INFORMATION =====");

for (let i = 0; i < students.length; i++) {
    const currentStudent = students[i];

    const validScore = isValidValue(currentStudent.score);
    const validAttendance =
        isValidValue(currentStudent.attendance);

    if (!validScore || !validAttendance) {
        invalidCount++;

        console.log(`
Name: ${currentStudent.name}
Status: Invalid student data
--------------------------------------`);

    } else {
        const grade = getGrade(currentStudent.score);
        const result =
            getAcademicResult(currentStudent.score);
        const attendanceStatus =
            getAttendanceStatus(currentStudent.attendance);

        if (result === "Passed") {
            passedCount++;
        } else {
            failedCount++;
        }

        console.log(`
Student ${i + 1}
Name: ${currentStudent.name}
Score: ${currentStudent.score}
Grade: ${grade}
Academic Result: ${result}
Attendance: ${currentStudent.attendance}%
Attendance Status: ${attendanceStatus}
--------------------------------------`);
    }
}

console.log(`
===== CLASS SUMMARY =====
Total Students: ${students.length}
Passed: ${passedCount}
Failed: ${failedCount}
Invalid Records: ${invalidCount}
`);