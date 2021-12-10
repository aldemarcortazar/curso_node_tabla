const fs = require('fs');
const colors = require('colors');


const crearArchivo = ( base = 10, listar = false, hasta= 10 ) => {

    console.log('===================');
    console.log(`   Tabla del ${ colors.bgYellow( base ) }   `);
    console.log('===================');
    
    

    return new Promise( (resolve, reject) => {

        try{

            let salida  = '';
            let consola = '';

            for( let i =1; i <= hasta; i++ ){
                salida += `${ base } x ${ i } = ${ base * i } \n`;
                consola += `${ colors.bold(base) } ${ colors.bgCyan('x') } ${ i } = ${ base * i } \n`;
            }
            
            fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

            if( listar ) console.log( salida );

            resolve( `tabla-${base}.txt`);

        }catch( err ){
            reject( err );
        }

    });

}


module.exports = {
    crearArchivo
}















// fs.writeFile( `tabla-${ base }.txt`, salida, ( err ) => {
    
    //     if( err ) throw err;
    
    //     console.log(`tabla-${ base } creada`);
    // });