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


    _isStrike(frame) {
        if (frame.score_one == 10) {
            return true;
        }
        else {
            return false;
        }
    }

    _isSpare(frame) {
        if ((frame.score_one + frame.score_two) == 10) {
            return true;           
        }
        else {
            return false;
        }
    }


    getFrameScore(frame) {
        return (frame.score_one + frame.score_two);
    }


    getFinalScore() {

        // Useful reference : https://www.geeksforgeeks.org/how-to-loop-through-an-array-containing-multiple-objects-and-access-their-properties-in-javascript/
        let game_total = 0;
        let loop_counter = 0;
        const LAST_NORMAL_ROUND = 10;
        
        this._list_of_frames.forEach(thisFrame => {
            
            loop_counter ++;
            process.stdout.write("Loop : " + loop_counter + ' : ')
            
            // Add the scores for this frame.
            game_total += this.getFrameScore(thisFrame);

            if (loop_counter < LAST_NORMAL_ROUND) {
                // Check for bonus.
                
                // Grab the next frame if we need it. We'll check for boundary conditions later on for the undefined object.
                let next_frame = this._list_of_frames[loop_counter];

                // Count the next two scores and add as a bonus mark (unless the last round)
                if (this._isStrike(thisFrame)) {
                    
                    if (typeof next_frame !== "undefined") {
                        game_total += this.getFrameScore(next_frame);
                        process.stdout.write(" : Strike bonus awarded ");

                        // If this next_frame is a strike too, then we need to add the next one too!
                        if (next_frame.score_one == 10 && (loop_counter <= LAST_NORMAL_ROUND-1)) {
                            let further_frame = this._list_of_frames[loop_counter+2];
                            if (typeof further_frame !== "undefined") {
                                game_total += this.getFrameScore(further_frame);
                                process.stdout.write(" : Strike bonus awarded ");
                            }
                        }
                    }
                    
                } else {
                    // If this is not a STRIKE, then check for a SPARE.

                    if (this._isSpare(thisFrame)) {
                        // This is a SPARE. so the next frame score is added as bonus mark.
                        // Get the next frame scores and add to the total (if not the last frames.)
                        // Check if this is the last entry in the array, if so, don't retrieve the next score. This is a bonus roll and there will not be another frame waiting to be scored.
                        if (typeof next_frame !== 'undefined') {
                            game_total = game_total + next_frame.score_one; // Caused a NaN ERROR
                            process.stdout.write(" : Spare bonus awarded ");
                        }

                    }
                }
            }
            console.log(" : " + game_total);
            
        })
        return game_total;
    }
    

    addFrame(score1, score2) {

        // Perform some basic validation.

        if ((score1 + score2) > 10) {
            throw new Error("You cannot score more than 10 with two throws");
        } else {
            if (Number.isInteger(score1) && Number.isInteger(score2)) {
                this._current_score = this._current_score + score1 + score2;    
            }
            else {
                throw new Error("One of the scores has not been defined");
            }
            
        }
        // The scores are valid to store in the array for scores for the final calculation.
        // Make up the javascript object with these two attributes.
        const this_frame = {score_one : score1, score_two : score2};
        this._list_of_frames.push(this_frame);
    }
} 

module.exports = Scorecard;