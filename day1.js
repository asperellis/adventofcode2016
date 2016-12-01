// route as string
var route = "R1, R3, L2, L5, L2, L1, R3, L4, R2, L2, L4, R2, L1, R1, L2, R3, L1, L4, R2, L5, R3, R4, L1, R2, L1, R3, L4, R5, L4, L5, R5, L3, R2, L3, L3, R1, R3, L4, R2, R5, L4, R1, L1, L1, R5, L2, R1, L2, R188, L5, L3, R5, R1, L2, L4, R3, R5, L3, R3, R45, L4, R4, R72, R2, R3, L1, R1, L1, L1, R192, L1, L1, L1, L4, R1, L2, L5, L3, R5, L3, R3, L4, L3, R1, R4, L2, R2, R3, L5, R3, L1, R1, R4, L2, L3, R1, R3, L4, L3, L4, L2, L2, R1, R3, L5, L1, R4, R2, L4, L1, R3, R3, R1, L5, L2, R4, R4, R2, R1, R5, R5, L4, L1, R5, R3, R4, R5, R3, L1, L2, L4, R1, R4, R5, L2, L3, R4, L4, R2, L2, L4, L2, R5, R1, R4, R3, R5, L4, L4, L5, L5, R3, R4, L1, L3, R2, L2, R1, L3, L5, R5, R5, R3, L4, L2, R4, R5, R1, R4, L3";

// function that returns x and y coordinates based on the route
var getFinalDestination = function(route) {
  // turn route into an array
  var routeAsArray = route.split(', ');
  // used to track cardinal direction N = 0, E = 90, S = 180, W = 270
  var pointing = 0;
  // start coordinates
  var x = 0;
  var y = 0;

  // calculates the new cardinal heading
  function getNewHeading(step) {
    // reset 360 to 0 to prevent going above 360
    if(pointing === 360)
      pointing = 0;

    // if turning left reduce by 90, if right add 90
    if(step.indexOf("L") > -1)
      pointing -= 90;
    else
      pointing += 90;

    // if heading is negative add 360 to bring it back to between 0-360 always
    if(pointing < 0)
      pointing += 360;
  }

  // performs a turn based on one step of the route
  function turn(step) {
    // distance to travel along the grid: number portion of the step turned to int
    var distance = parseInt(step.substring(1, step.length));
    // turn direction (L or R)
    var direction = step.substring(0,1);

    // switch based on current cardinal direction - this could probably be done better?
    // if you turn left pointing south or east you add distance to x and y respectively
    // if you turn right you subtract
    // if you turn left pointing north or west you subtract distance to x and y respectively
    // if you turn right you add
    switch (pointing) {
    case 90:
      direction === "L" ? y+=distance : y-=distance;
      break;
    case 180:
      direction === "L" ? x+=distance : x-=distance;
      break;
    case 270:
      direction === "L" ? y-=distance : y+=distance;
      break;
    default:
      direction === "L" ? x-=distance : x+=distance;
      break;
    }

    // get new cardinal heading after calculating new coordinates
    getNewHeading(step);
  }

  // make turns for each step in the route
  routeAsArray.forEach(function(direction){
    turn(direction);
  });

  // return object with x and y properties of the destination coordinates
  return {
    "x": x,
    "y": y
  };
}

// calculates the distance between start (0,0) and end destination obj with x and y properties
var calcDistance = function (dest) {
  return Math.abs(0-dest.x) + Math.abs(0-dest.y);
}

// get final destination coordinates and calculate the distance
calcDistance(getFinalDestination(route));
