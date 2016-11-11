/**
 * Created by arianneglick on 11/3/16.
 */
describe('ScoringService', function() {
    var scoringService;

    beforeEach(function(){
        scoringService = new ScoringService;
    });
    describe('calculateOutScore', function() {
        it('should output the total score for the front 9 holes', function() {
            var scores = [];
            for (var i = 0; i < 18; i++){
                scores[i] = 0;
            }
            scores[0] = 4;
            scores[1] = 5;
            scores[5] = 3;
            scores[17] = 3;  //This is hole 18, which is not part of the front 9, so it shouldn't be counted

            var out = scoringService.calulateOutScore(scores);

            expect(out).toBe(12);
        });
        it('should calculate even if not all scores are there', function() {
            var score = [];
            for (var scoreIndex = 0; scoreIndex < 18; scoreIndex++) {
                score[scoreIndex] = 0;
            }
            score [0] = 4;
            score [1] = 3;

            var out = scoringService.calculateOutScore(scores);

            expect(out).toBe(7);
            expect().not.toThrow();
        });
        it('should throw an error when there is a negative number in the input', function() {

        });
    });
    describe('calculateInScore', function() {
        it('should output the total score for the back 9 holes', function() {

        });
        it('should calculate even if not all scores are there', function() {

        });
        it('should throw an error when there is a negative number in the input', function() {

        });
    });
    describe('calculateTotalScore', function() {
        it('should output the total score for all 18 holes', function() {

        });
        it('should calculate even if not all scores are there', function() {

        });
        it('should throw an error on negative number in input', function(){

        });

    });
    describe('compareToPar', function() {
        it('should output total score minus par', function() {

        });
        it('should throw an error on negative number in input', function() {

        });
        it('should output total score minus par even if not all scores are there', function() {

        });
        it('should ', function() {

        });
    });
});