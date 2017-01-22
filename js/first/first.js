// import from node_modules
import $ from 'jquery';

// exports
module.exports = function() {
    // console.log('first');
    // console.log($('h1'));
};
module.exports.anotherProperty = 'Exported property';

// block-scoped varialbes
function blocked() {
    a = 1;
    var a = 2;

    let b = 3;
    const c = 4;
    for (let d = 0; d < 5; d++) {
      // console.log(d);
    }
    // errors:
    // console.log(d);
    // c = 6;
}

blocked();

// arrow functions
let arrowed = (firstParam, secondParam) => {
    let foo = a => {
        let b = a + 1;
        return b;
    }
    // console.log( foo(1) );

    let boo = c => c + 5;
    // console.log( boo(6) );

};

arrowed();

var obj = {
    field: 1,
    getThis1: function() {
        return this;
    },
    getThis2: () => {
        return this;
    }
};

// console.log('getThis1', obj.getThis1());
// console.log('getThis2', obj.getThis2()); // why? because our webpack compiles in strict mode
