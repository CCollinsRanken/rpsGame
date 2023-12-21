// game.js
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    const result = determineWinner(playerChoice, computerChoice);
  
    document.getElementById('result').textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  
    // Clear the result after 5 seconds
    setTimeout(() => {
      document.getElementById('result').textContent = 'Choose an option to start the game!';
    }, 5000);
  }
  
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }