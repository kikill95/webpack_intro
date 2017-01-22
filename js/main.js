// imports
import first from './first/first';
import second from './second/second';

// styles
import '../scss/main.scss';

window.addEventListener('load', () => {
    first();
    // console.log(first.anotherProperty);

    let petty = new second('Myha');
    // petty.myName();
}, false);
