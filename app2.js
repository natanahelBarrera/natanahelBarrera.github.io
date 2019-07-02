//in this second code i make so new features to the app. for example, make your own score 
// and score to zero when two 6 in a row




var scores, roundScore, activePlayer,gameplaying;
 init();
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    //random rumber 
    if (gameplaying){
var dice=Math.floor(Math.random()*6)+ 1;

// display the result
var diceDom = document.querySelector('.dice');
diceDom.style.display='block';
diceDom.src= 'dice-'+ dice + '.png';

//lose score if two 6 in a row
if (dice ===6 && lastDice ===6){
    scores[activePlayer]=0;
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    nextPlayer();
}else if (dice !== 1){      //lose current score if roll 1
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
}else {
    nextPlayer();
}
lastDice = dice;
    }
});
   



        //add score on hold button 
     document.querySelector('.btn-hold').addEventListener('click', function(){
         if (gameplaying){
         scores[activePlayer] += roundScore;

         //update IU
         document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        //check for 0, null o "" = false 
       if(input){
           winningScore = input;

       }else {
           winningScore = 100;
           
       }
         //check if player won the game 
         if (scores[activePlayer]>=winningScore){
             document.querySelector('#name-'+ activePlayer).textContent='winner!';
             document.querySelector('.dice').style.display = 'none';
             document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
             document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
             gameplaying = false;
         }else{
        // next player
         nextPlayer();

         }

     }
    }
);



function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.pleyer-0-panel').classList.remove('active');
    //document.querySelector('.pleyer-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init );

//initial values 
function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gameplaying = true;
    
    
    document.querySelector('.dice').style.display= 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent='player 1';
    document.getElementById('name-1').textContent='player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
   
    
    
}


