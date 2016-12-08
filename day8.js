const input = [
  "rect 1x1",
  "rotate row y=0 by 10",
  "rect 1x1",
  "rotate row y=0 by 10",
  "rect 1x1",
  "rotate row y=0 by 5",
  "rect 1x1",
  "rotate row y=0 by 3",
  "rect 2x1",
  "rotate row y=0 by 4",
  "rect 1x1",
  "rotate row y=0 by 3",
  "rect 1x1",
  "rotate row y=0 by 2",
  "rect 1x1",
  "rotate row y=0 by 3",
  "rect 2x1",
  "rotate row y=0 by 2",
  "rect 1x1",
  "rotate row y=0 by 3",
  "rect 2x1",
  "rotate row y=0 by 5",
  "rotate column x=0 by 1",
  "rect 4x1",
  "rotate row y=1 by 12",
  "rotate row y=0 by 10",
  "rotate column x=0 by 1",
  "rect 9x1",
  "rotate column x=7 by 1",
  "rotate row y=1 by 3",
  "rotate row y=0 by 2",
  "rect 1x2",
  "rotate row y=1 by 3",
  "rotate row y=0 by 1",
  "rect 1x3",
  "rotate column x=35 by 1",
  "rotate column x=5 by 2",
  "rotate row y=2 by 5",
  "rotate row y=1 by 5",
  "rotate row y=0 by 2",
  "rect 1x3",
  "rotate row y=2 by 8",
  "rotate row y=1 by 10",
  "rotate row y=0 by 5",
  "rotate column x=5 by 1",
  "rotate column x=0 by 1",
  "rect 6x1",
  "rotate row y=2 by 7",
  "rotate row y=0 by 5",
  "rotate column x=0 by 1",
  "rect 4x1",
  "rotate column x=40 by 2",
  "rotate row y=2 by 10",
  "rotate row y=0 by 12",
  "rotate column x=5 by 1",
  "rotate column x=0 by 1",
  "rect 9x1",
  "rotate column x=43 by 1",
  "rotate column x=40 by 2",
  "rotate column x=38 by 1",
  "rotate column x=15 by 1",
  "rotate row y=3 by 35",
  "rotate row y=2 by 35",
  "rotate row y=1 by 32",
  "rotate row y=0 by 40",
  "rotate column x=32 by 1",
  "rotate column x=29 by 1",
  "rotate column x=27 by 1",
  "rotate column x=25 by 1",
  "rotate column x=23 by 2",
  "rotate column x=22 by 1",
  "rotate column x=21 by 3",
  "rotate column x=20 by 1",
  "rotate column x=18 by 3",
  "rotate column x=17 by 1",
  "rotate column x=15 by 1",
  "rotate column x=14 by 1",
  "rotate column x=12 by 1",
  "rotate column x=11 by 3",
  "rotate column x=10 by 1",
  "rotate column x=9 by 1",
  "rotate column x=8 by 2",
  "rotate column x=7 by 1",
  "rotate column x=4 by 1",
  "rotate column x=3 by 1",
  "rotate column x=2 by 1",
  "rotate column x=0 by 1",
  "rect 34x1",
  "rotate column x=44 by 1",
  "rotate column x=24 by 1",
  "rotate column x=19 by 1",
  "rotate row y=1 by 8",
  "rotate row y=0 by 10",
  "rotate column x=8 by 1",
  "rotate column x=7 by 1",
  "rotate column x=6 by 1",
  "rotate column x=5 by 2",
  "rotate column x=3 by 1",
  "rotate column x=2 by 1",
  "rotate column x=1 by 1",
  "rotate column x=0 by 1",
  "rect 9x1",
  "rotate row y=0 by 40",
  "rotate column x=43 by 1",
  "rotate row y=4 by 10",
  "rotate row y=3 by 10",
  "rotate row y=2 by 5",
  "rotate row y=1 by 10",
  "rotate row y=0 by 15",
  "rotate column x=7 by 2",
  "rotate column x=6 by 3",
  "rotate column x=5 by 2",
  "rotate column x=3 by 2",
  "rotate column x=2 by 4",
  "rotate column x=0 by 2",
  "rect 9x2",
  "rotate row y=3 by 47",
  "rotate row y=0 by 10",
  "rotate column x=42 by 3",
  "rotate column x=39 by 4",
  "rotate column x=34 by 3",
  "rotate column x=32 by 3",
  "rotate column x=29 by 3",
  "rotate column x=22 by 3",
  "rotate column x=19 by 3",
  "rotate column x=14 by 4",
  "rotate column x=4 by 3",
  "rotate row y=4 by 3",
  "rotate row y=3 by 8",
  "rotate row y=1 by 5",
  "rotate column x=2 by 3",
  "rotate column x=1 by 3",
  "rotate column x=0 by 2",
  "rect 3x2",
  "rotate row y=4 by 8",
  "rotate column x=45 by 1",
  "rotate column x=40 by 5",
  "rotate column x=26 by 3",
  "rotate column x=25 by 5",
  "rotate column x=15 by 5",
  "rotate column x=10 by 5",
  "rotate column x=7 by 5",
  "rotate row y=5 by 35",
  "rotate row y=4 by 42",
  "rotate row y=2 by 5",
  "rotate row y=1 by 20",
  "rotate row y=0 by 45",
  "rotate column x=48 by 5",
  "rotate column x=47 by 5",
  "rotate column x=46 by 5",
  "rotate column x=43 by 5",
  "rotate column x=41 by 5",
  "rotate column x=38 by 5",
  "rotate column x=37 by 5",
  "rotate column x=36 by 5",
  "rotate column x=33 by 1",
  "rotate column x=32 by 5",
  "rotate column x=31 by 5",
  "rotate column x=30 by 1",
  "rotate column x=28 by 5",
  "rotate column x=27 by 5",
  "rotate column x=26 by 5",
  "rotate column x=23 by 1",
  "rotate column x=22 by 5",
  "rotate column x=21 by 5",
  "rotate column x=20 by 1",
  "rotate column x=17 by 5",
  "rotate column x=16 by 5",
  "rotate column x=13 by 1",
  "rotate column x=12 by 3",
  "rotate column x=7 by 5",
  "rotate column x=6 by 5",
  "rotate column x=3 by 1",
  "rotate column x=2 by 3"
];

// function that builds screen on row and col size
const buildScreen = function(rows, cols) {
  let screenArr = [];
  for(let i = 0; i < rows; i++){
    let row = [];
    for(let j = 0; j < cols; j++){
      row.push('.');
    }
    screenArr.push(row);
  }

  return screenArr;
};

// makes a rectangle in the screen by taking x and y coordinates and a screen to manipulate
// turns '.' into '#' to mark the pixel as ON
const makeRect = function(x, y, lcd) {
  for(let i = 0; i < y; i++){
    for(let j = 0; j < x; j++){
      lcd[i][j] = '#';
    }
  }
};

// rotates a row in the screen which is an array. takes the last one out and adds it back to the front
const rotateRow = function(rowIndex, amount, lcd) {
  for(let i = 0; i < amount; i++){
    lcd[rowIndex].unshift(lcd[rowIndex].pop());
  }
};

// changes cols - little harder than making rows.
// saving column in an array. moving the row then adding it back to the screen
const rotateCol = function(colIndex, amount, lcd) {
  // get the col and make it into an array
  colAsArray = [];
  for(let i = 0; i < lcd.length; i++){
      colAsArray.push(lcd[i][colIndex]);
  }
  // perform the move
  for(let j = 0; j < amount; j++){
    colAsArray.unshift(colAsArray.pop());
  }
  // add it back to the col in order
  for(let k = 0; k < lcd.length; k++){
      lcd[k][colIndex] = colAsArray[k];
  }
};

// build a screen
let lcdScreen = buildScreen(6, 50);

// take each direction and perform an action
input.forEach(function(direction) {
  // make a rect
  if(direction.indexOf('rect') >= 0){
    let xy = direction.replace('rect ','').split('x');
    makeRect(xy[0], xy[1], lcdScreen);
  // rotate col
  } else if(direction.indexOf('rotate column') >= 0) {
    let colIndexAndAmount = direction.replace('rotate column x=','').split(' by ');
    rotateCol(colIndexAndAmount[0], colIndexAndAmount[1], lcdScreen);\
  // rotate row
  } else if(direction.indexOf('rotate row') >= 0) {
    let rowIndexAndAmount = direction.replace('rotate row y=','').split(' by ');
    rotateRow(rowIndexAndAmount[0], rowIndexAndAmount[1], lcdScreen);
  // else bad input
  } else {
    console.log('bad input, so doing nothing');
  }
});

// counts ON pixels
let hashCounter = 0;

// writing out part 2 while counting for part 1
console.log('Part 2: Message - Make console full width in window for better viewing');
lcdScreen.forEach(function(arr){
  // count ON in each row
  hashCounter += arr.filter(function(index){
    return index === '#';
  }).length;
  // write out message for part 2
  console.log(JSON.stringify(arr).replace(/,./g, ''));
})

// count of ON pixels
console.log("Part 1: Number of ON pixels", hashCounter);
