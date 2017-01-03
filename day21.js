const instructions = [
  [
    "rotate",
    "right",
    "3",
    "steps"
  ],
  [
    "swap",
    "letter",
    "b",
    "with",
    "letter",
    "a"
  ],
  [
    "move",
    "position",
    "3",
    "to",
    "position",
    "4"
  ],
  [
    "swap",
    "position",
    "0",
    "with",
    "position",
    "7"
  ],
  [
    "swap",
    "letter",
    "f",
    "with",
    "letter",
    "h"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "f"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "b"
  ],
  [
    "swap",
    "position",
    "3",
    "with",
    "position",
    "0"
  ],
  [
    "swap",
    "position",
    "6",
    "with",
    "position",
    "1"
  ],
  [
    "move",
    "position",
    "4",
    "to",
    "position",
    "0"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "d"
  ],
  [
    "swap",
    "letter",
    "d",
    "with",
    "letter",
    "h"
  ],
  [
    "reverse",
    "positions",
    "5",
    "through",
    "6"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "h"
  ],
  [
    "reverse",
    "positions",
    "4",
    "through",
    "5"
  ],
  [
    "move",
    "position",
    "3",
    "to",
    "position",
    "6"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "e"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "c"
  ],
  [
    "rotate",
    "right",
    "2",
    "steps"
  ],
  [
    "reverse",
    "positions",
    "5",
    "through",
    "6"
  ],
  [
    "rotate",
    "right",
    "3",
    "steps"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "b"
  ],
  [
    "rotate",
    "right",
    "5",
    "steps"
  ],
  [
    "swap",
    "position",
    "5",
    "with",
    "position",
    "6"
  ],
  [
    "move",
    "position",
    "6",
    "to",
    "position",
    "4"
  ],
  [
    "rotate",
    "left",
    "0",
    "steps"
  ],
  [
    "swap",
    "position",
    "3",
    "with",
    "position",
    "5"
  ],
  [
    "move",
    "position",
    "4",
    "to",
    "position",
    "7"
  ],
  [
    "reverse",
    "positions",
    "0",
    "through",
    "7"
  ],
  [
    "rotate",
    "left",
    "4",
    "steps"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "d"
  ],
  [
    "rotate",
    "left",
    "3",
    "steps"
  ],
  [
    "swap",
    "position",
    "0",
    "with",
    "position",
    "7"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "e"
  ],
  [
    "swap",
    "letter",
    "e",
    "with",
    "letter",
    "a"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "c"
  ],
  [
    "swap",
    "position",
    "3",
    "with",
    "position",
    "2"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "d"
  ],
  [
    "reverse",
    "positions",
    "2",
    "through",
    "4"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "g"
  ],
  [
    "move",
    "position",
    "3",
    "to",
    "position",
    "0"
  ],
  [
    "move",
    "position",
    "3",
    "to",
    "position",
    "5"
  ],
  [
    "swap",
    "letter",
    "b",
    "with",
    "letter",
    "d"
  ],
  [
    "reverse",
    "positions",
    "1",
    "through",
    "5"
  ],
  [
    "reverse",
    "positions",
    "0",
    "through",
    "1"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "a"
  ],
  [
    "reverse",
    "positions",
    "2",
    "through",
    "5"
  ],
  [
    "swap",
    "position",
    "1",
    "with",
    "position",
    "6"
  ],
  [
    "swap",
    "letter",
    "f",
    "with",
    "letter",
    "e"
  ],
  [
    "swap",
    "position",
    "5",
    "with",
    "position",
    "1"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "a"
  ],
  [
    "move",
    "position",
    "1",
    "to",
    "position",
    "6"
  ],
  [
    "swap",
    "letter",
    "e",
    "with",
    "letter",
    "d"
  ],
  [
    "reverse",
    "positions",
    "4",
    "through",
    "7"
  ],
  [
    "swap",
    "position",
    "7",
    "with",
    "position",
    "5"
  ],
  [
    "swap",
    "letter",
    "c",
    "with",
    "letter",
    "g"
  ],
  [
    "swap",
    "letter",
    "e",
    "with",
    "letter",
    "g"
  ],
  [
    "rotate",
    "left",
    "4",
    "steps"
  ],
  [
    "swap",
    "letter",
    "c",
    "with",
    "letter",
    "a"
  ],
  [
    "rotate",
    "left",
    "0",
    "steps"
  ],
  [
    "swap",
    "position",
    "0",
    "with",
    "position",
    "1"
  ],
  [
    "reverse",
    "positions",
    "1",
    "through",
    "4"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "d"
  ],
  [
    "swap",
    "position",
    "4",
    "with",
    "position",
    "2"
  ],
  [
    "rotate",
    "right",
    "0",
    "steps"
  ],
  [
    "swap",
    "position",
    "1",
    "with",
    "position",
    "0"
  ],
  [
    "swap",
    "letter",
    "c",
    "with",
    "letter",
    "a"
  ],
  [
    "swap",
    "position",
    "7",
    "with",
    "position",
    "3"
  ],
  [
    "swap",
    "letter",
    "a",
    "with",
    "letter",
    "f"
  ],
  [
    "reverse",
    "positions",
    "3",
    "through",
    "7"
  ],
  [
    "rotate",
    "right",
    "1",
    "step"
  ],
  [
    "swap",
    "letter",
    "h",
    "with",
    "letter",
    "c"
  ],
  [
    "move",
    "position",
    "1",
    "to",
    "position",
    "3"
  ],
  [
    "swap",
    "position",
    "4",
    "with",
    "position",
    "2"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "b"
  ],
  [
    "reverse",
    "positions",
    "5",
    "through",
    "6"
  ],
  [
    "move",
    "position",
    "5",
    "to",
    "position",
    "3"
  ],
  [
    "swap",
    "letter",
    "b",
    "with",
    "letter",
    "g"
  ],
  [
    "rotate",
    "right",
    "6",
    "steps"
  ],
  [
    "reverse",
    "positions",
    "6",
    "through",
    "7"
  ],
  [
    "swap",
    "position",
    "2",
    "with",
    "position",
    "5"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "e"
  ],
  [
    "swap",
    "position",
    "1",
    "with",
    "position",
    "7"
  ],
  [
    "swap",
    "position",
    "1",
    "with",
    "position",
    "5"
  ],
  [
    "reverse",
    "positions",
    "2",
    "through",
    "7"
  ],
  [
    "reverse",
    "positions",
    "5",
    "through",
    "7"
  ],
  [
    "rotate",
    "left",
    "3",
    "steps"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "b"
  ],
  [
    "rotate",
    "left",
    "3",
    "steps"
  ],
  [
    "swap",
    "letter",
    "e",
    "with",
    "letter",
    "c"
  ],
  [
    "rotate",
    "based",
    "on",
    "position",
    "of",
    "letter",
    "a"
  ],
  [
    "swap",
    "letter",
    "f",
    "with",
    "letter",
    "a"
  ],
  [
    "swap",
    "position",
    "0",
    "with",
    "position",
    "6"
  ],
  [
    "swap",
    "position",
    "4",
    "with",
    "position",
    "7"
  ],
  [
    "reverse",
    "positions",
    "0",
    "through",
    "5"
  ],
  [
    "reverse",
    "positions",
    "3",
    "through",
    "5"
  ],
  [
    "swap",
    "letter",
    "d",
    "with",
    "letter",
    "e"
  ],
  [
    "move",
    "position",
    "0",
    "to",
    "position",
    "7"
  ],
  [
    "move",
    "position",
    "1",
    "to",
    "position",
    "3"
  ],
  [
    "reverse",
    "positions",
    "4",
    "through",
    "7"
  ]
];

//swap positions
const swapPositions = function(str, pos1, pos2) {
  const strAsArr = str.split('');
  const char1 = strAsArr[pos1];
  const char2 = strAsArr[pos2];
  strAsArr[pos1] = char2;
  strAsArr[pos2] = char1;
  return strAsArr.join("");
};

//swap letters
const swapLetters = function(str, char1, char2) {
  const strAsArr = str.split('');
  const pos1 = strAsArr.indexOf(char1);
  const pos2 = strAsArr.indexOf(char2);
  strAsArr[pos1] = char2;
  strAsArr[pos2] = char1;
  return strAsArr.join("");
};

//rotate string
const rotateString = function(str, direction, steps) {
  const strAsArr = str.split('');
  for(let i = 0; i < steps; i++) {
    if(direction === "left") {
      strAsArr.push(strAsArr.shift());
    } else {
      strAsArr.unshift(strAsArr.pop());
    }
  }
  return strAsArr.join("");
};

// rotate once + by position of char + one more if index is at least 4
const rotateByPos = function(str, char) {
  const strAsArr = str.split('');
  let steps = strAsArr.indexOf(char);
  if(steps >= 4)
    steps+=2;
  else
    steps++;

  return rotateString(str, "right", steps);
};

// undoes a rotate by pos
const undoRotateByPos = function(str, char) {
  const strAsArr = str.split('');
  let steps = strAsArr.indexOf(char);
  // brute force due to not being able to fig out eq
  switch(steps) {
    case 0:
      steps = 9;
    break;
    case 1:
      steps = 1;
    break;
    case 2:
      steps = 6;
    break;
    case 3:
      steps = 2;
    break;
    case 4:
      steps = 7;
    break;
    case 5:
      steps = 3;
    break;
    case 6:
      steps = 0;
    break;
    case 7:
      steps = 4;
    break;
    default:
    steps = 0;
  }

  return rotateString(str, "left", steps);
};

// reverse string from index to index
const reverseChars = function(str, pos1, pos2){
  const strAsArr = str.split('');
  const reversedSection = strAsArr.splice(pos1,pos2-pos1+1).reverse();
  strAsArr.splice(pos1, 0, reversedSection);
  const merged = [].concat.apply([], strAsArr);
  return merged.join("");
};

// move char from one index to another
const moveChar = function(str, pos1, pos2) {
  const strAsArr = str.split('');
  const char = strAsArr.splice(pos1, 1);
  strAsArr.splice(pos2, 0, char)
  return strAsArr.join("");
};

// scrambles a string based on instructions
const scramble = function(str, instructions) {
  let scrambled = str;

  instructions.forEach(function(instruction) {
    const type = instruction[0];

    switch(type) {
      case "swap":
      if(instruction[1] === "position") {
        scrambled = swapPositions(scrambled, parseInt(instruction[2]), parseInt(instruction[5]));
      } else {
        scrambled = swapLetters(scrambled, instruction[2], instruction[5]);
      }
      break;
      case "rotate":
      if(instruction[1] === "based") {
        scrambled = rotateByPos(scrambled, instruction[6]);
      } else {
        scrambled = rotateString(scrambled, instruction[1], parseInt(instruction[2]));
      }
      break;
      case "reverse":
      scrambled = reverseChars(scrambled, parseInt(instruction[2]), parseInt(instruction[4]));
      break;
      case "move":
      scrambled = moveChar(scrambled, parseInt(instruction[2]), parseInt(instruction[5]));
      break;
      default:
      console.log('bad input');
      break;
    }
  });

  return scrambled;
};

//descrambles a string based on instructions
const descramble = function(str, instructions) {
  let unscrambled = str;

  instructions.forEach(function(instruction) {
    const type = instruction[0];

    switch(type) {
      case "swap":
      if(instruction[1] === "position") {
        unscrambled = swapPositions(unscrambled, parseInt(instruction[2]), parseInt(instruction[5]));
      } else {
        unscrambled = swapLetters(unscrambled, instruction[2], instruction[5]);
      }
      break;
      case "rotate":
      if(instruction[1] === "based") {
        unscrambled = undoRotateByPos(unscrambled, instruction[6]);
      } else {
        let reversedDir = ""
        if(instruction[1] === "right")
          reversedDir = "left";
        else
          reversedDir = "right";
        unscrambled = rotateString(unscrambled, reversedDir, parseInt(instruction[2]));
      }
      break;
      case "reverse":
      unscrambled = reverseChars(unscrambled, parseInt(instruction[2]), parseInt(instruction[4]));
      break;
      case "move":
      unscrambled = moveChar(unscrambled, parseInt(instruction[5]), parseInt(instruction[2]));
      break;
      default:
      break;
    }
  });

  return unscrambled;
};

console.log("Part 1: scramble abcdefgh: ", scramble("abcdefgh", instructions));
console.log("Part 2: descramble fbgdceah: ", descramble("fbgdceah", instructions.reverse()));
