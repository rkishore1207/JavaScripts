function Person(_name,_age){
    var name=_name;
    this.age=_age;

    this.getName=function(){ //encapsulated the name property
        return name;
    }
}

let person1=new Person("Kishore",21);

// person1.name="Ramesh";
console.log(person1.getName());