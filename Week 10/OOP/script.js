"use strict";

function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}
Vehicle.prototype = {
  drive() {},
  park() {},
};

function Car(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel);
  this.wheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Moto(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel);
  this.wheels = 2;
}
Moto.prototype = Object.create(Vehicle.prototype);
Moto.prototype.constructor = Moto;

function Bus(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel);
  this.wheels = 16;
  this.color = "Yellow";
}
Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Moto;

function Engine(name, capacity) {
  this.name = name;
  this.capacity = capacity;
}
Engine.prototype.run = function () {
  console.log("Running");
};
Engine.prototype.start = function () {
  console.log("Starting");
  this.run();
};
Engine.prototype.stop = function () {
  console.log("Has stopped");
};

function Fleet(lotNumber, vehicle) {
  this.vehicle = vehicle;
  this.lotNumber = lotNumber;
}

Fleet.prototype.do = function () {
  let fleet = [];
  for (let i = 0; i < this.lotNumber; i++) {
    fleet.push(this.vehicle);
  }

  return fleet;
};

const car = new Car("Audi", "Black", "2.7", "Diesel");
const moto = new Moto("Ducati", "Black", "1.0", "Diesel");

const carFleet = new Fleet(10, car);
const motoFleet = new Fleet(5, moto);

console.table(motoFleet.do());
console.table(carFleet.do());
