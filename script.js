// Get the calculator display element
const display = document.getElementById("display");

/**
 * Adds numbers or basic operators (+, -, *, /) to the display
 */
function appendValue(value) {
  display.value += value;
}

/**
 * Adds special functions (like sin(), cos(), log, sqrt)
 */
function appendFunction(func) {
  display.value += func;
}

/**
 * Clears all input from the display
 */
function clearDisplay() {
  display.value = "";
}

/**
 * Deletes the last entered character
 */
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/**
 * Calculates the final result
 */
function calculateResult() {
  try {
    // Replace trigonometric functions with Math equivalents before evaluating
    let expression = display.value
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(");

    // Evaluate the expression
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
