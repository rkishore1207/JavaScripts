let person1={
    name:"Kishore",
    age:21,

    //one way
    skill:function(mySkill){
        console.log(`Name is ${this.name} and my skill is ${mySkill}`);
    }
}

//another way
let skill = function(mySkill,city){
    console.log(`Name is ${this.name} and my skill is ${mySkill} and my city is ${city}`);
}

let person2 = {
    name:"Gokul",
    age:21
}

// person1.skill("JavaScript");
skill.call(person2,"React","Chennai");
skill.apply(person2,[".NET","Coimbatore"]); //apply-> only difference is passing arguments as array
let variable = skill.bind(person1,"SQL","Mumbai"); //storing the function in another variable
variable();