// Your code here
class Dog{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
   speak = () => `${this.name} says Woof!`
}

class Cat{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    speak = () => `${this.name} says Meow!`
}

class Bird{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
  speak = () => {
    if(this.sex ==="male"){
        return `It's me!${this.name} the parrot!`
    }
    else{
        return `${this.name} says squack!`
    }
  }
}