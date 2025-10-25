// Get the display input element
const display = document.getElementById("display");

/**
 * Function: appendValue()
 * Adds the clicked button value to the display screen
 */
function appendValue(value) {
  display.value += value;
}

/**
 * Function: clearDisplay()
 * Clears the display screen completely
 */
function clearDisplay() {
  display.value = "";
}

/**
 * Function: calculateResult()
 * Evaluates the mathematical expression entered
 */
function calculateResult() {
  try {
    // Use eval() to calculate the result
    display.value = eval(display.value);
  } catch {
    // If any error occurs (e.g., invalid expression)
    display.value = "Error";
  }
}
