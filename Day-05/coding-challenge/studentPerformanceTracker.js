const students = [ "John", "Jane", "Ryan", "Maria", "Anna" ];
const scores = [ 85, 72, 95, 88, 65 ];

let excellentCount = 0;
let passedCount = 0; 
let failedCount = 0;

let totalScore = 0;

let highestScore = scores[0];
let topStudent = students[0];

for(let i = 0; i < students.length; i++) {
    if(scores[i] >= 90) {
        console.log(`${students[i]} — Score: ${scores[i]} — Excellent`)
    } else if(scores[i] >= 75) {
        console.log(`${students[i]} — Score: ${scores[i]} — Passed`)
    } else {
        console.log(`${students[i]} — Score: ${scores[i]} — Failed`)
    }
}

for(let i = 0; i < scores.length; i++) {
    if(scores[i] >= 90) {
        excellentCount++;
    } else if(scores[i] >= 75) {
        passedCount++;
    } else {
        failedCount++;
    }
}


for(let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
}

const averageScore = totalScore / scores.length;

for(let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) { 
        highestScore = scores[i]; 
        topStudent = students[i]; }
}

console.log(`
    ======================================== 
    STUDENT PERFORMANCE REPORT 
    ========================================

    Total Students: ${students.length}
    Excellent: ${excellentCount}
    Passed: ${passedCount}
    Failed: ${failedCount}

    Average Score: ${averageScore}
    Highest Score: ${highestScore}
    Top Student: ${topStudent}

    ========================================
    `)