const result = document.getElementById('result')
const playerScore = document.getElementById('playerDisplay')
const computerScore = document.getElementById('computerDisplay')

let ps=0;
let cs=0;
let Options = ['rock','paper','scissors']
function playGame(playerOption)
{
    let computerOption = Options[Math.floor(Math.random()*3)];
    console.log(computerOption)
    result.classList.remove('win','lose','tie')
    if(computerOption === playerOption)
    {
          result.textContent="Match TIED";
          result.classList.add('tie')
    }

    else
    {
        switch(playerOption)
        {
            case "rock":
                result.textContent= computerOption=="paper" ?"YOU LOSE":"YOU WIN"
                break
            case "paper":
                result.textContent= computerOption=="scissors" ? "YOU LOSE" : "YOU WIN"
                break
            case "scissors":
                result.textContent= computerOption=="rock" ? "YOU LOSE" : "YOU WIN"
                break
        }

        if(result.textContent == 'YOU WIN')
            {
                result.classList.add('win')
                ps++;
            }
        else if(result.textContent == 'YOU LOSE')
        {
             result.classList.add('lose')
              cs++;
        }
    }
    
    
    playerScore.textContent=`PLAYER: ${ps}`;
    computerScore.textContent=`COMPUTER: ${cs}`;
}