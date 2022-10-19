let numberOutput = document.getElementById("numbers");
let resultOutput = document.getElementById("result");
let myCarDoors = document.getElementById("myCarDoors");
let myCarNewDoors = document.getElementById("myCarNewDoors");

let a = 4;
let b = 2;
let c = 6;
let result = addNumbers(a,b,c);

function addNumbers(a,b,c){
    let result = a + b + c;
    return result
}

numberOutput.innerHTML = "A = " + a + "  B = " + b + "  C = " + c;
resultOutput.innerHTML = "Result of adding a+b+c is: " + result;

class Car {
    constructor(amountDoors){
        this.amountDoors = amountDoors;
    }
    addDoor() {
        this.amountDoors = this.amountDoors + 1;
    }
}

var myCar = new Car(3);
myCarDoors.innerHTML = "My car has " + myCar.amountDoors + " doors.";

myCar.addDoor();
myCarNewDoors.innerHTML = "After the function addDoor() my car now has "+ myCar.amountDoors + " doors.";