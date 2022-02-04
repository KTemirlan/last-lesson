 class Transport {
     constructor(type, name, model) {
         this.type = type;
         this.name = name;
        this.   model = model;
     }
     startEngine(){
        console.log('engine on ${this.name}')
    }
}
  class Car extends Transport {
     constructor(type,name,model,volume,maxSpeed) {
        super(type,name,model);
         this.volume=volume;
         this.maxSpeed=maxSpeed;
     }

  }
  const bmw=new Car("car","BMW","E 34",5.5,480);
 console.log(bmw);

 bmw.startEngine();


