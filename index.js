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








$("#lista").on("click",".task",
  function(objeto){
      $(objeto.target).parent().remove()

      localStorage.removeItem('tareas','mensaje')
  }


)

(function(){

    var actualizarFecha = function(){

        var fecha = new Date(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            año = fecha.getFullYear();


        var pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pAño = document.getElementById('año');


        var semana = ['d o m i n g o', 'l u n e s', 'm a r t e s', 'm i e r c o l e s', 'j u e v e s', 'v i e r n e s', 's a b a d o']
        pDiaSemana.textContent = semana[diaSemana];

        var meses = [ 'ENE', 'FEB', 'MAR', 'ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DEC']
        pMes.textContent = meses[mes];

        pAño.textContent = año;

        pDia.textContent = dia;

    };

  actualizarFecha();

}())




