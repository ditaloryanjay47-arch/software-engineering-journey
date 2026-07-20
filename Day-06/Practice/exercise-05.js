const course = {
    courseId: "CS-101",
    courseName: "Introduction to Computer Science",
    instructor: "Dr. Alan Turing",
    credits: 4,
    department: "Computer Science",
    isAvailableOnline: true,
};

const properties = Object.keys(course);

console.log(
    `The course object contains ${properties.length} properties.`
);