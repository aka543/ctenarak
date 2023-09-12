/* eslint-disable prefer-destructuring */



// Datovy model
let body = [0, 0];
let bodyVKole = 0;
let aktivniHrac = 0;
let koncoveBody = prompt('kolik bude maximum bodů:');
let kostka = Math.floor(Math.random() * 6) + 1;
let visibleKostka = false;


if (koncoveBody === null) {
  koncoveBody = 40;
}
// ------

// UI

// const player1 = {
//   body: 0,
//   bodyVKole: 0,
// };
// const player2 = {
//   body: 0,
//   bodyVKole,
// };
const surrender = document.getElementById('surrender');
const newCube = document.getElementById('novakostka');
const boards = document.getElementById('playerBoards');
boards.style.display = 'none';
surrender.style.display = 'none';
newCube.style.display = 'none';
const newGame = document.getElementById('new');
const reset = document.getElementById('resetGame');
const pravidla = document.getElementById('pravidla');
const winner = document.getElementById('winner');

const sounds = {
  playerSwitch: '../sounds/playerSwitch.mp3',
  gameEnter: '../sounds/button.mp3',
  resetGame: '../sounds/click.mp3',
  diceTrow: '../sounds/diceRoll.mp3',
};

function play(sound) {
  const path = sounds[sound];
  const audio = new Audio(path);
  audio.loop = false;
  audio.play();
}

function updateHtmlUI() {
  const k = document.querySelector('.kostka');
  const scoreP1 = document.getElementById('scoreP1');
  const totalP1 = document.getElementById('totalP1');
  const scoreP0 = document.getElementById('scoreP0');
  const totalP0 = document.getElementById('totalP0');

  document.querySelector(`#scoreP${aktivniHrac}`).innerHTML = kostka;
  if (aktivniHrac === 0) {
    scoreP0.textContent = bodyVKole;
    scoreP1.textContent = 0;
  } else {
    scoreP1.textContent = bodyVKole;
    scoreP0.textContent = 0;
  }

  if (visibleKostka === true) {
    k.style.display = 'block';
  } else {
    k.style.display = 'none';
  }

  k.textContent = kostka;
  totalP1.textContent = body[1] + '/' + koncoveBody;
  totalP0.textContent = body[0] + '/' + koncoveBody;

  if (aktivniHrac === 0) {
    document.getElementById('playerboardP1').style.backgroundColor = 'white';
    document.getElementById('playerboardP2').style.backgroundColor = 'rgb(203, 194, 194)';
  } else {
    document.getElementById('playerboardP2').style.backgroundColor = 'white';
    document.getElementById('playerboardP1').style.backgroundColor = 'rgb(203, 194, 194)';
  }
}
//-----

updateHtmlUI();



newCube.addEventListener('click', () => {
  kostka = Math.floor(Math.random() * 6) + 1;
  play('diceTrow');
  if (kostka === 1) {
    aktivniHrac = (aktivniHrac === 0) ? 1 : 0;
    play('playerSwitch');
    bodyVKole = 0;
  } else {
    bodyVKole += kostka;
    visibleKostka = true;
  }
  updateHtmlUI();
});


surrender.addEventListener('click', () => {
  body[aktivniHrac] += bodyVKole;
  bodyVKole = 0;
  visibleKostka = false;
  play('playerSwitch');
  if (body[aktivniHrac] >= koncoveBody) {
    boards.style.display = 'none';
    pravidla.style.display = 'block';
    newGame.style.display = 'block';
    winner.style.display = 'block';
    if (aktivniHrac === 0) {
      winner.textContent = 'Player2 is winner';
    } else {
      winner.textContent = 'Player1 is winner';
    }
  }

  aktivniHrac = (aktivniHrac === 0) ? 1 : 0;
  updateHtmlUI();
});

newGame.addEventListener('click', () => {
  boards.style.display = 'flex';
  newGame.style.display = 'none';
  pravidla.style.display = 'none';
  winner.style.display = 'none';
  surrender.style.display = 'block';
  newCube.style.display = 'block';
  body = [0, 0];
  bodyVKole = 0;
  aktivniHrac = 0;
  visibleKostka = false;
  kostka = Math.floor(Math.random() * 6) + 1;
  play('gameEnter');
  updateHtmlUI();
});

reset.addEventListener('click', () => {
  body = [0, 0];
  bodyVKole = 0;
  kostka = Math.floor(Math.random() * 6) + 1;
  aktivniHrac = 0;
  visibleKostka = false;
  updateHtmlUI();
  play('resetGame');
});

// soundManage.addEventListener('click' () => {
//   if (soundOff = false) {
//     sounds. playerSwitch = null;
//     sounds.gameEnter = null;
//     sounds.resetGame = null;
//     sounds.diceTrow = null;
//     soundOff = true;
//     soundManage.textContent = '&#xf1f6;';
//   } else {
//     sounds.playerSwitch =  '../sounds/playerSwitch.mp3',
//     sounds.gameEnter =  '../sounds/button.mp3',
//     sounds.resetGame =  '../sounds/click.mp3',
//     sounds.diceTrow =  '../sounds/diceRoll.mp3',
//     soundOff = false;
//     soundManage.textContent = '&#xf0f3;';
//   }
// });