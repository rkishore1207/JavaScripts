class Person{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }

    welcome(){
        console.log(`Name is ${this.name} and Age is ${this.age}`);
    }
}

class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age);
        this.classStrength=_classStrength;
    }
}

class Student extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age);
        this.cgpa=_cgpa;
    }
}

let student= new Student("Gokul",22,9.4);
let teacher= new Teacher("Mathan",22,30);

console.log(student);
console.log(teacher);

student.welcome();
