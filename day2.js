// take input - added \n for breaking lines to split into array
let directions = "RRLLRLLRULLRUUUDRDLDDLLLDDDDDUUURRRRUUDLRULURRRDRUDRUUDDRUDLLLRLDDDUDRDDRRLLLLRLRLULUURDRURRUULDRRDUDURRUURURDLURULLDUDRDLUUUUDDURRLLLUDLDLRDRRRDULLDLDULLDRLDLDURDLRRULLDDLDRLLLUDDLLRDURULLDDDDDUURURLRLRRDUURUULRLLLULLRLULLUUDRRLLDURLDDDDULUUDLUDDDULRLDURDDRUUDRRUUURLLLULURUDRULDRDUDUDRRDDULRURLLRRLRRLLDLULURDRDRULDRDRURUDLLRRDUUULDDDUURDLULDLRLLURRURLLUDURDDRUDRDLLLLDLRLDLDDRDRRDUUULLUULRRDLURLDULLDLDUUUULLLDRURLRULLULRLULUURLLRDDRULDULRLDRRURLURUDLRRRLUDLDUULULLURLDDUDDLLUDRUDRLDUDURRRRLRUUURLUDDUDURDUDDDLLRLRDDURDRUUDUDRULURLRLDRULDRRLRLDDDRDDDRLDUDRLULDLUDLRLRRRLRDULDDLRRDDLDDULDLLDU\nRULLUDDUDLULRRDLLDRUDLLLDURLLLURDURLRDRRDLRDRDLLURRULUULUDUDDLLRRULLURDRLDURDLDDUURLUURLDLDLRLDRLRUULDRLRLDRLRLUDULURDULLLDRUDULDURURRRUDURDUDLRDRRURULRRLRLRRRRRRDRUDLDRULDRUDLRDLRRUDULDLRLURRRLLDRULULRUDULRLULLRLULDRUDUULLRUULDULDUDDUUULLLDRDDRRDLURUUDRRLRRRDLRRLULLLLDLRUULDLLULURUURURDRURLLDUDRRURRURRUUDDRRDDRRRRUDULULRLUULRRDDRDDLLUDLDLULLRLDRLLUULDURLDRULDDUDRUUUURRLDDUDRUURUDLLDLDLURDLULDRLLLULLLUDLLDLD\nRDLDULURDLULRRDLRLLLULRUULURULLLDLLDDRLLURUUUURDRLURLLRLRLLLULRDLURDURULULDDUDDUDRLRLDLULLURRRUULUDRDURRRUDDDLUDLDLRLRRLLLRUULLLLURRDDDRRRUURULRLDRRRLRLUDDRRULDDDRUUDDRLLDULRLUDUDLDLDDDUDDLLDDRDRDUDULDRRUDRDRRDRLUURDLRDDDULLDRRRRRUDRLURDUURRDDRLUDLURRRLRDDDLRRLUULRLURDUUURRDLDDULLLRURRRUDRLUDLLDDDDDUDDRDULLUUDDURRLULLUDULUUDRLDRRRLLURLRRLLDLLLLUDRUUUDDULLRDLLDUDUDUURRUUUDRUURDRDLLDLDDULLDDRRULDLDDUUURLDLULLLRRLLRDDULLDLDLDDLDLDULURRDURURDRDRRDLR\nRDRLRRUUDRLDUDLLDLUDLUUDUDLRRUUDRDDDLDDLLLRRRUDULLRRRRRURRRLUDDDLRRRRUUULDURDRULLDLRURRUULUDRURRRRLRURLRDUUDUDUDRDDURRURUDLLLLLRURUULRUURLLURDRUURLUDDDRLDDURDLDUDRURDRLRRRRUURDDRRRRURDLUUDRLDRDUULURUDDULLURRDUDLUULLDURRURLUDUUDRDDDUUDDUUUULDLDUDDLUDUUDRURLLULRUUULLRRDDUDDLULDDUUUDLUDDLDDLLRUUDRULLRRDRLLDLLRRLULLRRDDRLRDUULLLUULLDLLUDUDDLRDULUDLDLUDDRRRRDUDLUULLULDLRRDLULRLRRRULRURRDRLULDDUDLDLDULLURLLRDLURRULURDLURLUDRDRRUUDRLLUDDRLRDDUURLRRDUDLDRURDUUUDRRLLRDLDLLDRRURLUDURUULDUDLDDDDRUULLDDRLRURRDURLURRLDDRRRRLRLRDRURUDDRDLDRURLULDDL\nRULRDLDDLRURDDDDDDRURLLLDDDUUULLRRDLDLURUURLUDLURRLUDUURDULDRUULDDURULDUULDDULLLUDLRULDRLDLRDDRRDLDDLLDRRUDDUDRDUULUDLLLDDLUUULDDUUULRRDULLURLULDLRLLLRLURLLRLRLDRDURRDUUDDURRULDDURRULRDRDUDLRRDRLDULULDRDURDURLLLDRDRLULRDUURRUUDURRDRLUDDRRLDLDLULRLLRRUUUDDULURRDRLLDLRRLDRLLLLRRDRRDDLDUULRLRRULURLDRLRDULUDRDLRUUDDDURUDLRLDRRUDURDDLLLUDLRLURDUDUDULRURRDLLURLLRRRUDLRRRLUDURDDDDRRDLDDLLDLRDRDDRLLLURDDRDRLRULDDRRLUURDURDLLDRRRDDURUDLDRRDRUUDDDLUDULRUUUUDRLDDD".split('\n');

let code = ""; // the code
let numberPad = []; // array that holds the number grid
let diamondPad = []; // array that holds the number grid
let row = []; // array that holds a pad row
let position = [1,1]; // start at 5 - index 0 = row index 1 = col
let boundry = 0;

// constructs a square/rect grid pad - built for fun to allow for any size of rows or cols
const constructNumberPad = function(pad, max, cols, rows, inc) {
  for(let i = 1; i <= max; i+=inc){
    row.push(i);
    if(row.length >= cols) {
      pad.push(row);
      row = [];
    }
  }
}

// makes a diamond pad of any specified size with an array of any length of characters - would fail if specs didnt fit the diamond shape i think
// used 0 as flag for boundries
const constructDiamondPad = function(pad, chars, cols, rows) {
  if(chars.length !== Math.ceil(cols*rows/2) || cols % 2 === 0 || rows % 2 === 0 || rows !== cols) {
    alert("Bad Data Entry For Diamond Pad Construction");
  }

  let length = 1;
  let start = Math.floor((cols - length) / 2);
  let counter = 0;
  for(let j = 0; j < cols; j++){
    for(let i = 0; i <= cols-1; i++){
      if(i >= start && counter < length ) {
        row.push(chars.shift(i));
        counter++
      }
      else {
        row.push(boundry);
      }

      if(row.length >= cols) {
        diamondPad.push(row);
        row = [];
        if(length >= cols || diamondPad.length > Math.floor(cols / 2))
          length-=2;
        else {
          length+=2;
        }
        start = Math.floor((cols - length) / 2);
        counter = 0;
      }
    }
  }
}

// move along the a pad making sure not to go over boundries defined above or cross a 0
const makeMove = function(move, pad) {
  switch (move) {
    case "U":
      if(position[0] > 0 && pad[position[0]-1][position[1]] !== boundry)
        position[0]--;
      break;
    case "D":
      if(position[0] < pad.length-1 && pad[position[0]+1][position[1]] !== boundry)
        position[0]++;
      break;
    case "L":
      if(position[1] > 0 && pad[position[0]][position[1]-1] !== boundry)
        position[1]--;
      break;
    case "R":
      if(position[1] < pad[0].length-1 && pad[position[0]][position[1]+1] !== boundry)
        position[1]++;
        break;
    default:
      console.log('invalid movement');
      break;
  }
}

// adds to code string - takes direction string and the pad
const enterCode = function (direction, pad) {
  direction = direction.split("");
  direction.forEach(function(move){
    makeMove(move, pad);
  });
  code += pad[position[0]][position[1]];
}

// make the pad - params = pad, max number, grid rows, grid cols, and number incrementer
constructNumberPad(numberPad, 9, 3, 3, 1);
// for each direction string enter a number
directions.forEach(function(direction){
  enterCode(direction, numberPad);
});
console.log("CODE FOR PART 1: ", code);

// reset position to diamondPad 5 location and reset code
position = [2,0];
code = "";
// make diamondPad - no incrementer needed and pass in chars to form diamond
constructDiamondPad(diamondPad, [1,2,3,4,5,6,7,8,9,'A','B','C','D'], 5, 5);
directions.forEach(function(direction){
  enterCode(direction, diamondPad);
});
console.log("CODE FOR PART 2: ", code);
