const holes = document.querySelectorAll('.hole');
console.log(holes);
const scoreBoard = document.querySelector('.score');
const moles = document.querySelector('.bara');
const timer = document.querySelector('.timer');
const startButton = document.querySelector('startButton')

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