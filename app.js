class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = 'Max';

  constructor() {
    this.age = 30;
  }

  greet = () => {
    console.log(`Hi, I am ${this.age} and my name is ${this.name}.`);
  }

  // greet() {
  //   console.log(`Hi, I am ${this.age} and my name is ${this.name}.`);
  // }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Jeff';
// }

// Person.prototype.greet = function() {
//   console.log(`Hi, I am ${this.age} and my name is ${this.name}.`);
// };

// Person.describe = function() {
//   console.log('Creating persons...');
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person)
// console.log(person.toString());
// const p2 = new person.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

// const p = new Person();
// const p2 = new Person();
// console.log(p.__proto__ === p2.__proto__);
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet)

const course = { // new Object()
  title: 'JavaScript - The Complete Guide',
  rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`)
  }
}, {
  name: {
    configurable: false,
    enumerable: true,
    value: 'Jeff',
    writable: false
  }
});

const student = Object.create({
  printProgress: function() {
    console.log(this.progress);
  }
});

student.name = 'Jeff';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

student.printProgress();

course.printRating();
