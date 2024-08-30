function printPattern() {
    // Prompt the user to enter a number
    let userInput = prompt("Please enter the number of lines:");

    // Convert the input to a number
    let n = parseInt(userInput);

    // Check if the input is a valid number
    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        // Loop to print each line
        for (let i = 1; i <= n; i++) {
            // Print i number of '*' in the ith line
            console.log('*'.repeat(i));
        }
    }
}

// Run the function
printPattern();
