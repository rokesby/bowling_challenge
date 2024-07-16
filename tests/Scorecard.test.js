// Useful tool - https://www.bowlinggenius.com/

const Scorecard = require('../src/Scorecard.js');

let scorecard = new Scorecard();

// Test the initial scoring mechanism.

describe ('intialise object', () => {

    it('Create object and check score', () => {
        expect(scorecard.getCurrentScore()).toBe(0);
    })
})


// Basic scoring for 1 frame.
scorecard = new Scorecard();
describe ('Basic scoring for one frames', () => {
    it('Run two frames', () => {
        scorecard.addFrame(2,5);
        expect(scorecard.getCurrentScore()).toBe(7);
    })
})

// Basic scoring for 2 frames.
scorecard2 = new Scorecard(); // If reconstruct 'scorecard', instead of declaring a new 'scorecard2', the score 7 from the test above will persist and instead of getting 15, I'll get 22.
describe ('Basic scoring for two frames', () => {
    // console.debug("=> " + scorecard.getScore);
    it('Run two frames', () => {
        scorecard2.addFrame(2,5);
        scorecard2.addFrame(3,5);
        expect(scorecard2.getCurrentScore()).toBe(15);
    })
})

// Input two scores which are invalid together.
scorecard3 = new Scorecard();
describe('Error case with count too high', () => {
    it('One frame with invalid scores', () => {
        
        function expectError() {
            scorecard3.addFrame(3,8);
        }
        
        expect(expectError).toThrow();
        expect(expectError).toThrowError('You cannot score more than 10 with two throws');


    })
})

// Input an empty string or undefined for a score.
// Useful video - https://www.youtube.com/watch?v=6NPaTSj7Gtk

scorecard4 = new Scorecard();

describe('Error case with invalid score', () => {
    it('First frame with invalid scores', () => {
        
        function expectError() {
            scorecard4.addFrame(3,'');
        }
        
        expect(expectError).toThrow();
        expect(expectError).toThrowError('One of the scores has not been defined');


    })
})

// Input an empty string or undefined for a score
scorecard5 = new Scorecard();

describe('Error case with invalid score', () => {
    it('First frame with invalid scores', () => {
        
        function expectError() {
            scorecard5.addFrame('',3);
        }
        
        expect(expectError).toThrow();
        expect(expectError).toThrowError('One of the scores has not been defined');

    })
})

// Confirm correct count of 10 frames.
scorecard6 = new Scorecard(); // If reuse 'scorecard', instead of declaring a new 'scorecard2', the score 7 from the test above will persist and instead of getting 15, I'll get 22.
describe ('Count 10 frames', () => {
    it('Add frames', () => {
        scorecard6.addFrame(2,5);
        scorecard6.addFrame(3,5);
        scorecard6.addFrame(3,5);


        scorecard6.addFrame(3,5);
        scorecard6.addFrame(3,5);
        scorecard6.addFrame(3,5);

        scorecard6.addFrame(3,5);
        scorecard6.addFrame(3,5);
        scorecard6.addFrame(3,5);

        scorecard6.addFrame(3,5);
        
        expect(scorecard6.getNumberofFrames()).toBe(10);
    
    })
})

// Confirm correct total score
scorecard7 = new Scorecard(); // If reconstruct 'scorecard', instead of declaring a new 'scorecard2', the score 7 from the test above will persist and instead of getting 15, I'll get 22.
describe ('Count 10 frames and the total score', () => {
    it('Add frames', () => {
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(3,5);
        scorecard7.addFrame(4,5);
        
        expect(scorecard7.getFinalScore()).toBe(81);
    
    })
})


// Confirm correct total score for a GUTTER GAME
scorecard8 = new Scorecard(); // If reconstruct 'scorecard', instead of declaring a new 'scorecard2', the score 7 from the test above will persist and instead of getting 15, I'll get 22.
describe ('Confirm correct total score for a GUTTER GAME', () => {
    it('Add frames', () => {
        scorecard8.addFrame(0,0);
        scorecard8.addFrame(0,0);
        scorecard8.addFrame(0,0);


        scorecard8.addFrame(0,0);
        scorecard8.addFrame(0,0);
        scorecard8.addFrame(0,0);

        scorecard8.addFrame(0,0);
        scorecard8.addFrame(0,0);
        scorecard8.addFrame(0,0);

        scorecard8.addFrame(0,0);
        
        expect(scorecard8.getFinalScore()).toBe(0);
    
    })
})


// Confirm correct total score for an early spare.
scorecard9 = new Scorecard(); // If reconstruct 'scorecard', instead of declaring a new 'scorecard2', the score 7 from the test above will persist and instead of getting 15, I'll get 22.
describe ('Confirm correct total score for an early spare', () => {
    it('Add frames', () => {
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
        
        expect(scorecard9.getFinalScore()).toBe(20);
    
    })
})


// Check spare score late on in the game.
scorecard10 = new Scorecard(); 
describe ('Confirm correct total score for a late spare', () => {
    it('Add frames', () => {
        scorecard10.addFrame(1,1);
        scorecard10.addFrame(1,1);
        scorecard10.addFrame(1,1);


        scorecard10.addFrame(1,1);
        scorecard10.addFrame(1,1);
        scorecard10.addFrame(1,1);

        scorecard10.addFrame(1,1);
        scorecard10.addFrame(1,1);
        scorecard10.addFrame(1,1);

        scorecard10.addFrame(5,5);
        // Bonus role for the spare
        scorecard10.addFrame(2,0);
        
        expect(scorecard10.getFinalScore()).toBe(30);
    
    })
})

// Strike early on in the game.
scorecard11 = new Scorecard(); 
describe ('Confirm correct total score for an early strike', () => {
    it('Add frames', () => {
        scorecard11.addFrame(10,0);
        scorecard11.addFrame(1,1);
        scorecard11.addFrame(1,1);


        scorecard11.addFrame(1,1);
        scorecard11.addFrame(1,1);
        scorecard11.addFrame(1,1);

        scorecard11.addFrame(1,1);
        scorecard11.addFrame(1,1);
        scorecard11.addFrame(1,1);

        scorecard11.addFrame(1,1);

        expect(scorecard11.getFinalScore()).toBe(30);
    
    })
})



// Strike late on in the game - end with no spare
scorecard13 = new Scorecard(); 
describe ('Strike on last round - bonus round with no spare', () => {
    it('Add frames', () => {
        scorecard13.addFrame(1,1);
        scorecard13.addFrame(1,1);
        scorecard13.addFrame(1,1);


        scorecard13.addFrame(1,1);
        scorecard13.addFrame(1,1);
        scorecard13.addFrame(1,1);

        scorecard13.addFrame(1,1);
        scorecard13.addFrame(1,1);
        scorecard13.addFrame(1,1);

        scorecard13.addFrame(10,0);

        // Bonus roll due to STRIKE. Next two rolls to be included.
        scorecard13.addFrame(5,4);
        
        expect(scorecard13.getFinalScore()).toBe(37);
    
    })
})

// Strike late on in the game - end with a spare
scorecard12 = new Scorecard(); 
describe ('Confirm correct total score for a late strike', () => {
    it('Add frames', () => {
        scorecard12.addFrame(1,1);
        scorecard12.addFrame(1,1);
        scorecard12.addFrame(1,1);


        scorecard12.addFrame(1,1);
        scorecard12.addFrame(1,1);
        scorecard12.addFrame(1,1);

        scorecard12.addFrame(1,1);
        scorecard12.addFrame(1,1);
        scorecard12.addFrame(1,1);

        scorecard12.addFrame(10,0);

        // Bonus roll due to strike.
        scorecard12.addFrame(5,0);
        
        expect(scorecard12.getFinalScore()).toBe(33);
    
    })
})

// Perfect game
scorecard14 = new Scorecard(); 
describe ('Perfect game', () => {
    it('Add frames', () => {
        
        scorecard14.addFrame(10,0); // Frame 1.
        scorecard14.addFrame(10,0); // Frame 2.
        scorecard14.addFrame(10,0); // Frame 3.


        scorecard14.addFrame(10,0); // Frame 4
        scorecard14.addFrame(10,0); // Frame 5
        scorecard14.addFrame(10,0); // Frame 6

        scorecard14.addFrame(10,0); // Frame 7
        scorecard14.addFrame(10,0); // Frame 8
        scorecard14.addFrame(10,0); // Frame 9

        scorecard14.addFrame(10,0); // Frame 10

        // Bonus rolls due to strike.
        scorecard14.addFrame(10,0);
        scorecard14.addFrame(10,0);
        
        expect(scorecard14.getFinalScore()).toBe(300);
    
    })
})


// Given example
scorecard15 = new Scorecard(); 
describe ('Given example', () => {
    it('Add frames', () => {
        
        scorecard15.addFrame(1,4); // Frame 1.
        scorecard15.addFrame(4,5); // Frame 2.
        scorecard15.addFrame(6,4); // Frame 3.


        scorecard15.addFrame(5,5); // Frame 4
        scorecard15.addFrame(10,0); // Frame 5
        scorecard15.addFrame(0,1); // Frame 6

        scorecard15.addFrame(7,3); // Frame 7
        scorecard15.addFrame(6,4); // Frame 8
        scorecard15.addFrame(10,0); // Frame 9

        scorecard15.addFrame(2,8); // Frame 10

        // Bonus rolls due to strike.
        scorecard15.addFrame(6,0);
        
        expect(scorecard15.getFinalScore()).toBe(133);
    
    })
})