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
    }
];

// JSON.stringify() converts literal objects to JSON format.
const ownerJSON = JSON.stringify(owner);
console.log(ownerJSON);

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

