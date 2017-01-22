// classes
export default class Pet {
    constructor(name) {
        this.name = name;
    }

    myName() {
        console.log(this.name);
    }
}

// default params
let deffy = (a = 1) => {
    console.log(a);
    return a;
};

// deffy(2);
// deffy();

// template literals
// let string = `This is: ${deffy(4)}!
//               Awesome!`;
// console.log(string);

// spread operator
// console.log(...[1, 2, 3]);

// Symbol
var s0 = Symbol();
var s1 = Symbol('ab');
var s2 = Symbol('ab');

// console.log('s0', s0);
// console.log('s1', s1);
// console.log('s2', s2);
//
// console.log('s0 == s1', s0 == s1);
// console.log('s1 === s2', s1 === s2);
// console.log('s1 == s2', s1 == s2);
// console.log('s1 === s1', s1 === s1);
