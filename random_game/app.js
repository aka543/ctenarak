/* eslint-disable prefer-destructuring */


// Datovy model
let body = [0, 0];
let bodyVKole = 0;
let aktivniHrac = 0;
let koncoveBody = 25;
let kostka = Math.floor(Math.random() * 6) + 1;
let visibleKostka = false;
// ------




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
  totalD1.textContent = body[1];
  totalD0.textContent = body[0];
}

updateHtmlUI();

const newCube = document.getElementById('novakostka');

newCube.addEventListener('click', () => {
  kostka = Math.floor(Math.random() * 6) + 1;
  if (kostka === 1) {
    if (aktivniHrac === 0) {
      aktivniHrac = 1;
      document.getElementById('d1').style.backgroundColor = 'rgb(203, 194, 194)';
      document.getElementById('d2').style.backgroundColor = 'white';
    } else {
      aktivniHrac = 0;
      document.getElementById('d2').style.backgroundColor = 'rgb(203, 194, 194)';
      document.getElementById('d1').style.backgroundColor = 'white';
    }
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

const boards = document.getElementById('player-boards');
boards.style.display = 'none';
const newGame = document.getElementById('new');
const reset = document.getElementById('new-game');

newGame.addEventListener('click', () => {
  boards.style.display = 'flex';
  newGame.style.display = 'none';
});

reset.addEventListener('click', () => {
  body = [0, 0];
  bodyVKole = 0;
  kostka = Math.floor(Math.random() * 6) + 1;
  aktivniHrac = 0;
  visibleKostka = false;
  updateHtmlUI();
});
