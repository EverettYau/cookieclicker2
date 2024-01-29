let cookie=document.querySelector("#cookie");
let scoreboard=document.querySelector("#scoreboard");
let cps=document.querySelector("#cps");

let cursorAmount=document.querySelector("#cursorAmount");
let cursorButton=document.querySelector("#cursorButton");
let cursorCostText=document.querySelector("#cursorCost");
let cursors=0;
let cursorCost=15;

let grandmaAmount=document.querySelector("#grandmaAmount");
let grandmaButton=document.querySelector("#grandmaButton");
let grandmas=0;

let farmAmount=document.querySelector("#farmAmount");
let farmButton=document.querySelector("#farmButton");
let farmCounter=document.querySelector("#farmCounter");
let farms=0;

let everySecond = setInterval(addCookies, 1000);
let revealNew = setInterval(newButtons, 1000);
let score=0;
let cookiesPerSecond=0;

window.onload = function () {
  score=window.localStorage.setItem("saveScore");
}

function newButtons() {
  if (score>=15) {
    farmButton.classList.remove("hidden");
    farmCounter.classList.remove("hidden");
  }
}

function addCookies() {
  score=Math.round(10*(score+cookiesPerSecond))/10;
  scoreboard.innerHTML = score;
  if (score%100==0) {
    window.localStorage.setItem("saveScore", score);
  } 
}

cookie.addEventListener("click", () => {
  score++;
  scoreboard.innerHTML = score;
});

cursorButton.addEventListener("click", () => {
  if (score>=cursorCost) {
    score-=cursorCost;
    scoreboard.innerHTML = score;
    cursors++;
    cursorCost+=cursorAmount;
    cursorAmount.innerHTML=cursors;
    cursorCostText.innerHTML=cursorCost;
    cookiesPerSecond=Math.round(10*(0.1+cookiesPerSecond))/10;
    cps.innerHTML=cookiesPerSecond;
  }
  if (cursors==2) {
    alert("Achievement Unlocked: Double-Click");
  }
});
  
grandmaButton.addEventListener("click", () => {
  if (score>=100) {
    score-=100;
    scoreboard.innerHTML = score;
    grandmas++;
    grandmaAmount.innerHTML=grandmas;
    cookiesPerSecond+=1;
    cps.innerHTML=cookiesPerSecond;
  }
});

farmButton.addEventListener("click", () => {
  if (score>=1250) {
    score-=1250;
    scoreboard.innerHTML = score;
    farms++;
    farmAmount.innerHTML=farms;
    cookiesPerSecond+=32;
    cps.innerHTML=cookiesPerSecond;
  }
});