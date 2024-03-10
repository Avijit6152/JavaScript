


// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    } else {
        return a / b;
    }
}
// ...................
// Example usage
console.log("Addition: ", add(5, 3)); // Output: 8
console.log("Subtraction: ", subtract(5, 3)); // Output: 2
console.log("Multiplication: ", multiply(5, 3)); // Output: 15
console.log("Division: ", divide(5, 3)); // Output: 1.6666666666666667
console.log("Division by zero: ", divide(5, 0)); // Output: Error: Cannot divide by zero
