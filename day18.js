// puzzle input
const input = "^.^^^..^^...^.^..^^^^^.....^...^^^..^^^^.^^.^^^^^^^^.^^.^^^^...^^...^^^^.^.^..^^..^..^.^^.^.^.......".split("");

// counts the safe tiles
const countSafeTiles = function (row) {
  return row.filter(function(char){ return char === "."; }).length;
};

// calculates the row and whether each of its tiles is safe or not based on the row before it
const calcRow = function (row) {
  let calcedRow = [];
  for(let k = 0; k < row.length; k++) {
    let a = row[k-1];
    let b = row[k];
    let c = row[k+1];
    // safe if not defined
    if(a === undefined)
      a = ".";
    if(c === undefined)
      c = ".";
    // defined rules for unsafe tiles
    if((a === "^" && b === "^" && c === ".") || (a === "." && b === "^" && c === "^") || (a === "^" && b === "." && c === ".") || (a === "." && b === "." && c === "^"))
      calcedRow[k] = "^";
    else
      calcedRow[k] = "."; // safe
  }
  return calcedRow;
};

// returns safe tiles given number of rows and the first row
const getSafeTiles = function (firstRow, totalRows) {
  // holds all the rows
  const rows = [];
  // counter for safe tiles
  let safeTiles = 0;
  // add the first row and count its safe tiles
  rows.push(firstRow);
  safeTiles += countSafeTiles(firstRow);
  // loop through and create the rest of the rows and count its safe tiles
  for(let i = 1; i < totalRows; i++) {
    let row = calcRow(rows[i-1]);
    safeTiles += countSafeTiles(row);
    rows.push(row);
  }

  return safeTiles;
};

console.log("Part 1 Answer: ", getSafeTiles(input, 40));
console.log("Part 2 Answer: ", getSafeTiles(input, 400000));
