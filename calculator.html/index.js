// Select all buttons and the input field
const buttons = document.querySelectorAll(".button");
const inputField = document.getElementById("calculatorInput");
const enterButton = document.getElementById("enterButton");

// Add click event listener to each button (excluding the enter button)
buttons.forEach((button) => {
  if (button.value !== "=") {
    // Ignore the enter button
    button.addEventListener("click", () => {
      // Append the clicked button's value to the input field
      inputField.value += button.value;
    });
  }
});

// Add functionality to the "enter" button
enterButton.addEventListener("click", () => {
  try {
    // Use JavaScript's eval function to evaluate the expression
    inputField.value = eval(inputField.value);
  } catch (error) {
    inputField.value = "Error";
  }
});
