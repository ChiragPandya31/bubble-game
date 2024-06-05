let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  let clutter = "";

  for (let i = 0; i <= 84; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over <br> Your Score is ${score}</h1>`
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function(details) {
  let clickednum = Number(details.target.textContent);
  if(clickednum === hitrn){
    increaseScore();
    makeBubble()
    getNewHit()
  }
});

runTimer();
makeBubble();
getNewHit();
