const students = [
    {
        id: 1,
        name: "John",
        score: 85,
        attendance: 92
    },
    {
        id: 2,
        name: "Jane",
        score: 74,
        attendance: 88
    },
    {
        id: 3,
        name: "Ryan",
        score: 91,
        attendance: 95
    },
    {
        id: 4,
        name: "Maria",
        score: 68,
        attendance: 79
    },
    {
        id: 5,
        name: "Anna",
        score: 82,
        attendance: 75
    }
];

let totalPassed = 0;
let totalFailed = 0;

function getResult(score) {
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

console.log("===== STUDENT INFORMATION SYSTEM =====");

for (let i = 0; i < students.length; i++) {
    const currentStudent = students[i];

    const result = getResult(currentStudent.score);
    const attendanceStatus =
        getAttendanceStatus(currentStudent.attendance);

    if (result === "Passed") {
        totalPassed++;
    } else {
        totalFailed++;
    }

    console.log(`
Student ID: ${currentStudent.id}
Name: ${currentStudent.name}
Score: ${currentStudent.score}
Result: ${result}
Attendance: ${currentStudent.attendance}%
Attendance Status: ${attendanceStatus}
--------------------------------------`);
}

console.log(`
===== CLASSROOM SUMMARY =====
Total Students: ${students.length}
Passed: ${totalPassed}
Failed: ${totalFailed}
`);