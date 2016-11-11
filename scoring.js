/**
 * Created by arianneglick on 11/3/16.
 */
function ScoringService() {
    this.calculateOutScore = function() {
        var out = 0;
        for (var score = 0; score < 9; score++){
            out = out + scores[score];
        }
        return out;
    }
}

module.exports = ScoringService;