const students = [ "John", "Jane", "Ryan", "Maria", "Anna" ];
const attendance = [ true, false, true, true, false ];

let presentCount = 0;
let absentCount  = 0;



for(let i = 0; i < students.length; i++) {
    console.log(`Student: ${students[i]} — ${attendance[i]}`)
}



for (let i = 0; i < students.length; i++) { if (attendance[i]) { presentCount++; } else { absentCount++; } }

const attendanceRate = (presentCount / students.length) * 100;

console.log(`
    ======================================== 
    CLASS ATTENDANCE REPORT 
    ========================================
    
    Total Student: ${students.length}
    Present: ${presentCount}
    Absent: ${absentCount}
    Attendance Rate: ${attendanceRate}%

    ========================================
    `)