function findMaximumValue() {
    // Prompt the user to enter numbers separated by commas
    let userInput = prompt("Please enter numbers separated by commas:");

    // Convert the input into an array of numbers
    let numberArray = userInput.split(',').map(Number);

    // Check if the array contains valid numbers
    if (numberArray.some(isNaN)) {
        console.log("Please enter a valid list of numbers.");
    } else {
        // Find the maximum value in the array
        let maxValue = Math.max(...numberArray);
        console.log("The maximum value in the array is: " + maxValue);
    }
}

// Run the function
findMaximumValue();
