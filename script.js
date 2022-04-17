console.log("Welcome");

function computerPlay() //Returns randomly either Rock, Paper or Scissors
{
    let random=Math.random()*100;
    //console.log(random);
    if(random <=33.3333)
    {
        return 'Rock';
    } else if(random<=66.6666)
    {
        return 'Paper';
    }else
    {
        return 'Scissors';
    }
}
//console.log(computerPlay());
