if (jQuery) {
    var checkAnswers = function() {
        var answerString = '';
        var answers = $(':checked');
        answers.each(function(i) {
            answerString = answerString + answers[i].value;
        });
        $(':checked').each(function(i) {
            var answerString = answerString + answers[i].value;
        });
        checkIfCorrect(answerString);
    }
    var checkIfCorrect = function(theString) {
        if(parseInt(theString, 16) === 811124566973) {
            $('body').addClass('correct');
            $('h1').text('You Win!');
        }
    }
}