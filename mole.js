let currentMole;
let currentPlant;
let score = 0;
let gameOver = false;

function setGame() {
  for (let i = 0; i < 9; i++) {
    let potted = document.createElement('div');
    potted.id = i.toString();
    potted.addEventListener('click', selectPotted);
    document.getElementById('board').appendChild(potted);
  }

  setInterval(setMole, 700);
  setInterval(setPlan, 1000);
}

function getRandomPotted() {
  let number = Math.floor(Math.random() * 9);
  return number.toString();
}
function setMole() {
  if (gameOver) {
    return;
  }

  if (currentMole) {
    currentMole.innerHTML = '';
  }

  let mole = document.createElement('img');
  mole.src = './mole.png';

  let random = getRandomPotted();
  if (currentPlant?.id === random) {
    return;
  }
  currentMole = document.getElementById(random);
  currentMole.appendChild(mole);
}

function setPlan() {
  if (gameOver) {
    return;
  }

  if (currentPlant) {
    currentPlant.innerHTML = '';
  }

  let plan = document.createElement('img');
  plan.src = './plant.png';

  let random = getRandomPotted();
  if (currentMole?.id === random) {
    return;
  }
  currentPlant = document.getElementById(random);
  currentPlant.appendChild(plan);
}

function selectPotted() {
  if (gameOver) {
    return;
  }

  if (this === currentMole) {
    score += 1;
    document.getElementById('score').innerText = score.toString();
  } else if (this === currentPlant) {
    document.getElementById('score').innerHTML =
      score.toString() + '<p style="color: red;">GAME OVER</p>';
    gameOver = true;
  }
}

window.onload = function () {
  setGame();
};
