// discs - must all be at pos 0 with time incrementing through each step
const input = [
  "Disc #1 has 7 positions; at time=0, it is at position 0.",
  "Disc #2 has 13 positions; at time=0, it is at position 0.",
  "Disc #3 has 3 positions; at time=0, it is at position 2.",
  "Disc #4 has 5 positions; at time=0, it is at position 2.",
  "Disc #5 has 17 positions; at time=0, it is at position 0.",
  "Disc #6 has 19 positions; at time=0, it is at position 7."
];

// calculates the positions of the discs at a given time
const calcPositions = function(items, t) {
  return items.map(function(item){
    let maxPosition = item[1];
    let position = t + item[0] + item[2];
    return maxPosition > position ? position : position % maxPosition;
  });
};

// checks that the discs are all at position 0 by checking the sum of indexes
const checkPositions = function(pos) {
  return pos.reduce(function(a, b) {
    return a + b;
  }) === 0;
};

// gets the time
const getTime = function(input) {
  let discs = [];
  let time = 0;
  let allAtZero = false;

  // disc - index 0 = disc number (incrementer), index 1 = num of positions, index 2 = starting position
  input.forEach(function(str){
    let disc = str.replace('Disc #','').replace(' has ',',').replace(' positions; at time=0, it is at position ', ',').replace('.','').split(',');
    for(let i = 0; i < disc.length; i++) {
      disc[i] = +disc[i];
    }
    discs.push(disc);
  });

  // while the positions are not all at zero
  while(!allAtZero) {
      // calc positions and check them if they are all at zero and break
      let positions = calcPositions(discs, time);
      if(checkPositions(positions)) {
        allAtZero = true;
        break;
      }
      // if not, add more time
      time++
  };

  // return the time that works
  return time;
};

console.log("Part 1 Answer: ", getTime(input));
// add a disc for part 2
input.push("Disc #7 has 11 positions; at time=0, it is at position 0.");
console.log("Part 2 Answer: ", getTime(input));
