const elfNum = 3014603;
var elves = [];
for(var i = 0; i < elfNum; i++) {
	elves.push(1);
}

let takingElf = 0;

while(elves.filter(function(elf) { return elf === 0; }).length !== elfNum - 1) {
  let nextIndex = 0;
  if(takingElf+1 === elfNum)
    nextIndex = 0;
  else
    nextIndex = takingElf+1;
  if(elves[nextIndex] !== 0) {
    elves[takingElf]+=elves[nextIndex];
    elves[nextIndex] = 0;
  } else {
    nextElfToTake = takingElf + 1;
    while(elves[nextElfToTake] === 0) {
      nextElfToTake++;
    }
    elves[nextElfToTake]+=elves[nextIndex];
    elves[nextElfToTake] = 0;
  }

  let nextTakingElf = nextIndex;
  while(elves[nextTakingElf] === 0) {
    nextTakingElf++;
  }
  if(nextTakingElf > elfNum)
    nextTakingElf = nextTakingElf % elfNum;

  takingElf = nextTakingElf;
  console.log("Next elf index", takingElf);
}

console.log(elves.filter(function(elf) { return elf !== 0; }));
