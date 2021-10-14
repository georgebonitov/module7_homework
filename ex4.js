var totalConsumption = 0;

function Appliance(type,brand,consumption) {
    this.type = type,
    this.brand = brand,
    this.consumption = consumption,
    this.description = 'Home appliance',
    this.isWorking = false;
}

Appliance.prototype.whatIsIt = function () {
    console.log('This is a ' + this.brand + ' ' + this.type + '.')
}

Appliance.prototype.turnItOn = function () {
    if (this.isWorking === false) {
        this.isWorking = true;
        totalConsumption = totalConsumption + this.consumption;
        console.log(this.brand + ' ' + this.type + ' is turned on.')
    } else {
        this.isWorking = false;
        totalConsumption = totalConsumption - this.consumption;
        console.log(this.brand + ' ' + this.type + ' is turned off.')
    }
}

function PCAppliance(brand,consumption,PCtype) {
    this.type = 'PC',
    this.brand = brand,
    this.consumption = consumption,
    this.PCtype = PCtype
}

PCAppliance.prototype = new Appliance();

function LampAppliance(brand,consumption,lampSize) {
    this.type = 'lamp',
    this.brand = brand,
    this.consumption = consumption,
    this.lampSize = lampSize
}

LampAppliance.prototype = new Appliance();

const appleLaptop = new PCAppliance('Apple MacBook',60,'laptop');

const floorLamp = new LampAppliance('IKEA',15,'floor lamp');

appleLaptop.turnItOn();
console.log(totalConsumption);
appleLaptop.turnItOn();
console.log(totalConsumption);
appleLaptop.turnItOn();
floorLamp.turnItOn();
console.log(totalConsumption);
floorLamp.whatIsIt();


console.log(appleLaptop,floorLamp);