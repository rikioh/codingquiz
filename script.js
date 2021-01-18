$(document).ready(function() {
    // create variables to hold question choices
    var questionChoice1 = ["1","2","3","4"]
    var questionChoice2 = ["1","2","3","4"]
    var questionChoice3 = ["1","2","3","4"]
    var questionChoice4 = ["1","2","3","4"]

    // create question bank object to hold questions
    var questionBank = ["What is Javascript?", "Do I like Javascript?", "Is Javascript Easy?", "Is Javascript fun?"]
    // holds answers for questions
    var answerKey = ["1","2","3","4"]
    // holds answer key length, question bank length, and question number length
    var len = 0

    var runningScore = 0

    // CREATE A START QUIZ FUNCTION
        // var btn1 = document.createElement("BUTTON");
        // var btn2 = document.createElement("BUTTON");
        // var btn3 = document.createElement("BUTTON");
        // var btn4 = document.createElement("BUTTON");
        // btn1.setAttribute("class", "btn btn-danger btn-choice");
        // btn2.setAttribute("class", "btn btn-danger btn-choice");
        // btn3.setAttribute("class", "btn btn-danger btn-choice");
        // btn4.setAttribute("class", "btn btn-danger btn-choice");
        // btn1.setAttribute("value", 1);
        // btn2.setAttribute("value", 2);
        // btn3.setAttribute("value", 3);
        // btn4.setAttribute("value", 4);
        // document.getElementById("answer-buttons").appendChild(btn1);
        // document.getElementById("answer-buttons").appendChild(btn2);
        // document.getElementById("answer-buttons").appendChild(btn3);
        // document.getElementById("answer-buttons").appendChild(btn4);

    // function to move to the next question
    function nextquestion(){
        // update len variable to move to the next answer key and question bank length
        len++
        // Update question number
        $(".question-number").text("Question "+ len)

        // display new question
        $("#quiz-question").text(questionBank[len])

        // UPDATE 4 BUTTON VALUES --------------------------------
        //
        // 
        // 

    }

    // Here we create the on click event that gets the user's pick
    $(".btn-choice").on("click", function() {
      console.log($(this).attr("value"))

      // Determine whether or not the correct button was clicked
        // If correct add 1 to the running score,  
      if (($(this).attr("value"))==answerKey[len]) {
        runningScore++
        $("#score").text(runningScore)

        nextquestion()
      }
      else {
        $("#quiz-question").text(questionBank[len])
        nextquestion()
      }

    });
  });