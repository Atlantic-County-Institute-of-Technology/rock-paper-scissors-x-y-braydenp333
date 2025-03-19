const text = document.getElementById("text");
const rock = document.getElementById("rock");
const container = document.getElementById("container");
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
