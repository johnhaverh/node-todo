require('colors');

const { inquirerMenu, 
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB } = require('./helpers/guardarArchivvo');


const main = async () => {

    let opt='';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu(); //impresión del menu

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:'); 
                tareas.crearTareas(desc);
                break;           
            case '2':
                console.log(tareas.listadoArr);
                break;
        }
        guardarDB(tareas.listadoArr);
        await  pausa();
    } while (opt != '0');

}

main ();


/*

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

// console.clear();

    //    opt = await mostrarMenu();
    
    
    //    if (opt !== '0' ) 

    // 
    // const tarea = new Tarea('Comprar comida');
    // 
 */