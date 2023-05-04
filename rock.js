let score= JSON.parse(localStorage.getItem('score')) 
    ||
    {
        Wins:0,
        Losses:0,
        Ties:0
        
        };
     
        updateScoreElement();
         document.querySelector('.picks').innerHTML=`${playerMove}-${computermove}`;

    //null == !
    /*
     if( !score){
      score={
        Wins:0,
        Losses:0,
        Ties:0
      };
    }
     */
     

    function PlayGame(playerMove)
    {
        const computerMove = PickcomputerMove();
        let result = '';

      if(playerMove === 'scissors'){
        if (computerMove === 'rock') {
          result = 'lose.';
        } else if (computerMove === 'paper') {
          result = 'Won.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }
      }

      else if(playerMove === 'paper'){
        if(computerMove === 'rock') {
        result = 'Won.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'lose.';
      }

      }
      else if (playerMove === 'rock'){
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'lose.';
        } else if (computerMove === 'scissors') {
          result = 'Won.';
        }

}
        if(result === 'Won.'){
          score.Wins+=1;
        }else if (result==='lose.'){
          score.Losses+=1;
        }
        else if(result === 'Tie.'){
          score.Ties+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
      
        document.querySelector('.Result').innerHTML=result;
       updateScoreElement();

       document.querySelector('.picks').innerHTML=`you pick <img src="./assets/${playerMove}-emoji.png" class="icons"> <img src="./assets/${computerMove}-emoji.png" class="icons"> computer picks`;


    }



    function updateScoreElement(){
      document.querySelector('.gameScore')
      .innerHTML=`Wins:${score.Wins} Losses :${score.Losses} Ties :${score.Ties}`

    }
       
    function PickcomputerMove(){
      const randomNumber = Math.random();
        let computerMove = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove;
    }