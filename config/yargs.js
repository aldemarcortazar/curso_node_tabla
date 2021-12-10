
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muestra o no la tabla',
                })
                .option( 'h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    demandOption: true,
                    describe: 'hasta donde vamos a ir con la tabla'
                })
                .check( ( argv ) =>{
                    if( isNaN(argv.base) ){
                        throw 'la base debe ser un numero';
                    }

                    if( isNaN( argv.h ) ){
                        throw 'el hasta debe ser un numero';
                    }

                    if( typeof argv.listar != 'boolean' ){
                        throw 'el argumento listar debe ser true o false';
                    }

                    console.log({ l: argv.l });

                    return true;
                })
                .argv;

module.exports = argv;