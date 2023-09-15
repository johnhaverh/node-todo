require('colors');

const { inquirerMenu, 
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB,
        leerDB
} = require('./helpers/guardarArchivo');


const main = async () => {

    let opt='';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu(); //impresión del menu
    
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:'); 
                tareas.crearTareas(desc);
                break;           
            case '2':
                //console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;           
            case '3':
                //console.log(tareas.listadoArr);
                tareas.listarTareasPendientesCompletadas(true);
                break;           
            case '4':
                //console.log(tareas.listadoArr);
                tareas.listarTareasPendientesCompletadas(false);
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