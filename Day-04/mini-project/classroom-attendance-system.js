for(let student = 1; student <= 15; student++) {
    if(student %5) {
        console.log(`Student ${student}: Present`);
    } else {
        console.log(`Student ${student}: Absent`)
    }
}
console.log("Attendance Completed")