// Following code demonstrates how to use classes (sub/super)
/*
class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers);

class Animal1 {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal1 {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs)

class Animal {

}

class Cat extends Animal {
    constructor() {
        super();
        this.noise = "meow"
    }
}

var result = new Animal();
console.log(result.noise)
*/

/*
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(var key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

const animal = {

canJump: true
        
};
    
const bird =
Object.create(animal);

bird.canFly = true;
    
bird.hasFeathers = true;
    
function birdCan() {
    for (var key of Object.keys(bird)) {
        console.log(key, ':', bird[key])
    }
}

birdCan()

function animalCan() {
    for (var key of Object.keys(bird)) {
        if (bird.hasOwnProperty(key)) {
            console.log(key, ':', bird[key]);
        } else {
            console.log(key, ':', animal[key]);
        }
    }
}
animalCan()

*/

// Used to test the output of set
// Used to test the function of count
/*
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

let food = "Chocolate";
console.log(`My favourite food is ${food}`)

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);

console.log(set)

function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);
*/

// This bit of code must be used 
// inside the example.com domain
// Following code demonstrates how to manipulate the display
// of a page following user input
/*
var h1 = document.querySelector('h1')
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}
h1.addEventListener('click', handleClicks)
*/
// Testing whether or not a function will
// use a global variabl written after it
/*
function scopeTest() {
    var y = 44;

    console.log(x);
}
var x = 33;
scopeTest();
*/
/*
const [a, b] = [1,2,3,4]
console.log(b)
*/
// Testing output for count with a null value
/*
function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null)
*/

// Testing the output using the += operator
// Output: 7

/*
var x = 2;
x += 5;
console.log(x);

*/

// Finding the result of throwing and catching an error
// Output: Circle
/*
try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}
*/

// Testing the output of a var given a value after logging it
// Output: Undefined

/*
console.log(result);
var result = 7;
*/