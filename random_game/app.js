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
const boards = document.getElementById('player-boards');
boards.style.display = 'none';
const newGame = document.getElementById('new');
const reset = document.getElementById('new-game');
const pravidla = document.getElementById('pravidla');
const winner = document.getElementById('winner');

function play(sound) {
  const audio = new Audio(sound);
  audio.loop = false;
  audio.play();
}

function updateHtmlUI() {
  const k = document.querySelector('.kostka');
  const scoreD1 = document.getElementById('scoreD1');
  const totalD1 = document.getElementById('totalD1');
  const scoreD0 = document.getElementById('scoreD0');
  const totalD0 = document.getElementById('totalD0');

  document.querySelector(`#scoreD${aktivniHrac}`).innerHTML = kostka;
  if (aktivniHrac === 0) {
    scoreD0.textContent = bodyVKole;
    scoreD1.textContent = 0;
  } else {
    scoreD1.textContent = bodyVKole;
    scoreD0.textContent = 0;
  }

  if (visibleKostka === true) {
    k.style.display = 'block';
  } else {
    k.style.display = 'none';
  }

  k.textContent = kostka;
  totalD1.textContent = body[1] + '/' + koncoveBody;
  totalD0.textContent = body[0] + '/' + koncoveBody;

  if (aktivniHrac === 0) {
    document.getElementById('d1').style.backgroundColor = 'white';
    document.getElementById('d2').style.backgroundColor = 'rgb(203, 194, 194)';
  } else {
    document.getElementById('d2').style.backgroundColor = 'white';
    document.getElementById('d1').style.backgroundColor = 'rgb(203, 194, 194)';
  }
}
//-----

updateHtmlUI();

const newCube = document.getElementById('novakostka');

newCube.addEventListener('click', () => {
  kostka = Math.floor(Math.random() * 6) + 1;
  if (kostka === 1) {
    aktivniHrac = (aktivniHrac === 0) ? 1 : 0;
    play('../sounds/playerSwitch.mp3');
    bodyVKole = 0;
  } else {
    bodyVKole += kostka;
    visibleKostka = true;
  }
  updateHtmlUI();
});
const surrender = document.getElementById('surrender');

surrender.addEventListener('click', () => {
  body[aktivniHrac] += bodyVKole;
  bodyVKole = 0;
  visibleKostka = false;
  play('../sounds/playerSwitch.mp3');
  if (body[aktivniHrac] >= koncoveBody) {
    boards.style.display = 'none';
    pravidla.style.display = 'block';
    newGame.style.display = 'block';
    winner.style.display = 'block';
    if (aktivniHrac === 0) {
      winner.textContent = 'Player2 is winner';
    }
    else {
      winner.textContent = 'Player1 is winner';
    }
  }

  if (aktivniHrac === 0) {
    aktivniHrac = 1;
    document.getElementById('d1').style.backgroundColor = 'rgb(203, 194, 194)';
    document.getElementById('d2').style.backgroundColor = 'white';
  } else {
    aktivniHrac = 0;
    document.getElementById('d2').style.backgroundColor = 'rgb(203, 194, 194)';
    document.getElementById('d1').style.backgroundColor = 'white';
  }
  updateHtmlUI();
});

newGame.addEventListener('click', () => {
  boards.style.display = 'flex';
  newGame.style.display = 'none';
  pravidla.style.display = 'none';
  winner.style.display = 'none';
  play('../sounds/click.mp3');
});

reset.addEventListener('click', () => {
  body = [0, 0];
  bodyVKole = 0;
  kostka = Math.floor(Math.random() * 6) + 1;
  aktivniHrac = 0;
  visibleKostka = false;
  updateHtmlUI();
  play('../sounds/button.mp3');
});
