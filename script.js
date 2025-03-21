const text = document.getElementById("text");
const rock = document.getElementById("rock");
const container = document.getElementById("container");
const player = document.getElementById("playerversus");
const computer = document.getElementById("cpuversus");
let clicks = new Audio('assets/click.mp3');

const button_list = document.querySelectorAll("button");
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

