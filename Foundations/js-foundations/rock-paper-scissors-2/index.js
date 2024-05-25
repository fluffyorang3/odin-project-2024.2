function getComputerChoice (computerChoiceInt, computerChoiceHand = "")  {
  computerChoiceInt = Math.random();  
  console.log(computerChoiceInt);

  computerChoiceInt <= 1/3 ? computerChoiceHand = "Rock" : 
  computerChoiceInt > 1/3 && computerChoiceInt <= 2/3 ? computerChoiceHand = "Paper" :
  computerChoiceHand = "Scissors";
  return computerChoiceHand;
}

function getHumanChoice (humanChoiceHand) {
  humanChoiceHand = prompt("Please enter a choice: Rock, Paper or Scissors");
  humanChoiceHand = humanChoiceHand.toLowerCase();
  while (humanChoiceHand != "rock" && humanChoiceHand != "paper" && humanChoiceHand != "scissors") {
    humanChoiceHand = prompt("Please enter a valid choice");
    humanChoiceHand = humanChoiceHand.toLowerCase();
  }
  return humanChoiceHand;
}

console.log(getHumanChoice());
