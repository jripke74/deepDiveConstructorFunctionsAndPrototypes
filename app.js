// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
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

Person.describe = function() {
  console.log('Creating persons...');
}

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

Person.prototype.printAge = function() {
  console.log(this.age);
};

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person)
console.log(person.toString());
const p2 = new person.__proto__.constructor();
console.dir(Object.prototype.__proto__);
