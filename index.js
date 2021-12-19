import { Tareas } from "./tareas.js";
import { renderList } from "./utils.js";
import { Datos } from "./objetos.js";

const usuario = new Tareas();

// const prod1 = new Datos ("Hacer tarea")

// usuario.createTask(prod1)

const  Mensajes = usuario.findAllTasks();

console.log(usuario.findAllTasks())

const formTarea = document.getElementById('form-tarea')
const inputMensajeTarea = document.getElementById('input-mensaje-tarea')


    formTarea.addEventListener( 'submit', () => {

        const mensaje = inputMensajeTarea.value
        const prod = new Datos(mensaje)
        usuario.createTask(prod)
    })

    


renderList ('tareas-lista', Mensajes)


