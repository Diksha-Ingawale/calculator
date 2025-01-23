// Get input box and buttons
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".button");

// Variables for storing current input and result
let currentInput = "";

// Function to update the display
function updateDisplay(value) {
  inputBox.value = value || "0";
}

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    // Handle button functionality
    if (buttonText === "AC") {
      // Clear input
      currentInput = "";
      updateDisplay(currentInput);
    } else if (buttonText === "DEL") {
      // Delete last character
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput);
    } else if (buttonText === "=") {
      // Calculate result
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
      updateDisplay(currentInput);
    } else {
      // Append number or operator to input
      if (currentInput === "Error") {
        currentInput = ""; // Reset if there was an error
      }
      currentInput += buttonText;
      updateDisplay(currentInput);
    }
  });
});

// Initialize display
updateDisplay(currentInput);
