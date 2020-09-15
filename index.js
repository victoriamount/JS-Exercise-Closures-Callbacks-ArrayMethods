// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter1 is a variable that is equal to a nested function, while counter2 is a function that uses closure to increase a count variable that was declared and set to 0 outside the function. 
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter2 uses a closure, because the function is reaching outside itself to look for a variable that isn't inside it.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 could be preferable in a situation where global variables are avoided. counter2 is better if we do want access to the count variable outside of the counter function.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random()*2.999);
}

console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(myFunction, numInnings){

  let myScore = {
    "Home": 0,
    "Away":0
  }
  for (let i = 0; i < numInnings; i++) {
    myScore.Home = myScore.Home+myFunction();
    myScore.Away = myScore.Away+myFunction();
  }
  return myScore;
}

console.log(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(finalScore, callbackInning, myInnings) {
  for (let i = 0; i < myInnings; i++) {
    if (i == 0) {
      console.log(`${i+1}st inning: ${finalScore(callbackInning, i).Away} - ${finalScore(callbackInning, i).Home}`);
    }
    else if (i == 1) {
      console.log(`${i+1}nd inning: ${finalScore(inning, i).Away} - ${finalScore(inning, i).Home}`);
    }
    else if (i == 2) { 
      console.log(`${i+1}rd inning: ${finalScore(inning, i).Away} - ${finalScore(inning, i).Home}`);
    }
    else {
      console.log(`${i+1}th inning: ${finalScore(inning, i).Away} - ${finalScore(inning, i).Home}`);
    }
  }
}

console.log(scoreboard(finalScore, inning, 9));
console.log(scoreboard(finalScore, inning, 9));
console.log(scoreboard(finalScore, inning, 9));