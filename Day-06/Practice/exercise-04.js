const employee = {
    name: "Anna",
    position: "Customer Service Representative",
    yearsOfExperience: 3
};

for(const key in employee) {
    console.log(`${key}: ${employee[key]}`);
}