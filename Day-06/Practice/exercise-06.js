const student = [
    {
        name: "Liam Carter",
        score: 92,
        attendance: 95
    },
    {
        name: "Emma Olivia",
        score: 88,
        attendance: 98,
    },
    {
        name: "Noah Joshua",
        score: 74,
        attendance: 85
    },
    {
        name: "Sophia Sofia",
        score: 95,
        attendance: 100
    },
    {
        name: "James Lucas",
        score: 81,
        attendance: 91,
    }
];

for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i].name}`);
    console.log(`Score: ${students[i].score}`);
    console.log(`Attendance: ${students[i].attendance}%`);
}