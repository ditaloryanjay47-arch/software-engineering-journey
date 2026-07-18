const totalEmployees = 20;

for(let totalEmployees = 1; totalEmployees <= 20; totalEmployees++) {
    console.log(`Employee ${totalEmployees} completed today's training.`)
}

for(let totalEmployees = 1; totalEmployees <= 20; totalEmployees++) {
    if(totalEmployees % 5 === 0) {
        console.log(`Employee ${totalEmployees} Absent`);
    } else {
        console.log(`Employee ${totalEmployees} Present`);
    }
}

let absent = 4
let present = 16

console.log(`Present: ${totalEmployees - absent}`)
console.log(`Absent: ${totalEmployees - present}`)


console.log(`
========================================
      TRAINING PROGRESS REPORT
========================================

Total Employees: ${totalEmployees}
Present: ${totalEmployees - present}
Absent: ${totalEmployees - absent}

Attendance Rate: ${present / totalEmployees * 100}%

Training Status:
Successful

========================================
`)