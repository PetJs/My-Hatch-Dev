interface shape{
    name: string;
    radius: number;
    area(): number;
}

function calcArea(shape: shape){
    console.log(`The name of the shape is: ${shape.name}`);
    console.log(`The area is ${shape.area()}...`);
    console.log(`The radius is ${shape.radius}`);
}

const circle: shape = {
    name: "Circle",
    radius: 7,
    area():number  {
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
calcArea(circle);



console.log("..............................................");


interface person{
    name: string;
    Age: number;
    talk();
}

class Male implements person{
    name: string;
    Age: number;
    height: number
    
    constructor(height: number){
        this.height= height;
    }

    talk(){
        return "I am a Male"
    }
}

class female implements person{
    name: string;
    Age: number;
    weight: number
    
    constructor(weight: number){
        this.weight= weight;
    }

    talk(){
        return "I am a Female"
    }
}

const Jerry = new Male(187);
Jerry.name = "Jerry";
Jerry.Age = 15;


const Ferry = new female(157);
Ferry.name = "Ferry";
Ferry.Age = 16

console.log(`My name is ${Jerry.name}, I am ${Jerry.Age} years old. My Height is ${Jerry.height}`)
console.log(`${Jerry.talk()}`)


console.log(`My name is ${Ferry.name}, I am ${Ferry.Age} years old. My Weight is ${Ferry.weight}`)
console.log(`${Ferry.talk()}`)





class Pushable {

    sendPushMessage() {
      console.log("Your file has been converted successfully.")
    }
}
  
class Converter {
    push

    constructor() {
        this.push = new Pushable()
    }

    convert() {
        console.log("Converting...")
        return true
    }
}
  
let c1 = new Converter()

c1.convert();
c1.push.sendPushMessage()















