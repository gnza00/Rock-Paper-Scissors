console.log("Welcome");

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
    let selection = prompt("Choose Wisely");
    return selection.toLowerCase();
}
function playRound(computerPlay,playerSelection)
{
    let user=computerPlay(),computer=playerSelection();
    if(user==computer)
    {
        return "It's a tie!!";
    }
    if(user=='scissors'&&computer=='rock')
    {
        return "You lost! :( ";
    }
    if(user=='scissors'&&computer=='paper')
    {
        return "You won! :D ";
    }
    if(user=='rock'&&computer=='paper')
    {
        return "You lost! :( ";
    }
    if(user=='rock'&&computer=='scissors')
    {
        return "You won! :D ";
    }
    if(user=='paper'&&computer=='scissors')
    {
        return "You lost! :( ";
    }
    if(user=='paper'&&computer=='rock')
    {
        return "You won! :D ";
    }

}
