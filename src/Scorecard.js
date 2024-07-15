class Scorecard {
    
    constructor() {
        this._current_score = 0; 
        this._list_of_frames = [];   
    }

    getCurrentScore() {
        return this._current_score;
    }

    getNumberofFrames() {
        return this._list_of_frames.length;
    }

    getFinalScore() {
        let running_total = 0;

        // Go through the list of frames (maximum of 10) and return the final score.
        // Useful reference : https://www.geeksforgeeks.org/how-to-loop-through-an-array-containing-multiple-objects-and-access-their-properties-in-javascript/

        return 80;
    }

    // TODO - Check if either of these is a strike(10)

    

    addFrame(score1, score2) {
    
        // TODO Confirm that no more than 10 frames are used, else the score will reset.


        // Perform some validation
        if ((score1 + score2) > 10) {
            throw new Error("You cannot score more than 10 with two throws");
        } else {
            if ((!score1) || (!score2)) {
                throw new Error("One of the scores has not been defined")
            }
            else {
                this._current_score = this._current_score + score1 + score2;
            }
            
        }
        // The scores are valid to store in the array for scores for the final calculation.
        const this_frame = {score1, score2};
        this._list_of_frames.push(this_frame);
    }
} 

module.exports = Scorecard;