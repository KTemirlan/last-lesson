 class Transport {
    constructor(name,length, weight, color) {
        this.name = name
        this.length = length
        this.weight = weight
        this.color = color
    }
}

class Car extends Transport {
    constructor(name, length, weight, color, model, engine, speed) {
        super(name, length, weight, color);
        this.model = model
        this.engine = engine
        this.speed = speed
    }

    startEngine () {
        console.log(this.model)
        console.log(this.engine)
        console.log(this.speed)
    }

}

const car = new Car ("BMW", 5.5, "1.5тонн", "black",
    "X7", "800 лошадиных сил", "420 км/ч")
console.log(car)
car.startEngine()



class Plane extends Transport {
    constructor(name, length, weight, color, model, speed, height) {
        super(name, length, weight, color);
        this.model = model
        this.speed = speed
        this.height = height
    }
    startEngine () {
        console.log(this.model)
        console.log(this.speed)
        console.log(this.height)
    }
}

const plane = new Plane ("Airbus", 10.20, "5 тонн", "white",
    "A321", "685 км/ч", 3.35)
console.log(plane)

