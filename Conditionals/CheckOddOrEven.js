function checkOddOrEven() {
    // Prompt the user to enter a number
    let userInput = prompt("Please enter a number:");

    // Convert the input to a number
    let number = parseInt(userInput);

    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("That's not a valid number. Please try again.");
    } else {
        // Check if the number is odd or even
        if (number % 2 === 0) {
            console.log(number + " is even.");
        } else {
            console.log(number + " is odd.");
        }
    }
}

// Run the function
checkOddOrEven();
