let names = [];
let families = [];
let fullNames = [];

console.info('Hello World');
console.error('Hello Error');
console.log('Hello log');
console.dir('hello dir');

function Position(firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
}

Position.prototype.fullName = function() { return `${this.firstName} ${this.lastName}` }

const newPost = new Position('Theodor', 'Abo-Mansour', 'CEO');

console.log(newPost);
