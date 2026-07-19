# Day 5 Notes — JavaScript Arrays

## Topics Covered

* Creating arrays
* Array indexes
* Accessing and updating elements
* The `.length` property
* `push()` and `pop()`
* `shift()` and `unshift()`
* `includes()` and `indexOf()`
* Looping through arrays
* Parallel arrays
* Array validation

---

## What Is an Array?

An array stores multiple related values inside one variable.

Without an array:

```javascript
const student1 = "John";
const student2 = "Maria";
const student3 = "Ryan";
```

With an array:

```javascript
const students = ["John", "Maria", "Ryan"];
```

Arrays are useful for storing collections such as:

* Students
* Scores
* Products
* Tasks
* Messages
* Programming languages

---

## Creating an Array

Arrays use square brackets.

```javascript
const colors = ["Red", "Blue", "Green"];
```

Each element is separated by a comma.

Arrays can contain different data types:

```javascript
const profile = ["Ryan", 29, true];
```

However, it is usually better to keep related values in the same array.

```javascript
const scores = [85, 90, 78, 95];
```

---

## Array Indexes

Every array element has a position called an index.

Indexes begin at `0`.

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

| Index | Value  |
| ----: | ------ |
|     0 | Apple  |
|     1 | Banana |
|     2 | Orange |

Access an element using square brackets:

```javascript
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

The first element is:

```javascript
fruits[0]
```

The last element is:

```javascript
fruits[fruits.length - 1]
```

---

## Updating an Array Element

An element can be replaced using its index.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Orange"]
```

An array declared with `const` can still have its elements changed.

Allowed:

```javascript
const fruits = ["Apple"];

fruits[0] = "Mango";
```

Not allowed:

```javascript
const fruits = ["Apple"];

fruits = ["Mango"];
```

`const` prevents the entire variable from being reassigned. It does not make the array elements unchangeable.

---

## The `.length` Property

The `.length` property returns the number of elements in an array.

```javascript
const students = ["John", "Maria", "Ryan"];

console.log(students.length);
```

Output:

```text
3
```

The last valid index is always:

```javascript
array.length - 1
```

Example:

```javascript
console.log(students[students.length - 1]);
```

Output:

```text
Ryan
```

---

## Basic Array Methods

### `push()`

Adds an element to the end of an array.

```javascript
const languages = ["JavaScript", "Python"];

languages.push("Java");
```

Final array:

```text
["JavaScript", "Python", "Java"]
```

---

### `pop()`

Removes the final element.

```javascript
languages.pop();
```

`pop()` also returns the removed value.

```javascript
const removedLanguage = languages.pop();
```

---

### `unshift()`

Adds an element to the beginning.

```javascript
const fruits = ["Banana", "Orange"];

fruits.unshift("Apple");
```

---

### `shift()`

Removes the first element.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.shift();
```

---

## Searching an Array

### `includes()`

Checks whether a value exists in an array.

It returns a Boolean.

```javascript
const languages = ["JavaScript", "Python", "Java"];

console.log(languages.includes("Python"));
```

Output:

```text
true
```

`includes()` is case-sensitive.

```javascript
console.log(languages.includes("python"));
```

Output:

```text
false
```

---

### `indexOf()`

Returns the index of a value.

```javascript
const students = ["John", "Maria", "Ryan"];

console.log(students.indexOf("Maria"));
```

Output:

```text
1
```

When the value is not found, `indexOf()` returns:

```text
-1
```

---

## Looping Through an Array

Use a loop to process every element.

```javascript
const animals = ["Dog", "Cat", "Bird", "Fish"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
```

The loop starts at `0` because arrays begin at index `0`.

The condition should normally be:

```javascript
i < animals.length
```

Do not use:

```javascript
i <= animals.length
```

Using `<=` causes the loop to access one index beyond the array.

Example:

```javascript
const animals = ["Dog", "Cat"];

console.log(animals[2]);
```

Output:

```text
undefined
```

---

## Numbering Array Elements

Array indexes start at zero, but human-readable numbering usually starts at one.

```javascript
const students = ["John", "Maria", "Ryan"];

for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}
```

Output:

```text
Student 1: John
Student 2: Maria
Student 3: Ryan
```

`i` accesses the array element, while `i + 1` creates the displayed number.

---

## Parallel Arrays

Parallel arrays contain related values at matching indexes.

```javascript
const students = ["John", "Jane", "Ryan"];

const attendance = [true, false, true];
```

The related values are:

```text
students[0] → attendance[0]
students[1] → attendance[1]
students[2] → attendance[2]
```

Example:

```javascript
for (let i = 0; i < students.length; i++) {
    const attendanceStatus = attendance[i]
        ? "Present"
        : "Absent";

    console.log(
        `${students[i]} — ${attendanceStatus}`
    );
}
```

---

## Validating Parallel Arrays

Related arrays should have the same length.

```javascript
if (students.length !== attendance.length) {
    console.log("Invalid attendance data.");
}
```

Without validation, some students may not have a matching attendance value.

---

## Using Counters with Arrays

Counters can track how many values meet a condition.

```javascript
let presentCount = 0;
let absentCount = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) {
        presentCount++;
    } else {
        absentCount++;
    }
}
```

Print the results:

```javascript
console.log(`Present: ${presentCount}`);
console.log(`Absent: ${absentCount}`);
```

---

## Using an Accumulator with Arrays

An accumulator calculates a running total.

```javascript
const scores = [85, 72, 95, 88, 65];

let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
}

const averageScore = totalScore / scores.length;

console.log(`Average: ${averageScore}`);
```

---

## Finding the Highest Value

Start with the first array value.

```javascript
const scores = [85, 72, 95, 88, 65];
const students = ["John", "Jane", "Ryan", "Maria", "Anna"];

let highestScore = scores[0];
let topStudent = students[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
        highestScore = scores[i];
        topStudent = students[i];
    }
}
```

Results:

```javascript
console.log(`Highest Score: ${highestScore}`);
console.log(`Top Student: ${topStudent}`);
```

---

## Common Mistakes to Avoid

### Starting at Index 1

Incorrect:

```javascript
console.log(students[1]);
```

when trying to access the first element.

Correct:

```javascript
console.log(students[0]);
```

---

### Using `<=` in an Array Loop

Incorrect:

```javascript
for (let i = 0; i <= students.length; i++) {
    console.log(students[i]);
}
```

Correct:

```javascript
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
```

---

### Confusing Array Methods

* `push()` adds to the end.
* `pop()` removes from the end.
* `unshift()` adds to the beginning.
* `shift()` removes from the beginning.

---

### Forgetting Case Sensitivity

```javascript
const languages = ["JavaScript"];

console.log(languages.includes("javascript"));
```

Output:

```text
false
```

---

### Hard-Coding Results

Avoid:

```javascript
const presentCount = 3;
const absentCount = 2;
```

when the program can calculate the totals using a loop.

Calculated values make the program work even when the array data changes.

---

## Best Practices

* Use plural variable names for arrays.

```javascript
const students = [];
const scores = [];
const products = [];
```

* Use `const` when the array variable will not be reassigned.
* Use `.length` instead of manually entering the array size.
* Loop using `i < array.length`.
* Keep related arrays the same length.
* Validate related data before processing it.
* Use counters and accumulators instead of hard-coded totals.
* Use meaningful variable names.
* Keep array values related and consistent.

---

## Key Takeaways

* Arrays store multiple values in one variable.
* Array indexes begin at `0`.
* The first element is `array[0]`.
* The last element is `array[array.length - 1]`.
* `.length` returns the number of elements.
* `push()` and `unshift()` add elements.
* `pop()` and `shift()` remove elements.
* `includes()` returns a Boolean.
* `indexOf()` returns an index or `-1`.
* Loops allow every array element to be processed.
* Parallel arrays connect related values using matching indexes.

---

## Reflection

Today I learned how to store and manage multiple values using arrays.

The easiest concepts were creating arrays, accessing elements, and using `.length`.

The most challenging concepts were parallel arrays, counters, accumulators, and finding the highest value.

I need more practice with looping through arrays and using array values in calculations.

Before moving to Day 6, I should remember that array indexes begin at zero and array loops normally use:

```javascript
i < array.length
```
