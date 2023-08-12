document.addEventListener("DOMContentLoaded", function () {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    const maxAttempts = 3; // Set the maximum number of attempts
  
    let attempts = 0;
  
    for (attempts = 1; attempts <= maxAttempts; attempts++) {
      const guessString = prompt(`Attempt ${attempts}/${maxAttempts}: Guess a number between 1 and 10:`);
  
      if (guessString === null) {
        break; // Player canceled or closed the prompt
      }
  
      const guess = parseInt(guessString);
  
      if (isNaN(guess) || guess < 1 || guess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        attempts--; // Decrement attempts to repeat the current attempt
        continue; // Skip the rest of the loop and move to the next attempt
      }
      if (guess === targetNumber) {
        
        alert(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        break;
      } else if (attempts === maxAttempts) {
        alert(`Game over! You Lose. The number was ${targetNumber}.`);
      } else {
        const hint = guess < targetNumber ? "Try a higher number." : "Try a lower number.";
        alert(`${hint} ${maxAttempts - attempts} attempts remaining.`);
      }
    }
  });
  
  