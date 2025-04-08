const player_score = document.getElementById('playscorebutton');
const computer_score = document.getElementById('cpuscorebutton');
const computer_choice = document.getElementById('playerversus');
const player_choice = document.getElementById('cpuversus');
const games_played = document.getElementById('gamesplayedcounter');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const x = document.getElementById('x');
const y = document.getElementById('y');
const choices = document.querySelectorAll('.button');
const result = document.getElementById('result');
const reset_button = document.getElementById('reset');

let player_score_val = 0;
let computer_score_val = 0;
let games_played_val = 0;

const choices_list = ['rock', 'paper','scissors', 'x', 'y'];
const choice_icons = ['🪨', '📄', '✂️', 'x', 'y'];

reset_button.addEventListener('click', () => {
    console.log("Reset");
    reset_game();
})
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        console.log("Choice")
        check_winner((choices_list.indexOf(choice.id)+1), cpu_choose_item());
    })
})
function cpu_choose_item() { 
    return Math.floor(Math.random() * choices.length) + 1 
}
function check_winner(player, cpu) {
    console.log(`Player: ${player} | Computer: ${cpu}`);
   // setTimeout(() => {

    let winner;
    if(player == cpu)
    {
        winner = "Tie!"
    }
    /*
    rock = scissors(3) and y(5)
    paper = rock(1) and x(4)
    scissors = paper(2) and y(5)
    x = rocK(1) and scissors(3)
    y = paper(2) and x(4)
    */
    else if(player == 1) {
        if(cpu == 3 || cpu == 5) {
            winner = "player win"
        }
        else 
            winner = "cpu win"
    }    
    else if(player == 2)
        if(cpu == 1 || cpu == 4) {
            winner = "player win"
        }
        else 
            winner = "cpu win"
    else if(player == 3)
        if(cpu == 2 || cpu == 5) {
            winner = "player win"
        }
        else 
            winner = "cpu win"
    else if(player == 4)
        if(cpu == 1 || cpu == 3) {
            winner = "player win"
        }
        else 
            winner = "cpu win"
    else if(player == 5)
        if(cpu == 2 || cpu == 4) {
            winner = "player win"   
        }
        else 
            winner = "cpu win"
        if(winner.match("player win")) {
            player_score_val++;
            }
            else if(winner.match("cpu win")) {
                computer_score_val++;
            }
console.log(`Player Score: ${player_score_val} | CPU Score: ${computer_score_val}`)

updateUI(player, cpu, winner);
// }, 3000); 

}

function updateUI(player, cpu, winner) {
    games_played_val++;
    player_score.innerHTML = player_score_val;
    computer_score.innerHTML = computer_score_val;
    games_played.innerHTML = games_played_val;
    player_choice.textContent = choice_icons[player-1];
    computer_choice.textContent = choice_icons[cpu-1];
}



function reset_game() {
    player_score.innerHTML = "0";
    computer_score.innerHTML = "0" ;

    player_score_val = 0;
    computer_score_val = 0;

    player_choice.innerHTML = '';
    computer_choice.innerHTML = '';
    updateUI(player, cpu, winner)
}