require('colors');


const { inquirerMenu, pausa } = require('./helpers/inquirer');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

    let opt=';'
    do {
    //    opt = await mostrarMenu();
    opt = await inquirerMenu();
    //    if (opt !== '0' ) 
    await  pausa();
    } while (opt != '0');

}

main ();