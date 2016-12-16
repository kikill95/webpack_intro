import first from './first/first';
import second from './second/second';

// styles
import '../scss/main.scss';

window.addEventListener('load', () => {
    let test = () => {
        console.log('main');
    };
    test();
    
    first();
    second();
}, false);