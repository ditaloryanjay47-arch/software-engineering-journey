# Day 2 Notes - JavaScript Operators

## Topics Covered

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Template Literals
- Operator Precedence

---

## Arithmetic Operators

Used to perform mathematical calculations.

| Operator | Meaning | Example |
|----------|---------|---------|
| + | Addition | 10 + 5 = 15 |
| - | Subtraction | 10 - 5 = 5 |
| * | Multiplication | 10 * 5 = 50 |
| / | Division | 10 / 5 = 2 |
| % | Modulus (Remainder) | 10 % 3 = 1 |
| ** | Exponentiation | 2 ** 3 = 8 |

### Notes

- `%` returns the remainder after division.
- `**` raises a number to a power.

---

## Assignment Operators

Used to update a variable.

```javascript
let score = 50;

score += 10; // 60
score -= 5;  // 55
score *= 2;  // 110
score /= 2;  // 55
```

### Notes

- `=` assigns a value.
- `+=` adds and updates the variable.
- `-=` subtracts and updates the variable.
- `*=` multiplies and updates the variable.
- `/=` divides and updates the variable.

---

## Comparison Operators

Comparison operators always return a Boolean (`true` or `false`).

```javascript
10 > 5
true

10 === 10
true

10 === "10"
false
```

### Important

Use:

```javascript
===
!==
```

instead of

```javascript
==
!=
```

because they compare both value and data type.

---

## Logical Operators

```javascript
&&
```

AND

Both conditions must be true.

```javascript
||
```

OR

At least one condition must be true.

```javascript
!
```

NOT

Reverses a Boolean value.

---

## Template Literals

Preferred over string concatenation.

```javascript
const name = "Ryan";

console.log(`Hello ${name}`);
```

Advantages:

- Easier to read
- Cleaner code
- Easier to insert variables
- Supports multi-line strings

---

## Operator Precedence

JavaScript follows mathematical order of operations.

Example:

```javascript
10 + 5 * 2
```

Result:

```
20
```

because multiplication happens first.

Using parentheses:

```javascript
(10 + 5) * 2
```

Result:

```
30
```

---

## Things I Learned Today

- Always declare variables with `const` or `let`.
- `%` returns the remainder, not the quotient.
- Prefer `===` over `==`.
- Template literals are easier to read than string concatenation.
- Parentheses can change the order of calculations.

---

## Mistakes I Made

- Forgot to declare variables in one exercise.
- Confused `==` and `===`.
- Made a typo in `${}`.
- Forgot that `%` returns only the remainder.
- Made an arithmetic mistake while evaluating an expression.

---

## Key Takeaways

- Use `const` whenever possible.
- Use `let` only when a variable needs to change.
- Always use `===` unless you specifically need type coercion.
- Read expressions step by step.
- Template literals make code cleaner and easier to maintain.