# Day 4 Notes — JavaScript Loops

## Topics Covered

* `for` loop
* `while` loop
* `do...while` loop
* `break`
* `continue`
* Loop counters
* Accumulators
* Modulus operator inside loops
* Variable shadowing

---

## What Is a Loop?

A loop repeatedly runs a block of code while a condition remains true.

Loops are useful when the same task must be performed many times.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

## The `for` Loop

A `for` loop is useful when the number of repetitions is known.

```javascript
for (initialization; condition; update) {
    // Code to repeat
}
```

Example:

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Parts of a `for` Loop

```javascript
for (let i = 1; i <= 10; i++)
```

* `let i = 1` — starting value
* `i <= 10` — condition
* `i++` — update after every repetition

---

## Incrementing and Decrementing

Use `i++` to increase the value by one.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Use `i--` to decrease the value by one.

```javascript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

---

## Changing the Counter by More Than One

The loop counter does not always need to change by one.

Example: printing even numbers.

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

Output:

```text
2
4
6
8
10
```

---

## Using the Loop Variable

The loop variable changes during each repetition.

Example:

```javascript
const number = 9;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
```

It is important to use `i` in the calculation when the result should change during every repetition.

Incorrect:

```javascript
number * 1
```

Correct:

```javascript
number * i
```

---

## The `while` Loop

A `while` loop repeats while its condition is true.

It is useful when the exact number of repetitions is not known in advance.

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

The counter must be updated. Otherwise, the loop may run forever.

---

## The `do...while` Loop

A `do...while` loop runs its code at least once before checking the condition.

```javascript
let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);
```

### Difference

* `while` checks the condition before running.
* `do...while` runs once before checking the condition.

---

## The `break` Statement

`break` immediately stops the nearest loop.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

The number 5 is not printed because the loop stops before reaching `console.log()`.

---

## The `continue` Statement

`continue` skips the rest of the current repetition and moves to the next one.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

`continue` does not stop the entire loop. It only skips one iteration.

---

## Accumulators

An accumulator stores and updates a running total.

Example:

```javascript
let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log(total);
```

Output:

```text
5050
```

This:

```javascript
total += i;
```

means:

```javascript
total = total + i;
```

The value is updated during every iteration.

---

## Counters

Counters track how many times something happens.

```javascript
let present = 0;
let absent = 0;

for (let studentNumber = 1; studentNumber <= 15; studentNumber++) {
    if (studentNumber % 5 === 0) {
        absent++;
    } else {
        present++;
    }
}
```

After the loop:

```text
Present: 12
Absent: 3
```

---

## Using the Modulus Operator

The modulus operator `%` returns the remainder after division.

It can be used to identify repeating patterns.

Example:

```javascript
if (studentNumber % 5 === 0) {
    console.log("Absent");
}
```

This condition is true for:

```text
5
10
15
20
```

These numbers are evenly divisible by 5.

---

## Variable Shadowing

Variable shadowing happens when a variable inside a block uses the same name as a variable outside the block.

Avoid this:

```javascript
const totalEmployees = 20;

for (let totalEmployees = 1; totalEmployees <= 20; totalEmployees++) {
    console.log(totalEmployees);
}
```

The loop variable hides the outer `totalEmployees` variable.

Use a different name:

```javascript
const totalEmployees = 20;

for (
    let employeeNumber = 1;
    employeeNumber <= totalEmployees;
    employeeNumber++
) {
    console.log(employeeNumber);
}
```

This is clearer and less likely to cause mistakes.

---

## Common Mistakes I Made

* Used `number * 1` instead of `number * i`.
* Stopped the countdown before printing the final number.
* Printed separate additions instead of calculating one total.
* Hard-coded attendance totals instead of counting them inside the loop.
* Reversed the values for present and absent in the final report.
* Reused the same variable name inside and outside a loop.
* Thought `continue` changed the starting number.
* Calculated the loop total incorrectly.

---

## Corrected Examples

### Multiplication Table

```javascript
const number = 9;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
```

### Countdown

```javascript
for (let i = 15; i >= 5; i--) {
    console.log(i);
}

console.log("Finished!");
```

### Sum from 1 to 100

```javascript
let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log(`Total: ${total}`);
```

### Attendance Counter

```javascript
const totalEmployees = 20;

let present = 0;
let absent = 0;

for (
    let employeeNumber = 1;
    employeeNumber <= totalEmployees;
    employeeNumber++
) {
    if (employeeNumber % 5 === 0) {
        absent++;
    } else {
        present++;
    }
}

console.log(`Present: ${present}`);
console.log(`Absent: ${absent}`);
```

---

## Best Practices

* Use a `for` loop when the number of repetitions is known.
* Use a `while` loop when the stopping point depends on a condition.
* Always update the loop counter.
* Use meaningful names such as `studentNumber` and `employeeNumber`.
* Avoid reusing the same variable name in different scopes.
* Use accumulators for totals.
* Use counters to track occurrences.
* Check the first and last iteration.
* Avoid unnecessary `break` statements.
* Keep loop logic simple and readable.

---

## Key Takeaways

* Loops reduce repeated code.
* The loop variable changes during every iteration.
* `break` stops the entire loop.
* `continue` skips only the current iteration.
* `%` helps identify repeating patterns.
* An accumulator calculates a running total.
* A counter tracks how many times something happens.
* Clear variable names help prevent logic errors.

---

## Reflection

Today I learned how to repeat tasks using loops.

The easiest concept was creating a basic `for` loop.

The most challenging concepts were accumulators, counters, and using `continue`.

I need more practice with calculating totals inside loops and using the changing loop variable correctly.

Before moving forward, I should remember that loops should calculate results dynamically instead of relying on hard-coded values.
