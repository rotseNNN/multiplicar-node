//Requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`archivos/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`${base}.txt`.green);
        });
    });
}

let listarTabla = (base, limite) => {
    console.log('||||||||||||||||||||||||||||||||||||||'.green);
    console.log(`|||||||||||||TABLA DEL ${base}|||||||||||||`.green);
    console.log('||||||||||||||||||||||||||||||||||||||'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}x${i}=${i*base}`);
    }
}
module.exports = {
    crearArchivo,
    listarTabla
}