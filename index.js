import { Tareas } from "./tareas.js";
import { renderList } from "./utils.js";
import { Datos } from "./objetos.js";

const usuario = new Tareas();

// const prod1 = new Datos ("Hacer tarea")

// usuario.createTask(prod1)

const  Mensajes = usuario.findAllTasks();

console.log(usuario.findAllTasks())

const parrafo = document.getElementById('warnings')
const formTarea = document.getElementById('form-tarea')
const inputMensajeTarea = document.getElementById('input-mensaje-tarea')


    formTarea.addEventListener( 'submit', (e) => {

        

        let warning = ""

        if(inputMensajeTarea.value == ""){
            warning = `No ingresaste una tarea`
            parrafo.innerHTML = warning
            e.preventDefault()

        } else {

            const mensaje = inputMensajeTarea.value
            const prod = new Datos(mensaje)
            usuario.createTask(prod)
        }

        
        
    })

    


renderList ('lista', Mensajes)

const deleteTarea = document.getElementById('input-delete-tarea')

deleteTarea.addEventListener ('click', (ev) =>{


    let eliminar = ev.target.parentElement;
    let nodopadre = eliminar.parentNode;
    nodopadre.removeChild(eliminar);
})


