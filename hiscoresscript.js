$(document).ready(function() {
    var oldscores = JSON.parse(localStorage.getItem("hiscores"))
    console.log(oldscores.initials)
    var scoreList = document.getElementById("hiscores-list");
    // if there are hiscores in the localstorage 
    if (oldscores!==null){
        for (i=0;i<oldscores.length;i++){
            var newPlayerScore = document.createElement("p");
            var arrayPop = oldscores[i]
            console.log(arrayPop)
            newPlayerScore.textContent = "User: " + arrayPop.initials + " Quiz Score: " + arrayPop.score
            scoreList.appendChild(newPlayerScore)
        }
    }
    else {
        var newPlayerScore = document.createElement("p");
        newPlayerScore.textContent = "There are no local hiscores scored."
    }
})