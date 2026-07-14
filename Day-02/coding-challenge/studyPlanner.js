const weekDayHours = 3;
const weekendHours = 5;

const weeklyHours = (weekDayHours * 5) + (weekendHours * 2);
const monthlyHours = weeklyHours * 4;
const yearlyHours = weeklyHours * 52;

const targetHours = 1500;

const remainingHours = targetHours - yearlyHours;

const hasReachedTarget = yearlyHours >= targetHours;

console.log(`Week Day Study Hours: ${weekDayHours}`);
console.log(`Weekend Study Hours: ${weekendHours}`);
console.log(`Weekly Hours: ${weeklyHours}`);
console.log(`Monthly Hours: ${monthlyHours}`);
console.log(`Yearly Hours: ${yearlyHours}`);
console.log(`My target Hours: ${targetHours}`);
console.log(`Remaining Hours: ${remainingHours}`);
console.log(`My reach target: ${hasReachedTarget}`);