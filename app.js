// class Person {
//   name = 'Max';

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(`Hi, I am ${this.age} and my name is ${this.name}.`);
//   }
// }

function Person() {
  this.age = 30;
  this.name = 'Jeff';
  this.greet = function() {
    console.log(`Hi, I am ${this.age} and my name is ${this.name}.`);
  };
}

const person = new Person();
person.greet();
