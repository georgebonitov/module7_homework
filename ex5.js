var totalConsumption = 0;

class Appliance {
    constructor (brand,consumption,type) {
        this.type = type,
        this.brand = brand,
        this.consumption = consumption,
        this.description = 'Home appliance',
        this.isWorking = false;
    }
    
    whatIsIt() {
        console.log('This is a ' + this.brand + ' ' + this.type + '.')
    }
    
    turnItOn() {
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
}

class PCAppliance extends Appliance {
    constructor (brand,consumption,PCtype) {
        super(brand,consumption),
        this.type = 'PC',
        this.PCtype = PCtype
    }
}


class LampAppliance extends Appliance {
    constructor (brand,consumption,lampSize) {
        super(brand,consumption),
        this.type = 'lamp',
        this.lampSize = lampSize
    }
}

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