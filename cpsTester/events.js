
let clicksTxt = document.getElementById('clicks');
let cpsTxt = document.getElementById('cps');
let clickedDiv = document.getElementById('clickedDiv');
let mereni = false;
let zmereno = false;
let clicks = 0;
let cps = 0;
clickedDiv.style.backgroundColor = "rgb(122, 122, 122)";



function updateHtmlUI() {
  clicksTxt.textContent = clicks;
  cpsTxt.textContent = cps;
}

function clickPlus() {
  if (mereni === true) {
    clicks = clicks + 1;
  };
}

clickedDiv.addEventListener('click' , () => {
  if (zmereno === true) {
    console.log('uz jednou bylo zmereno pockej 5 sec.');
    setTimeout(
      () => { zmereno = false;
    },
    5000);
    


  } else {
    clickPlus();
    updateHtmlUI();
    clickedDiv.textContent = null;
    if (zmereno === false && mereni === false) {
      mereni = true;
      clickedDiv.style.backgroundColor = "rgb(122, 122, 122)";
      cps = 0;
      updateHtmlUI();
      setTimeout(
        () => { mereni = false; zmereno = true;
          console.log('zmereno');
          clickedDiv.textContent = 'click to start';
          cps = clicks/5;
          updateHtmlUI();
          
        },
        5000);
        clicks = 0;
        clickedDiv.style.backgroundColor = "rgb(118, 88, 88)";
    }
  }
  
});


