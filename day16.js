// calcs dragon curve
// first reverses string then flips 0s to 1s and 1s to 0s
// then returns orig string + 0 + the copied modified string from the steps above
const dragonCurve = function(str) {
  let copy = str.split('').reverse().map(function(i){
    return 1-i;
  });
  return str + "0" + copy.join('');
};

// calculates the checksum by taking a string and grouping by 2.
// returns a 1 if the grouped 2 are the same and a 0 if they arent.
// returned checksum should be half the orig val
const calcCheckSum = function(str) {
  let checkSum = '';
  for(var i = 0; i < str.length; i+=2) {
    if(str[i] === str[i+1])
  	checkSum+="1";
    else
  	checkSum+="0";
  }
  return checkSum;
};

// gets the check sum from orig val and disc size
// first finds the dragon curve that fills the disc
// then gets the first checksum - if its odd return that checksum
// if its even then continue to checksum the orig checksum until you get an odd length
const getCheckSum = function(val, diskSize) {
  let checkVal = val;
  while(checkVal.length < diskSize) {
    checkVal = dragonCurve(checkVal);
  }
  checkVal = checkVal.substr(0, diskSize);

  let checkSum = calcCheckSum(checkVal);

  if(checkSum.length % 2 !== 0)
    return checkSum;

  do {
    checkSum = calcCheckSum(checkSum);
  } while(checkSum.length % 2 === 0);

  return checkSum;
};

console.log('Part 1 Answer: ', getCheckSum("10111100110001111", 272));
console.log('Part 2 Answer: ', getCheckSum("10111100110001111", 35651584));
