//variable
let score=20
let highscore=0
let secretNumber=Math.floor(Math.random()*20)+1;
console.log(secretNumber)

//bouton check
document.querySelector('.check').addEventListener('click',()=>{
    const guess=Number(document.querySelector('.guess').value);

// si l'entré est vide ou invalide
    if (!guess) {
        document.querySelector('.message').textContent='please enter a number to play!';
    }
    //utilisateur trouve le bon chiffre
    else if (guess == secretNumber){
        document.querySelector('.message').textContent='number is correct';

        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor ='#008000';
        document.querySelector('.number').style.width='30rem';

    }
    //score>highscore mise a jour
        if (score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
        //le nombre superieur au nombre secret
        else if(guess>secretNumber){
            if (score>1){
                document.querySelector('.message').textContent='entered number is higher';
                score--;
                document.querySelector('.score').textContent=score;

            }else{document.querySelector('.message').textContent='sorry you lost';
                document.querySelector('.score').textContent=0;
            }

        }
        //le nombre inferieur au nombre secret
        else if(guess<secretNumber){
              if(score>1){
                document.querySelector('.message').textContent='entered number is lower ';
                score--;
                document.querySelector('.score').textContent=score
              }else{
                document.querySelector('.message').textContent='sorry you lost';
                document.querySelector('.score').textContent=0;
              }
        }
    
});
               //bouton rejouer
             document.querySelector('.again').addEventListener('click',()=>{
                score=20;
                secretNumber=Math.floor(Math.random()*20)+1;
                document.querySelector('.message').textContent= 'start guessing...';
                document.querySelector('.score').textContent='score';
                document.querySelector('.guess').textContent='';
                document.querySelector('.number').textContent='?';
                document.querySelector('body').style.backgroundColor='#660033'
                document.querySelector('.number').style.width='50px'

             })