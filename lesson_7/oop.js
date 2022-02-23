
class Transport {
    constructor(color,speed,title) {
        this.color=color;
        this.speed=speed;
        this.title=title;

    }
    start(message){
        console.log(message);
    }
    stop(){
        console.log('STOP')
    }
}

const bmw=new Transport(
    " BLACK",
    10000,
    "BMW B7 v12 6.6 THIRD TURBO"
    )   //  instanse || object  Transport
 console.log(bmw);

class car{
    constructor(
        title,
        color,
        model,
        maxSpeed,
        driveUnit,
        price,
        type,
        speed,
    ) {
    this.title=title;
    this.color=color;
    this.model=model;
    this.maxSpeed=maxSpeed;
    this. driveUnit= driveUnit;
    this. price= price;
    this.type=type;
    this.speed=speed;


    }
    gas(){

    }
}