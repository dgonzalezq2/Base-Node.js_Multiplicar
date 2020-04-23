const fs = require('fs');
const colors = require('colors');

//let base = 2;

let listarTabla = (base, limite = 10) => { //Valor por defecto 10 si no se recibe un limite de consola
    if (!Number(base)) {
        console.log(`El valor de la base ${base} no es válido`);
        return
    }

    console.log("==============================".green);
    console.log(`TABLA DE MULTIPLICAR ${base}`.green);
    console.log("==============================".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es válido`);
            return
        }


        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => { //Se realiza un callback, flag : a permite sobrescribir información
            if (err)
                reject(err);
            else
                resolve(`El archivo de la tabla del ${base} al ${limite} ha sido guardado!`)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

//Transformar esta función en async y await
//Al aplicar el comando npm .... --save agrega ese paquete a node_modules