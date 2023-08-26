/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// funkce

// function pozdrav() {
//   console.log('ahojjjj');
// }

// // pozdrav();

// function secti(a, b) {
//   const vysledek = a + b;
//   return vysledek;
// }

// function obarvi(barva) {
//   const obdelnik = document.querySelector('.obdelnik');
//   obdelnik.style.backgroundColor = (barva);
// }

// function zoomin(tvar) {
//   const e = document.querySelector(tvar);
//   e.addEventListener('click', () => {
//     e.style.width = '150px';
//     e.style.height = '150px';
//   });
// }

// zoomin(.ctverec);

// const ctverec = document.querySelector('.ctverec');

// function zaobly() {
//   ctverec.style.borderRadius = '50%';
// }

// ctverec.addEventListener('click', zaobly);

function pisnicka(jmeno) {
  const sloka = jmeno + ' sral ' + jmeno + ' sraaaaalll!';
  console.log(sloka);
}

function secti(cislo1, cislo2) {
  const soucet = cislo1 + (cislo2 / 4) - 5;
  return soucet;
}

function obarvi(tvar, barva) {
  const utvar = document.querySelector(tvar);
  utvar.style.backgroundColor = barva;
}

function backgroundColor(id) {

var element = document.getElementById(id);
var computedStyle = window.getComputedStyle(element);
var backgroundColor = computedStyle.backgroundColor;
return backgroundColor

}

function obarviZpatky (tvar) {
  const utvar = document.querySelector(tvar);
  utvar.style.backgroundColor = backgroundColor('obdelnik')

}

function spawnBurger() {
  const burgers = document.getElementById('burgers');
  burgers.innerHTML = '<img src="images/fish.webp" alt="burger" id="b1"></img>';

  const b1 = document.getElementById('b1');
  b1.style.position = 'absolute';
  b1.style.top = '20px';
  b1.style.left = '20px';
}

let clicks = 0;
const foto = document.querySelector('.picture');

function play(name) {
  const audio = new Audio(name);
  audio.play();
}
let kulate = false;
const onoff = document.querySelector('#onoff');
const clicker = document.querySelector('#clicker');

clicker.addEventListener('mousedown', (e) => {
  play('sounds/zoom.mp3');
  if (kulate === false) {
    foto.style.borderRadius = '50%';
    kulate = true;
    onoff.innerHTML = String('on');
  } else {
    foto.style.borderRadius = '0%';
    kulate = false;
    onoff.innerHTML = String('off');
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'L') { 
    foto.src = 'images/trollface.webp';
  }
});


function setCounter(num) {
  document.getElementById('number').innerHTML = String(num);
}

function mousedownHandler(e) {
  if (e.button === 1) {
    spawnBurger();
  }

  if (e.button !== 0) {
    return;
  }
  console.log('down ', e);
  foto.src = 'images/openPopcat.webp';
  clicks += 1;
  setCounter(clicks);
  play('sounds/pop.wav');
};

function mouseupHandler(e) {
  console.log('up ', e);
  foto.src = 'images/popcat.jpg';
}

foto.addEventListener('mousedown',mousedownHandler);
foto.addEventListener('touchstart',mousedownHandler);

foto.addEventListener('mouseup',mouseupHandler);
foto.addEventListener('touchend',mouseupHandler);

// const ctvrtKruh = {
//   name: 'ctvrtKruh',
//   r: 1,
// }

// const kostka = {
//   name: 'kostka',
//   a: 1,
//   jakyMaKostkaObsah() {
//     const obsah = this.a * this.a;
//     return obsah;
//   },
// };

// let pocetTref = 0;
// const n = 1000000;
// for (let j = 0; j < n; j += 1) {
//   const x = Math.random();
//   const y = Math.random();
//   const c = y * y + x * x;
//   if (c <= 1) {
//     pocetTref += 1;
//   }
// }

// const pi = 4 * (pocetTref / n);
// console.log(pi);
