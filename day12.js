const input = [
  "cpy 1 a",
  "cpy 1 b",
  "cpy 26 d",
  "jnz c 2",
  "jnz 1 5",
  "cpy 7 c",
  "inc d",
  "dec c",
  "jnz c -2",
  "cpy a c",
  "inc a",
  "dec b",
  "jnz b -2",
  "cpy c b",
  "dec d",
  "jnz d -6",
  "cpy 14 c",
  "cpy 14 d",
  "inc a",
  "dec d",
  "jnz d -2",
  "dec c",
  "jnz c -5",
];

// registers - used obj
const registers = {
  a: 0,
  b: 0,
  c: 0,
  d: 0
};

// sets register to the amount of another register if the amount isn't a number, if it is a number then set it to that number
const copy = function(register, amount) {
  registers[register] = isNaN(parseInt(amount)) ? registers[amount] : parseInt(amount);
};

// increase the register by 1
const inc = function(register) {
  registers[register]++;
};

// decrease the register by one
const dec = function(register) {
  registers[register]--;
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
        // if the register isnt a value of 0
        if(registers[ruleVars[1]] !== 0){
          // set the rule index to the value in the rule. subtract 1 to offset the ++ at the end of the loop
          // tried to use continue here instead but it wasnt working. not sure why. investigating later
          rule += parseInt(ruleVars[2]) - 1;
        }
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
console.log("Part 1: ", registers['a']);

// reset for part 2
registers.a = 0;
registers.b = 0;
registers.c = 1;
registers.d = 0;

findPass();
console.log("Part 2: ", registers['a']);
