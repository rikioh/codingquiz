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

    // create object that holds hiscores initials and score
    var hiscores = []
    // create a new variable based off of the local storage hiscores history
    var oldscores = JSON.parse(localStorage.getItem("hiscores"))
    console.log(oldscores)

    // if there are hiscores in the localstorage, push each object of the localstorage hiscores array into the global hiscores array
    if (oldscores!==null){
        for (i=0;i<oldscores.length;i++){
            hiscores.push(oldscores[i])  
        }
        console.log(hiscores)
    }
    else console.log("hiscores undefined")
    

//Start, next questions, and end functions
    function pressStart(){
        // removes start button and hides start button div
        var startButton = document.getElementById("button-0")
        startButton.remove()

        var startDiv = document.getElementById("start-button")
        startDiv.remove()

        // reveals answer button panel
    }

    // create end function
    function endQuiz(){
        // var allButtons = document.getElementById("choice-panel")
        // var subText = document.getElementById("subText")
        // allButtons.remove()
        // subText.remove()
        document.getElementById("choice-panel").style.visibility = "hidden"
        document.getElementById("subText").style.visibility = "hidden"

        var form = document.createElement("form"); 
        form.setAttribute("method", "post"); 
        form.setAttribute("id", "form");
        form.setAttribute("onsubmit", "return false");

        var formInput = document.createElement("INPUT");
        formInput.setAttribute("type", "text");
        formInput.setAttribute("id", "data")

        var formButton = document.createElement("button")
        formButton.setAttribute("value", "submit form");
        formButton.setAttribute("class", "btn btn-success btn-submit");
        formButton.textContent = "Submit"

        var tryAgain = document.createElement("button")
        tryAgain.setAttribute("class", "btn btn-success btn-start");
        tryAgain.textContent = "Try Again"

        timer.textContent = 'Quiz Over';

        // display new question
        $("#quiz-question").text("Enter your initials for the hiscores")


        document.getElementById("main-form").appendChild(form);
        document.getElementById("form").appendChild(formInput);
        document.getElementById("form").appendChild(formButton);
        document.getElementById("main-form").appendChild(tryAgain);

        // allows to submit hiscore form after submit button has been generated
        $(document).ready(function() {
            $(".btn-submit").on("click", function(event){
                event.preventDefault();
                // create object to be pushed into hiscores array
                var user = {
                    initials: formInput.value.trim(),
                    score: runningScore
                }

                // push one time user score into hiscores array
                JSON.parse(hiscores.push(user))
                if (hiscores[0]==null){
                    hiscores.shift();
                }
                // store the array to a local storage for hiscore page use
                localStorage.setItem("hiscores",JSON.stringify(hiscores));

            })
            // reset game
            $(".btn-start").on("click", function(){
                window.location.reload()
            })
        })
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

// Timer that counts down from 60 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! THIS DOESNT WORK RIGHT!!!!!!!!!!!!!!!!!!!!
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
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval)
        endQuiz()
      }
    }, 1000);
  }
  

// On click events

    // Begins the actual quiz when clicking the start button
    $(".btn-start").on("click", function(){
        pressStart()
        $(".question-number").text("Question "+ quesLen)
        $("#quiz-question").text(questionBank[len])
        // update button text with array[0] from four answer arrays
        btn1.textContent = button1Choice[len]
        btn2.textContent = button2Choice[len]
        btn3.textContent = button3Choice[len]
        btn4.textContent = button4Choice[len]
        document.getElementById("choice-panel").style.visibility = "visible"
        document.getElementById("subText").style.visibility = "visible"
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