var route = "R1, R3, L2, L5, L2, L1, R3, L4, R2, L2, L4, R2, L1, R1, L2, R3, L1, L4, R2, L5, R3, R4, L1, R2, L1, R3, L4, R5, L4, L5, R5, L3, R2, L3, L3, R1, R3, L4, R2, R5, L4, R1, L1, L1, R5, L2, R1, L2, R188, L5, L3, R5, R1, L2, L4, R3, R5, L3, R3, R45, L4, R4, R72, R2, R3, L1, R1, L1, L1, R192, L1, L1, L1, L4, R1, L2, L5, L3, R5, L3, R3, L4, L3, R1, R4, L2, R2, R3, L5, R3, L1, R1, R4, L2, L3, R1, R3, L4, L3, L4, L2, L2, R1, R3, L5, L1, R4, R2, L4, L1, R3, R3, R1, L5, L2, R4, R4, R2, R1, R5, R5, L4, L1, R5, R3, R4, R5, R3, L1, L2, L4, R1, R4, R5, L2, L3, R4, L4, R2, L2, L4, L2, R5, R1, R4, R3, R5, L4, L4, L5, L5, R3, R4, L1, L3, R2, L2, R1, L3, L5, R5, R5, R3, L4, L2, R4, R5, R1, R4, L3";

var getFinalDestination = function(route) {
  var routeAsArray = route.split(', ');
  var pointing = 0;
  var x = 0;
  var y = 0;
  var endCoordinates = [];

  function getNewHeading(step) {
    if(pointing === 360)
      pointing = 0;

    if(step.indexOf("L") > -1)
      pointing -= 90;
    else
      pointing += 90;

    if(pointing < 0)
      pointing += 360;
  }

  function turn(step) {
    var distance = parseInt(step.substring(1, step.length));
    var direction = step.substring(0,1);

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

    getNewHeading(step);
  }

  routeAsArray.forEach(function(direction){
    turn(direction);
  });

  return {
    "x": x,
    "y": y
  };
}

var calcDistance = function (dest) {
  return Math.abs(0-dest.x) + Math.abs(0-dest.y);
}
console.log(calcDistance(getFinalDestination(route)));
