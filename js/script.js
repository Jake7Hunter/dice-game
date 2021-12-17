// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

let lastNum = 0

// Here's a test roll, check the console!
// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"
const rollDie = function() {

  const rollNum = getRandomDiceRoll()
  const rollNum2 = getRandomDiceRoll()

  // 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

  const diceFace = document.getElementById(`die`)
  const diceMessage = document.getElementById(`text`)
  const diceFace2 = document.getElementById(`die2`)
  const diceMessage2 = document.getElementById(`text2`)
  let rollStr = ``
  let dupMessage = ``

  diceFace.setAttribute(`src`, `img/dice${rollNum}.svg`)
  diceFace2.setAttribute(`src`, `img/dice${rollNum2}.svg`)

  // 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)
  
if (rollNum == 1 && rollNum2 == 1){
    rollStr = `Snake Eyes`
  }else if(rollNum == 1 && rollNum2 == 2 || rollNum == 2 && rollNum2 == 1){
    rollStr = `Ace Deuce`
  }else if (rollNum == 2 && rollNum2 == 2){
    rollStr = `Hard Four`
  }else if(rollNum == 4){
    rollStr = `Four`
  }else if(rollNum == 5){
    rollStr = `Five`
  }else if(rollNum == 6){
    rollStr = `Six`
  }else {
    rollStr = `I dont know that number!`
  }

  if (rollNum == lastNum){
    dupMessage = `Again!`
  }

  lastNum = rollNum;

  diceMessage.textContent = `You rolled: ${rollStr} ${dupMessage}`

  // 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test


}
const eleButton = document.getElementById(`button`)

eleButton.addEventListener(`click`, rollDie)

//Not fully completed