class Building {
  constructor(floors) {
    this.elevator = new Elevator();
    for(let i = 1; i <= floors; i++) {
      this[i] = new Floor();
    }
    this[1].contents.push(this.elevator);
  }

  moveElevator(direction) {
    if(this.elevator.canMove(direction)){
      const e = this[this.elevator.location].contents.indexOf(building.elevator);
      if(i != -1) {
      	this[this.elevator.location].contents.splice(e, 1);
      }
      this.elevator.move(direction);
      this[this.elevator.location].contents = [...this[this.elevator.location].contents, this.elevator];
    }
  }
};

class Floor {
  constructor() {
    this.contents = [];
  }
};

class Elevator {
  constructor() {
    this.location = 1;
    this.contents = [];
    this.activated = false;
    this.steps = 0;
  }

  canMove(direction) {
    if(this.contents.length <= 2 && this.activated){
      if(direction === 'up') {
        return this.location + 1 <= 4;
      } else {
        return this.location - 1 >= 1;
      }
    } else {
      return false;
    }
  }

  move(direction){
    if(direction === 'up') {
      this.location++;
    } else {
      this.location--;
    }
    this.steps++;
  }

  add(content) {
    if(this.contents.length < 2)
      this.contents.push(content);
    this.activated = true;
  }

  remove(content) {

  }
};

class Generator {
  constructor(type, location) {
    this.type = type;
    this.location = location;
    this.connected = false;
  }

  canMove() {

  }
};

class Microchip {
  constructor(type, location) {
    this.type = type;
    this.location = location;
    this.connected = false;
  }

  canMove() {
    
  }
}

const building = new Building(4);
