$(document).ready(function() {
// Global Variables
    // create variables to hold question choices for each button
    var button1Choice = ["<js>","!+","function myFunction()","( )","Apple","Concat()","Round x to the nearest whole number","getElementbyID"]
    var button2Choice = ["<javascript>","/=","function=myFunction()","[ ]","False","join()","Return the array of x with the lowest value","getElementsbyID"]
    var button3Choice = ["<script>","x=","myFunction = ",": :", "1","splice()","Return the absolute value of a x","getElementsbyTagName"]
    var button4Choice = ["<scripting>","!=","myFunction() function:","< >","None of the above","push()","Round x down to the nearest whole number","getAttribute"]

    // variables to manipulate choice button text
    var btn1 = document.getElementById("button-1")
    var btn2 = document.getElementById("button-2")
    var btn3 = document.getElementById("button-3")
    var btn4 = document.getElementById("button-4")

    // create question bank object to hold questions
    var questionBank = [
    "Inside which HTML element do we put the JavaScript?", 
    "How do you represent 'Not equal to'?", 
    "How would one define a new function?", 
    "Arrays are defined within",
    "What is an example of a boolean variable?",
    "How would you combine multiple arrays into one?",
    "What does the Math method floor(x) do?",
    "If one wanted to reference all HTML <p> items in one variable, what would you utilize?"
    ]
    // holds answers for questions
    var answerKey = ["3","4","1","2","2","1","4","3"]
    var keyLength = (answerKey.length-1)
    // holds answer key length, question bank length
    var len = 0
    // holds question number length
    var quesLen = 1
    // holds the total score of the quiz
    var runningScore = 0

    // creates timer variable to reference h1 element
    var timer = document.getElementById("timer")
    // creates global countdown seconds variable
    var timeLeft = 60;

//Start, next questions, and end functions
    function removeStart(){
        // removes start button and hides start button div
        var startButton = document.getElementById("button-0")
        startButton.remove()

        var startDiv = document.getElementById("start-button")
        startDiv.remove()

        // reveals answer button panel
        document.getElementById("choice-panel").style.visibility = "visible"
    }

    // create end function
    function endQuiz(){
        var allButtons = document.getElementById("choice-panel")
        var subText = document.getElementById("subText")
        var form = document.createElement("form"); 
        form.setAttribute("method", "post"); 
        form.setAttribute("action", "submit.php"); 
        timeLeft=0
        timer.textContent = 'Quiz Over';

        allButtons.remove()
        subText.remove()
        // document.getElementById("quiz-question").appendChild(form);
        $("#quiz-question").appendChild(form)  
    }
    // function to move to the next question
    function nextquestion(){
        // CREATE IF ELSE FOR IF LEN=LAST QUESTION LENGTH RUN END FUNCTION. ELSE RUN BELOW CODE
        if (len>=keyLength){
            endQuiz()
        }
        else {
        // update len variable to move to the next answer key and question bank length
        len++
        quesLen++
        // Update question number
        $(".question-number").text("Question "+ quesLen)

        // display new question
        $("#quiz-question").text(questionBank[len])

        // UPDATE 4 BUTTON VALUES --------------------------------
        //
        btn1.textContent = button1Choice[len]
        btn2.textContent = button2Choice[len]
        btn3.textContent = button3Choice[len]
        btn4.textContent = button4Choice[len]
        }
    }

// Timer that counts down from 60
function countdown() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 0) {
        // Set the `textContent` of `timer` to show the remaining seconds
        timer.textContent = timeLeft
        // Decrement `timeLeft` by 1
        timeLeft--
      } else {
        endQuiz()
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval)
        // Call the `displayMessage()` function
        displayMessage()
      }
    }, 1000);
  }
  

// On click events

    // Begins the actual quiz when clicking the start button
    $(".btn-start").on("click", function(){
        removeStart()
        $(".question-number").text("Question "+ quesLen)
        $("#quiz-question").text(questionBank[len])
        // update button text with array[0] from four answer arrays
        btn1.textContent = button1Choice[len]
        btn2.textContent = button2Choice[len]
        btn3.textContent = button3Choice[len]
        btn4.textContent = button4Choice[len]
        countdown()
    })

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
        // Deduct 5 seconds from time left and run next question
        for (i=0;i<5;i++){
            timeLeft--
        }
        timer.textContent = timeLeft;
        nextquestion()
      }

    })
  })