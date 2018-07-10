const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

//let base = '5';

let comando = argv._[0];
console.log(comando);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>
                console.log(`Archivo Creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando invalido');


}
// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(`${argv.base} ${argv.limite} `);