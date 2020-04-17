var choices = ["rock", "paper", "scissors"];
var userChoise = choices[Math.floor(Math.random() * 3)];
var computerChoise = choices[Math.floor(Math.random() * 3)];

function play(user, computer) {
    if (user === computer) {
        console.log("User selected:" + userChoise + "!");
        console.log("Computer selected:" + computerChoise + "!")
        console.log("It's a tie!");
    } else if (user === "rock" && computer === "scissors" || user === "paper" && computer === "rock" || user === "scissors" && computer === "paper") {
        console.log("User selected:" + userChoise + "!");
        console.log("Computer selected:" + computerChoise + "!")
        console.log("User wins!")
    } else {
        console.log("User selected:" + userChoise + "!");
        console.log("Computer selected:" + computerChoise + "!")
        console.log("Computer wins!")
    }
}

play(userChoise, computerChoise)