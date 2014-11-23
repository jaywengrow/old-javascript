// Make a game in which the user wins if they light up all three boxes.
// Your code goes here:

var clickedNumbers = [];

function clickedBox(boxNumber, box) {

  if (isFirstClick(boxNumber)) {
    clickBox(boxNumber, box);
  }

}

function isFirstClick(number) {
  return (clickedNumbers.indexOf(number) === -1);
}

function clickBox(number, box) {
  clickedNumbers.push(number);
  box.className += " light";
  checkIfAllBoxesAreLit();
}

function checkIfAllBoxesAreLit() {
  if(clickedNumbers.length === 3) {
    alert("You win!");
  }
}

// function clickedBox(boxNumber, box) {

//   if (clickedNumbers.indexOf(boxNumber) === -1) {
//     clickedNumbers.push(boxNumber);

//     box.className += " light";

//     if(clickedNumbers.length === 3) {
//       alert("You win!");
//     }
//   }

// }
