const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a tie!";
  } else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playerInput() {
  let validateInput = false;
  while (validateInput == false) {
    const choice = prompt(
      "Type 'Rock' 'Paper' or 'Scissors' to play 5 rounds against the computer."
    );
    if (choice == null) {
      continue;
    }
    const choiceLowerCase = choice.toLowerCase();
    if (choices.includes(choiceLowerCase)) {
      validateInput = true;
      return choiceLowerCase;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerInput();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player is the winner");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer is the winner");
  } else {
    console.log("We have a tie!");
  }
}

game();
