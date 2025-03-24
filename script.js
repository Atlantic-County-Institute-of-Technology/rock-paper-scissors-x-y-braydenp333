const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const x = document.getElementById("x");
const y = document.getElementById("y");
let userpick = "";

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
