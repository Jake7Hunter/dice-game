// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Here's a test roll, check the console!
// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"

const rollDie = function() {

  const rollNum = getRandomDiceRoll()
  
  // 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

  const diceFace = document.getElementById(`die`)
  const diceMessage = document.getElementById(`text`)
  let rollStr = ``

  diceFace.setAttribute(`src`, `img/dice${rollNum}.svg`)

  // 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

  
if (rollNum == 1){
    rollStr = `One`
  }else if(rollNum == 2){
    rollStr = `Two`
  }else if (rollNum == 3){
    rollStr = `Three`
  }else if(rollNum == 4){
    rollStr = `Four`
  }else if(rollNum == 5){
    rollStr = `Five`
  }else if(rollNum == 6){
    rollStr = `Six`
  }

  diceMessage.textContent = `You rolled: ${rollStr}`

  // 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test

}
const eleButton = document.getElementById(`button`)

eleButton.addEventListener(`click`, rollDie)