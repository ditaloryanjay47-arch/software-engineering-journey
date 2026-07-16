# Day 3 Notes - Conditional Statements

## Topics Covered

- if
- else
- else if
- Nested if (Introduction)
- Input Validation
- Logical Operators in Conditions

---

## What is a Conditional Statement?

A conditional statement allows a program to make decisions based on whether a condition is true or false.

Example:

```javascript
const age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

---

## if Statement

Runs a block of code only when the condition is true.

```javascript
if (condition) {

}
```

---

## else Statement

Runs when the previous condition is false.

```javascript
if (condition) {

} else {

}
```

---

## else if Statement

Checks multiple conditions in order.

```javascript
if (score >= 90) {

} else if (score >= 75) {

} else {

}
```

JavaScript checks from top to bottom and stops at the first true condition.

---

## Logical Operators

### AND (&&)

Both conditions must be true.

```javascript
if (hasLaptop && hasInternet) {

}
```

---

### OR (||)

Only one condition needs to be true.

```javascript
if (hasCoffee || hasTea) {

}
```

---

### NOT (!)

Reverses a Boolean value.

```javascript
!isLoggedIn
```

---

## Input Validation

Always validate values before processing them.

Example:

```javascript
if (score < 0 || score > 100) {
    console.log("Invalid score");
}
```

---

## Things I Learned Today

- Programs can make decisions using if statements.
- else runs only when the if condition is false.
- else if is useful when checking multiple conditions.
- JavaScript checks conditions from top to bottom.
- Input validation helps prevent invalid data from being processed.

---

## Mistakes to Avoid

- Using = instead of === in conditions.
- Forgetting curly braces {}.
- Placing broader conditions before more specific ones.
- Forgetting to validate user input.
- Writing conditions that can never be reached.

---

## Best Practices

- Keep conditions simple and readable.
- Use meaningful variable names.
- Validate inputs before using them.
- Use === instead of ==.
- Test both true and false outcomes.

---

## Key Takeaways

- if starts a decision.
- else provides an alternative.
- else if handles multiple possibilities.
- Logical operators allow combining conditions.
- Good validation makes programs more reliable.