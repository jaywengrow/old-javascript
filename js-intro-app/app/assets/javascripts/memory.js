var tiles = [1, 3, 2, 2, 5, 4, 4, 5, 6, 3, 1, 6];
var tilesPicked = [];
var secretNumbers = [];
var score = 0;

function pickTile(tileNum, tile) {
  trackTiles(tileNum, tile);
  
  displayTile(tileNum, tile);

  if (tilesPicked.length === 2) {
    checkIfMatch();
    checkIfWinner();
  }
}

function trackTiles(tileNum, tile) {
  secretNumbers.push(tiles[tileNum]);
  tilesPicked.push(tile);
}

function checkIfMatch() {
  if (secretNumbers[0] === secretNumbers[1]) {
    score += 2;
    setTimeout(function() {
      hideTiles();
    }, (1000)); 
  } else {
    setTimeout(function() {
      resetTiles();
    }, (1000)); 
  }
}

function checkIfWinner() {
  console.log(score);
  if (score === tiles.length) {
    alert("You win!");
  }
}

function displayTile(tileNum, tile) {
  tile.innerHTML = tiles[tileNum];
}

function resetTiles() {
  tilesPicked[0].innerHTML = "";
  tilesPicked[1].innerHTML = "";
  clearArrays();
}

function hideTiles() {
  tilesPicked[0].style.visibility = "hidden";
  tilesPicked[1].style.visibility = "hidden";
  clearArrays();
}

function clearArrays() {
  tilesPicked = [];
  secretNumbers = [];
}

