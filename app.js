let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let userPoint = document.querySelector("#player-point");
let compPoint = document.querySelector("#comp-point");
let message = document.querySelector("#announce");

// const compWin = () => {
//   compScore++;
//   compPoint.innerText = compScore;
//   message.innerText = "AWW.... THE COMPUTER WINS!"
//   message.style.backgroundColor = "red";
// };

// const userWin = () => {
//   userScore++;
//   userPoint.innerText = userScore;
//   message.innerText = "AWESOME YOU WON!"
//   message.style.backgroundColor = "green";
// };

const drawGame = () => {
  console.log("Draw");
  message.innerText = "DRAW";
  message.style.backgroundColor = "yellow";
  message.style.color = "black";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userPoint.innerText = userScore;
    message.innerText = "AWESOME YOU WON!";
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compPoint.innerText = compScore;
    message.innerText = "AWW.... THE COMPUTER WINS!";
    message.style.backgroundColor = "red";
  }
};

const genComChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let rndIndx = Math.floor(Math.random() * 3);
  return options[rndIndx];
};

const gamePlay = (userChoice) => {
  console.log(`User chose ${userChoice}`);
  let compChoice = genComChoice();
  console.log(`Computer chose ${compChoice}`);
  // Easy Method:
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {

  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});


// My Long method: (to be inserted inside gamePlay() function)
// if (userChoice == compChoice) {
//   console.log("Draw");
//   message.innerText = "DRAW"
//   message.style.backgroundColor = "yellow";
//   message.style.color = "black";
// } else if (userChoice == "rock" && compChoice == "paper") {
//   console.log("Computer wins");
//   compWin();
// } else if (userChoice == "scissor" && compChoice == "paper") {
//   console.log("User wins");
//   userWin();
// } else if (userChoice == "rock" && compChoice == "scissor") {
//   console.log("User wins");
//   userWin();
// } else if (userChoice == "scissor" && compChoice == "rock") {
//   console.log("Computer wins");
//   compWin();
// } else if (userChoice == "paper" && compChoice == "rock") {
//   console.log("User wins");
//   userWin();
// } else if (userChoice == "paper" && compChoice == "scissor") {
//   console.log("Computer wins");
//   compWin();
// }