// IF/ELSE conditionals
const x = 13;
const y = 3;

if(x === 5) {
    console.log(`IF/ELSE conditionals is correct`);
} else {
    console.log(`IF/ELSE conditionals is discorrect`);
}

// IF/THEN/ELSE consitionals
const ageTest = x >= 18 ? `This person is old enough to drive.` : `This person is not allowed to drive.`;
console.log(ageTest);

// switches conditionals
switch(true) {
    case (x < 21 && x >= 14):
        console.log(`This person cannot drink alcohol.`);
        break;
    case (x >= 21):
        console.log(`This person can drink alcohol`);
        break;
    default:
        console.log(`This person is a baby and can drink milk`);
        break;
}

// functions
function totalistic(num1) {
    return num1 * 5;
}

console.log(`Basic functions give: ${totalistic(5)}`);

// arrow function ES6
const totalistic2 = num1 => num1 * 5;
console.log(`Arrow functions can do this: ${totalistic2(5)}`);

// Arrays
const cars = ['KIA', 'BMW', 'Mercedes', 'Volvo', 'Honda', 'Suzuki'];

// Object Literals
const owner = [
    {
        firstName: 'Theodor',
        lastName: 'Abi-Mansour',
        age: 38,
        hobbies: ['football', 'basketball', 'video games', 'movies'],
        available: true,
        location: {
            country: 'Lebanon',
            city: 'Beirut',
            street: 'Armenia street',
            building: 'Kalanjian building, 4th floor'
        }
    },
    {
        firstName: 'Andrew',
        lastName: 'Abi-Mansour',
        age: 36,
        hobbies: ['football', 'science', 'video games', 'food'],
        available: false,
        location: {
            country: 'United States',
            city: 'New York',
            street: 'NYC',
            building: 'building 231'
        }
    },
    {
        firstName: 'Scarlett',
        lastName: 'Abi-Mansour',
        age: 29,
        hobbies: ['teaching', 'hanging-out', 'daisy', 'food'],
        available: true,
        location: {
            country: 'Lebanon',
            city: 'Beirut',
            street: 'Achrafieh, Geitawi',
            building: 'chouchan building, 2nd floor'
        }
    }
];

// JSON.stringify() converts literal objects to JSON format.
const ownerJSON = JSON.stringify(owner);
console.log(ownerJSON);

// foreach
owner.forEach(function(own){
    console.log('this is me: ' + own.firstName);
});

// for loop
for(let i=0;i<=5;i++){
    console.log(`For loop number: ${i}`);
}

for(let own of owner) {
    console.log(own.firstName);
}

// while loop
let i = 0;
console.log(`length is ${owner.length}`);
while(i <= owner.length) {
    console.log(`While loop number `);
    i++;
}

// map loop
const own1 = owner.map(function(own){
    return own.firstName + ' is ' + own.age + ' years old.';
});
console.log(own1);

// filter loop
const own2 = owner.filter(function(own){
    return own.available === true;
});
console.log(own2);

// filter 2 loop
const own3 = owner.filter(function(own){
    return own.available === true;
}).map(function(own){
    return own.firstName + ' is ' + own.age + ' years old.';
});
console.log(own3);

// Classes
class TheBoss {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `This is a prototype in a class: ${this.firstName} ${this.lastName}`;
    }
}

const boss1 = new TheBoss('Theodor', 'Abi-Mansour', '01-01-1984');
console.log(boss1.getFullName());

