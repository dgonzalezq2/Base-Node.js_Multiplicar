var colors = require('colors/safe');
const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js'); //Se usó el concepto de destructuración

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        //console.log(`Hay que listar`);
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => console.log(colors.red(err)));
        break;
    default:
        console.log('Comando no válido !!!!');
}


//git init comienza la interacción con el repositorio local
//git status expresa el estadp del repositorio local
//

//console.log(argv.base);

// let base = process.argv[2].split('=')[1];

// crearArchivo(base).then(mensaje => console.log(mensaje))
//     .catch(err => console.log(err)) //shift + alt + a para comentar multilineas o más pronto ctrl + k + c

//console.log(process.argv);


//multiplicar.crearArchivo()

//const fs = require('fs');

//let base = 2;
//let data = '';

//for (let i = 1; i <= 10; i++) {
//data += `${base} x ${i} = ${base * i}\n`;
//}

//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //Se realiza un callback, flag : a permite sobrescribir información
//  if (err) throw err;
//console.log(`El archivo de la tabla del ${base} ha sido guardado!`);
//});

//console.log(module);