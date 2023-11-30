class Animal{
    constructor(_name,_type){
        this.name=_name;
        this.type=_type;
    }

}

Animal.prototype.welcome=function(){
    console.log(`Name ${this.name} and type is ${this.type}`);
} // this will automatically connect to every object that we were created

let animal1 = new Animal("lion","wild");

let animal2 = new Animal("dog","domestic");

console.log(animal1);
console.log(animal2);
animal2.welcome();

