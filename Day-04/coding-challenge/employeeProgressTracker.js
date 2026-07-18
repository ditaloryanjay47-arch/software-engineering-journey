const totalEmployees = 20;

let present = 0;
let absent = 0;

for (
    let employeeNumber = 1;
    employeeNumber <= totalEmployees;
    employeeNumber++
) {
    console.log(
        `Employee ${employeeNumber} completed today's training.`
    );
}

console.log("\nAttendance:");

for (
    let employeeNumber = 1;
    employeeNumber <= totalEmployees;
    employeeNumber++
) {
    if (employeeNumber % 5 === 0) {
        absent++;
        console.log(`Employee ${employeeNumber} - Absent`);
    } else {
        present++;
        console.log(`Employee ${employeeNumber} - Present`);
    }
}

const attendanceRate = (present / totalEmployees) * 100;

let trainingStatus;

if (attendanceRate >= 80) {
    trainingStatus = "Successful";
} else {
    trainingStatus = "Needs Improvement";
}

console.log(`
========================================
      TRAINING PROGRESS REPORT
========================================

Total Employees: ${totalEmployees}
Present: ${present}
Absent: ${absent}

Attendance Rate: ${attendanceRate}%

Training Status:
${trainingStatus}

========================================
`);