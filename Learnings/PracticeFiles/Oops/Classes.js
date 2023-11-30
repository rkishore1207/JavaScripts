class Person{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }

    welcome(){
        console.log(`Name is ${this.name} and Age is ${this.age}`);
    }
}

let person1=new Person("Kishore",21);

console.log(person1);
person1.welcome();