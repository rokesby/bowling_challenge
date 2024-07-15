// TODO - Try the new ES6 Convention - https://chatgpt.com/share/8e4d1ab5-a275-4fce-b43b-37ca988b81ba

console.log('1st test message');

const Scorecard = require('./src/Scorecard.js');

let myScorecard = new Scorecard();
console.log(myScorecard.getCurrentScore());    // Zero as expected.

myScorecard.addFrame(2,5);
console.log(myScorecard.getCurrentScore());    // 7 as expected.

myScorecard.addFrame(3,5);              // 15 as expected.
console.log(myScorecard.getCurrentScore());
console.log("Number of frames: " + myScorecard.getNumberofFrames());

myScorecard = new Scorecard();
console.log(myScorecard.getCurrentScore());    // 0 as expected.

// myScorecard = new Scorecard();
// myScorecard.addFrame(9,5);     
// console.log(myScorecard.getScore());    // 0 as expected.

// myScorecard = new Scorecard();
// myScorecard.addFrame('',5);     
// console.log(myScorecard.getScore());    // 0 as expected.