// imports
import first from './first/first';
import second from './second/second';
import third from './third/third';
import fourth from './fourth/fourth';

window.addEventListener('load', () => {
    first();
    // console.log(first.anotherProperty);

    let petty = new second('Myha');
    // petty.myName();

    third();
    fourth();
}, false);
