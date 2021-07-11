const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
require('colors')


console.clear();
// const numero = 9;
// const [,,arg3='base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');
 crearArchivo(argv.base, argv.l, argv.h)
 .then(nombrearchivo => console.log(nombrearchivo.rainbow,'creado'))
 .catch(err => console.log(err))

// console.log(process.argv);
//  console.log(argv);
// console.log(argv.base);


