const Tarea  = require('./tarea');

class Tareas {

    _listado = {}

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    };


    constructor( ){
        this._listado = {};
    };

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTareas(desc = ''){

        const tarea= new Tarea(desc);
        this._listado[tarea.id] = tarea;
        
    }

    listadoCompleto(){
        console.log();
        this.listadoArr.forEach((tarea, index) => {
            const idx = `${index + 1}`.green;
            const estado = (tarea.completadoEn === null ) ? 'Pendiente'.red : 'Completada'.green;
            console.log(` ${idx}. ${tarea.desc} :: ${ estado }`);
        });
    }

    listarTareasPendientesCompletadas(completadas = true){
        console.log();
        let idx = 0
        this.listadoArr.forEach((tarea) => {
            const estado = (tarea.completadoEn === null ) ? 'Pendiente'.red : 'Completada'.green;

            if (completadas){
                if (tarea.completadoEn){
                    idx++;
                    console.log(` ${idx}. ${tarea.desc} :: ${ estado }`);
                }
            } else {
                if (!tarea.completadoEn){
                    idx++;
                    console.log(` ${idx}. ${tarea.desc} :: ${ estado }`);
                }
            }
        });
    }



};


module.exports = Tareas;