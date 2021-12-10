const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();
//imprimir tabla del 5

console.log('a')
// const [ , , arg3= "base=5" ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');




crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, 'success' ) )
    .catch( err => console.log(error) );