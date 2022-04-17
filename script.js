console.log("--Welcome To Rock, Paper, Scissors--");

function computerPlay() //Returns randomly either Rock, Paper or Scissors
{
    let random=Math.random()*100;
    //console.log(random);
    if(random <=33.3333)
    {
        return 'rock';
    } else if(random<=66.6666)
    {
        return 'paper';
    }else
    {
        return 'scissors';
    }
}
//console.log(computerPlay());

function playerSelection()
{
    let selection = prompt("Choose Wisely").toLowerCase();
    while(selection!="rock" && selection!="paper" && selection!="scissors")
    {
        selection = prompt("Wrong answer try again.").toLowerCase();
    }
    return selection;
}
function playRound()
{
    let computer=computerPlay(),user=playerSelection();
    
    if(user==computer)
    {
        console.log("It's a tie!!");
        return 0;
    }
    if(user=='scissors'&&computer=='rock')
    {
        console.log("rock beats scissors You lost! :(");
        return 2;
    }
    if(user=='scissors'&&computer=='paper')
    {
        console.log("You won! :D ");
        return 1;
    }
    if(user=='rock'&&computer=='paper')
    {
        console.log("Paper beats rock You lost! :( ");
        return 2;
    }
    if(user=='rock'&&computer=='scissors')
    {
        console.log("You won! :D ");
        return 1;
    }
    if(user=='paper'&&computer=='scissors')
    {
        console.log("Scissors beats paper You lost! :( ");
        return 2;
    }
    if(user=='paper'&&computer=='rock')
    {
        console.log("You won! :D ");
        return 1;
    }

}


function game()
{
    let roundResult; //0=tie , 1=win , 2=lose 
    let winCounter=0, loseCounter=0;
    for(let i=1;i<=5;i++)
    {
        roundResult=playRound();

        if(roundResult==1)
        { 
            winCounter++; 
        }else if(roundResult==2)
        { 
            loseCounter++; 
        }else
        {
            i--;
        }

        console.log("Wins: "+winCounter+", Lost: "+loseCounter);
    }

    if(winCounter>loseCounter)
    {
        console.log("YOU WON!!!!!!!!:D");
    }
    else
    {
        console.log("YOU LOST :( cringe");
    }
}

game();