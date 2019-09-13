const world = require('./world');
console.log('hello ' + world);

import {print, square, world6} from './worldes';
console.log('hello ' + print());
console.log('hello ' + world6);
console.log(square(5));

const power = (arg) => console.log(`${arg} square is equal to: ${square(arg)}`);

power(5);