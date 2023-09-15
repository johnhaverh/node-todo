require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    let opt='';

    do {
        opt = await inquirerMenu();
        //console.log(tareas);
        await  pausa();
    } while (opt != '0');

}

main ();


/*

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

// console.clear();

    //    opt = await mostrarMenu();
    
    
    //    if (opt !== '0' ) 

    // const tareas = new Tareas();
    // const tarea = new Tarea('Comprar comida');
    // tareas._listado[tarea.id] = tarea;
 */