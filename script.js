//variable

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

// Bouton check
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // Si l'entrée est vide ou invalide
    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter a number to play!';
    }
    // Utilisateur trouve le bon chiffre
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Number is correct!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#008000';
        document.querySelector('.number').style.width = '30rem';

        // Mettre à jour le highscore si nécessaire
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // Nombre supérieur au nombre secret
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Entered number is higher';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Sorry, you lost';
            document.querySelector('.score').textContent = 0;
        }
    }
    // Nombre inférieur au nombre secret
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Entered number is lower';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Sorry, you lost';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Bouton rejouer
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score; // Correction ici
    document.querySelector('.guess').value = ''; // Correction ici
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#660033';
    document.querySelector('.number').style.width = '50px';
});
