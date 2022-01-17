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




// $(document).ready(function() {
//     $("#input-delete-tarea").on('click',function(){
//         $(".task").remove()
//     })

// })


// $(document).ready(function() {
//     $("#lista").on('click',function(){
//         $("#input-delete-tarea").parent().remove()
//     })

// })

$("#lista").on("click",".task",
  function(objeto){
      $(objeto.target).parent().remove()

      localStorage.removeItem('tareas','mensaje')
  }


)

// function storage () {

//     localStorage.removeItem('tareas','mensaje')
// }
      
// storage()





