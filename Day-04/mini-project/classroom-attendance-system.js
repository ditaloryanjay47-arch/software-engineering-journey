const totalStudents = 15;

for (let studentNumber = 1; studentNumber <= totalStudents; studentNumber++) {
    if (studentNumber % 5 === 0) {
        console.log(`Student ${studentNumber}: Absent`);
    } else {
        console.log(`Student ${studentNumber}: Present`);
    }
}

console.log("Attendance Completed");