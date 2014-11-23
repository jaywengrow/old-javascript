var path = [1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 6, 7, 8, 0, 0, 0, 0, 0, 0, 9, 10];
var whereAt = 1;

function moveToSegment(space, box) {
  if (path[space] === whereAt) {
    box.style["background-color"] = "yellow";
    whereAt += 1;
    if (whereAt === 11) { alert("You win!"); }
  } else {
    boxes = document.getElementsByClassName("box");
    for(var i = 0; i < boxes.length; i++) {
      boxes[i].style["background-color"] = "blue";
    }
    whereAt = 1;
  }
}