console.log("connected");
// Restart
var restart = document.querySelector("#b")

// Grabs all squares
var squares = document.querySelectorAll('td');


// Clear all squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);
//check square marker

// var cellone = document.querySelector('#one')
// cellone.addEventListener('click', function() {
//   if (cellone.textContent === '') {
//     cellone.textContent = 'X';
//   } else if (cellone.textContent === 'X') {
//     cellone.textContent = 'O';
//   } else {
//     cellone.textContent = '';
//   }
// })

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}


// for loop to addEventListener to all squares
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}
