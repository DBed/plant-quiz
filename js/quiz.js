window.onload = function(){
    
    function textCompare(input, plant){
        if(input.toUpperCase() === plant.toUpperCase()){
            return true;
        }
    }

    function gradeQuiz(score){
        if(score < 3){
            return "Sorry!  Study up and try again.";
        } else {
            return "Well done, you aced it!";
        }
    }

    var plantQuiz = document.forms.plant__quiz;

    plantQuiz.onsubmit = checkQuiz;

    var quizScore = 0;

    function checkQuiz() {
        console.log("Quiz checked!");
        //variables for HTML page content
        var question1 = plant__quiz.question__1;
        var question2 = plant__quiz.question__2;
        var question3 = plant__quiz.question__3;
        var outMsg = document.getElementById("quiz__message");
        //check to see if the inputs are empty
        if (textCompare(question1.value, "boston fern")) {
            quizScore = quizScore + 1;
        }

        if (textCompare(question3.value, "spider plant")) {
            quizScore = quizScore + 1;
        }

        if(question2.value === "window"){
            quizScore = quizScore + 1;
        }

        outMsg.innerHTML = ` Final Score: ${quizScore}/3 ${gradeQuiz(quizScore)}`;
        // outMsg.innerHTML = "Test";
        // quizScore = 0;
        return false;
    }
}
