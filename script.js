const Rockbtn = document.getElementById("Rock");
const Paperbtn = document.getElementById("Paper");
const Scissorsbtn = document.getElementById("Scissors");
const xbtn = document.getElementById("x");
const ybtn = document.getElementById("y");
let playerscore = document.getElementById("playscorebutton");
let cpuscore = document.getElementById("cpuscorebutton");
var userpick = "";
var computerchoice = "";


function computer() {
    computerchoice = Math.floor(Math.random() * 5);
    consolelog(computerchoice)
}


function userChoiceRock() {
    userpick = 1;
        alert(userpick)
}
rock.addEventListener("click", userChoiceRock)

function userChoicePaper() {
    userpick = 2;
        alert(userpick)
}
paper.addEventListener("click", userChoicePaper)

function userChoiceScissors() {
    userpick = 3;
        alert(userpick)
}
scissors.addEventListener("click", userChoiceScissors)

function userChoiceX() {
    userpick = 4;
        alert(userpick)
}
x.addEventListener("click", userChoiceX)

function userChoiceY() {
    userpick = 5;
        alert(userpick)
}
y.addEventListener("click", userChoiceY)

if (userpick == 1) {
    if (computerchoice = 1) {
        alert("Tie")
        playerscore++
        playerscore.innerHTML = "PLAYER SCORE:"
    }
    else if (computerchoice = 3 || 5) {
        alert("Player Wins!")
        playerscore++
    }
    else {
        alert ("Computer Wins!")
        cpuscore++
    }
}
if (userpick == 2) {
    if (computerchoice = 2) {
        alert("Tie")
    }
    else if (computerchoice = 1 || 4) {
        alert("Player Wins!")
        playerscore++
    }
    else {
        alert ("Computer Wins!")
        cpuscore++
    }
}
if (userpick == 3) {
    if (computerchoice = 3) {
        alert("Tie")
    }
    else if (computerchoice = 2 || 5) {
        alert("Player Wins!")
        playerscore++
    }
    else {
        alert ("Computer Wins!")
        cpuscore++
    }
}
if (userpick == 4) {
    if (computerchoice = 4) {
        alert("Tie")
    }
    else if (computerchoice = 1 || 3) {
        alert("Player Wins!")
        playerscore++
    }
    else {
        alert ("Computer Wins!")
        cpuscore++
    }
}
if (userpick == 5) {
    if (computerchoice = 5) {
        alert("Tie")
    }
    else if (computerchoice = 2 || 4) {
        alert("Player Wins!")
        playerscore++
    }
    else {
        alert ("Computer Wins!")
        cpuscore++
    }
}





/* const button_list = document.querySelectorAll("button");
console.log(button_list);

for(let i = 0; i < button_list.length; i++)
{
    button_list[i].addEventListener("click", clicks);
}
function clicks() {
    clicks.play;
}
if player chose 3
    if cpu chose 2 or cpu chose 4
        "Player wins!"
    else if cpu chose 3
        "Tie"
    else
        "Player loses!"
*/
