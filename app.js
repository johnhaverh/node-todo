require('colors');

const { inquirerMenu, 
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
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
                tareas.listadoCompleto();
                break;           
            case '3':
                tareas.listarTareasPendientesCompletadas(true);
                break;           
            case '4':
                tareas.listarTareasPendientesCompletadas(false);
                break;            
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;            
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id != '0'){
                    const ok = await confirmar('¿Seguro que deseas borrar esta tarea?');
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente..');
                    }
                }
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