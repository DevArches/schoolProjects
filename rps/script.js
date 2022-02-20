function selector(id) {
  return document.querySelector(id);
}

function win() {
  let mRes = parseInt(selector('#mRes').value);
  selector('#mRes').value = mRes + 1;
}
function lose() {
  let cRes = parseInt(selector('#cRes').value);
  selector('#cRes').value = cRes + 1;
}

function rock() {
  selector('#mine').value = 'rock';
  let c = Math.floor(Math.random() * 3);
  switch (c) {
    case 0:
      selector('#comp').value = 'rock';
      selector('#result').value = 'You Tie';
      break;
    case 1:
      selector('#comp').value = 'paper';

      selector('#result').value = 'You Lose';
      lose();
      break;
    case 2:
      selector('#comp').value = 'scissors';
      selector('#result').value = 'You Win';
      win();
      break;
  }
}
function paper() {
  selector('#mine').value = 'paper';
  let c = Math.floor(Math.random() * 3);
  switch (c) {
    case 0:
      selector('#comp').value = 'rock';
      selector('#result').value = 'You Win';
      win();
      break;
    case 1:
      selector('#comp').value = 'paper';
      selector('#result').value = 'You Tie';
      break;
    case 2:
      selector('#comp').value = 'scissors';
      selector('#result').value = 'You Lose';
      lose();
      break;
  }
}
function scissors() {
  selector('#mine').value = 'scissors';
  let c = Math.floor(Math.random() * 3);
  switch (c) {
    case 0:
      selector('#comp').value = 'rock';
      selector('#result').value = 'You Lose';
      lose();
      break;
    case 1:
      selector('#comp').value = 'paper';
      selector('#result').value = 'You Win';
      win();
      break;
    case 2:
      selector('#comp').value = 'scissors';
      selector('#result').value = 'You Tie';
      break;
  }
}
