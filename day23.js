// because we modify with toggle
const origInput = [
  "cpy a b",
  "dec b",
  "cpy a d",
  "cpy 0 a",
  "cpy b c",
  "inc a",
  "dec c",
  "jnz c -2",
  "dec d",
  "jnz d -5",
  "dec b",
  "cpy b c",
  "cpy c d",
  "dec d",
  "inc c",
  "jnz d -2",
  "tgl c",
  "cpy -16 c",
  "jnz 1 c",
  "cpy 98 c",
  "jnz 86 d",
  "inc a",
  "inc d",
  "jnz d -2",
  "inc c",
  "jnz c -5"
];

// set input and registers
let input = origInput;
let registers = {
  a: 7,
  b: 0,
  c: 0,
  d: 0
};

// sets register to the amount of another register if the amount isn't a number, if it is a number then set it to that number
const copy = function(register, amount) {
  if(registers[register] !== undefined) {
    registers[register] = (isNaN(parseInt(amount)) && registers[amount] !== undefined) ? registers[amount] : parseInt(amount);
  }
};

// increase the register by 1
const inc = function(register) {
  registers[register]++;
};

// decrease the register by one
const dec = function(register) {
  registers[register]--;
};

// decrease the register by one
const tgl = function(register, rule) {
  // jump to value
  const jump = registers[register];
  const indexToChange = rule+jump;
  const ruleToChange = input[indexToChange];

  if(ruleToChange !== undefined) {
    const ruleVars = ruleToChange.split(" ");
    const command = ruleVars[0];

    if(ruleVars.length >= 3) {
      // two fact rule
      if(command === "jnz") {
        // change to cpy
        input[indexToChange] = input[indexToChange].replace("jnz", "cpy");
      } else {
        // change to jnz
        input[indexToChange] = "jnz" + input[indexToChange].slice(3);
      }
    } else {
      // one fact rule
      if(command === "inc") {
        // change to dec
        input[indexToChange] = input[indexToChange].replace("inc", "dec");
      } else {
        // change to inc
        input[indexToChange] = "inc" + input[indexToChange].slice(3);
      }
    }
  }
};

// find the pass
const findPass = function() {
  let rule = 0; // counter for what rule its on
  let ruleVars = []; // array to hold rule parts
  let command = '' // string for the rule command

  while(rule < input.length) {
     ruleVars = input[rule].split(' '); // split the rule string into an array
     command = ruleVars[0]; // first is always the rule

     // second and potential third indexes of arrays could be used based on rule
     switch(command){
       case 'cpy':
        copy(ruleVars[2], ruleVars[1]); // copy
        break;
       case 'inc':
        inc(ruleVars[1]); // increase the register specified
        break;
       case 'dec':
        dec(ruleVars[1]); // decrease the register specified
        break;
       case 'jnz':
        let canJump = false;
        if('abcd'.includes(ruleVars[1]))
          canJump = registers[ruleVars[1]] !== 0
        else
          canJump = parseInt(ruleVars[1]) !== 0;

        // if the register isnt a value of 0
        if(canJump){
          // set the rule index to the value in the rule. subtract 1 to offset the ++ at the end of the loop
          // tried to use continue here instead but it wasnt working. not sure why. investigating later
          if('abcd'.includes(ruleVars[2])) {
            if(rule + registers[ruleVars[2]] - 1 < input.length - 1)
              rule += registers[ruleVars[2]] - 1;
          } else {
            if(rule + parseInt(ruleVars[2]) - 1 < input.length - 1)
              rule += parseInt(ruleVars[2]) - 1;
          }
        }
        break;
        case 'tgl':
          tgl(ruleVars[1], rule);
        break;
       default:
        console.log('bad input');
        break;
     }

     // increase the index
     rule++;
  };
}

// part 1
findPass();
console.log("Part 1 Answer: ", registers['a']);

// reset
let input = origInput;
registers = {
  a: 12,
  b: 0,
  c: 0,
  d: 0
};

// part 2
findPass();
console.log("Part 2 Answer: ", registers['a']);
