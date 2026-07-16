const applicantName = "Ryan";
const applicantAge = 29;
const hasLaptop = true;
const hasInternet = true;
const yearsOfCustomerServiceRepresentativeExperience = 3;
const yearsOfTeachingExperience = 2;
const dailyStudyHours = 3;

if (applicantAge >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

if (hasLaptop && hasInternet) {
    console.log("Ready for Remote Work");
} else {
    console.log("Needs Better Setup");
}

if (yearsOfCustomerServiceRepresentativeExperience + yearsOfTeachingExperience >= 5) {
    console.log("Strong Communication Background");
} else {
    console.log("Continue Building Experience");
}

if (dailyStudyHours >= 4) {
    console.log("Excellent");
} else if (dailyStudyHours >= 2) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}

// Determine readiness values
const eligibility = applicantAge >= 18 ? "Eligible" : "Not Eligible";
const remoteWork = hasLaptop && hasInternet
    ? "Ready for Remote Work"
    : "Needs Better Setup";
const communication =
    yearsOfCustomerServiceRepresentativeExperience +
        yearsOfTeachingExperience >=
    5
        ? "Strong Communication Background"
        : "Continue Building Experience";

let studyRating;
if (dailyStudyHours >= 4) {
    studyRating = "Excellent";
} else if (dailyStudyHours >= 2) {
    studyRating = "Good";
} else {
    studyRating = "Needs Improvement";
}

// Professional Report
console.log(`
========================================
      APPLICANT READINESS REPORT
========================================
Applicant Name: ${applicantName}
Age: ${applicantAge}

Equipment Status:
- Laptop Available: ${hasLaptop ? "Yes" : "No"}
- Internet Access: ${hasInternet ? "Yes" : "No"}

Experience:
- Customer Service Representative: ${yearsOfCustomerServiceRepresentativeExperience} years
- Teaching: ${yearsOfTeachingExperience} years

Daily Study Hours: ${dailyStudyHours}

Assessment:
- Eligibility: ${eligibility}
- Remote Work Readiness: ${remoteWork}
- Communication Skills: ${communication}
- Learning Commitment: ${studyRating}

Overall Summary:
${applicantName} demonstrates a strong professional background with a total of ${
    yearsOfCustomerServiceRepresentativeExperience +
    yearsOfTeachingExperience
} years of experience. The applicant is ${eligibility.toLowerCase()}, ${remoteWork.toLowerCase()}, and has a ${studyRating.toLowerCase()} level of study commitment, making them well-positioned to pursue a career in technology.
========================================
`);