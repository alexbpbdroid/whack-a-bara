const holes = document.querySelectorAll('.hole');
console.log(holes);
const scoreBoard = document.querySelector('.score');
const moles = document.querySelector('.bara');
const timer = document.querySelector('.timer');
const startButton = document.querySelector('startButton')

let lastHole;
let timeExpired = false;
let timeLimit = 20000;
let score = 0;
let countdown;

