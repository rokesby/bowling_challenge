// TODO - Try the new ES6 Convention - https://chatgpt.com/share/8e4d1ab5-a275-4fce-b43b-37ca988b81ba

// console.log('1st test message');

const Scorecard = require('./src/Scorecard.js');

// let myScorecard = new Scorecard();
// console.log(myScorecard.getCurrentScore());    // Zero as expected.

// myScorecard.addFrame(2,5);
// console.log(myScorecard.getCurrentScore());    // 7 as expected.

// myScorecard.addFrame(3,5);              // 15 as expected.
// console.log(myScorecard.getCurrentScore());
// console.log("Number of frames: " + myScorecard.getNumberofFrames());

// console.log("strike or spare?");
// myScorecard = new Scorecard();
// console.log(myScorecard.getCurrentScore());    // 0 as expected.
// myScorecard.addFrame(3,5);      
// myScorecard.addFrame(5,5);      
// myScorecard.addFrame(10,0);
// myScorecard.getFinalScore();

// myScorecard = new Scorecard();
// myScorecard.addFrame(9,5);     
// console.log(myScorecard.getScore());    // 0 as expected.

// myScorecard = new Scorecard();
// myScorecard.addFrame('',5);     
// console.log(myScorecard.getScore());    // 0 as expected.


// Test strike


// scorecard14.addFrame(10,0);
// scorecard14.addFrame(10,0);
// scorecard14.addFrame(10,0);


// scorecard14.addFrame(10,0);
// scorecard14.addFrame(10,0);
// scorecard14.addFrame(10,0);

// scorecard14.addFrame(10,0);
// scorecard14.addFrame(10,0);
// scorecard14.addFrame(10,0);

// scorecard14.addFrame(10,0);

// // Bonus rolls due to strike.
// scorecard14.addFrame(10,0); // bonus round.
// scorecard14.addFrame(10,0); // bonus round.


// scorecard13.addFrame(1,1);
// scorecard13.addFrame(1,1);
// scorecard13.addFrame(1,1);


// scorecard13.addFrame(1,1);
// scorecard13.addFrame(1,1);
// scorecard13.addFrame(1,1);

// scorecard13.addFrame(1,1);
// scorecard13.addFrame(1,1);
// scorecard13.addFrame(1,1);

// scorecard13.addFrame(10,0);

// // Bonus roll due to STRIKE. Next two rolls to be included.
// scorecard13.addFrame(5,4);

// // Should be 37 instead of 42.
// // I shouldn't be adding the last 5 and 4 as a forward bonus as I'm on the last round.
// console.log(scorecard13.getFinalScore());
let scorecard9 = new Scorecard(); 

scorecard9.addFrame(0,0);
scorecard9.addFrame(5,5);
scorecard9.addFrame(1,8);

scorecard9.addFrame(0,0);
scorecard9.addFrame(0,0);
scorecard9.addFrame(0,0);

scorecard9.addFrame(0,0);
scorecard9.addFrame(0,0);
scorecard9.addFrame(0,0);

scorecard9.addFrame(0,0);

console.log(scorecard9.getFinalScore());