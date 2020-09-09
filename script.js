const holes = document.querySelectorAll('.hole');
// console.log(holes);
const scoreBoard = document.querySelector('.score');
const baras = document.querySelectorAll('.bara');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startButton')

let lastHole;
let timeExpired = false;
let timeLimit = 20000; //in milliseconds (20 seconds)
let score = 0;
let countdown;

//need to make function to choose random holes for capys to pop out of

function pickRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHole];
  if (hole === lastHole) {
    return pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//make function to use pickRandomHole and add class "show" to the hole

function popOut() {
  const time = Math.random() * 1300 + 400;
  const hole = pickRandomHole(holes);
  hole.classList.add('show')
  setTimeout(function(){
    hole.classList.remove('show');
    if (!timeExpired) popOut();
  }, time);
}

popOut();

function startGame() {
  countdown = timeLimit/1000;
  scoreBoard.textContext = 0;
  scoreBoard.style.display = 'block';
  countdownBoard.textContent = countdown;
  timeExpired = false;
  score = 0;
  popOut();
  setTimeout(function(){
    timeExpired = true;
  }, timelimit);

  let startCountdown = setInterval(function(){
    countdown -= 1;
    countdownBoard.textContent = countdown
    if (countdown < 0) {
      countdown = 0;
      clearInterval(startCountdown);
      countdownBoard.textContent = "Time's up!"
    }
  }, 1000);
}

startButton.addEventListener('click', startGame);

function hit(e) {
  score++;
  this.style.background = 'blue';
  this.style.pointerEvents = 'none';
  setTimeout(() => {
    this.style.background = 'red';
    this.style.pointerEvents = 'all';
  }, 800);
  scoreBoard.textContent = score;
}

baras.forEach(bara => bara.addEventListener('click', hit));

