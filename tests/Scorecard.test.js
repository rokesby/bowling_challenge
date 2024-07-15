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
scorecard6 = new Scorecard(); // If reconstruct 'scorecard', instead of declaring a new 'scorecard2', the score 7 from the test above will persist and instead of getting 15, I'll get 22.
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

        scorecard7.addFrame(3,5);
        
        expect(scorecard7.getFinalScore()).toBe(80);
    
    })
})