const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera archivo de la tabla de multiplicar teniendo en cuenta una base y un limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}