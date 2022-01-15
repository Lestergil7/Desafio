

// const deleteTarea = document.getElementById('input-delete-tarea'  )

// deleteTarea.addEventListener ('click', (ev) =>{

//     let eliminar = ev.target.parentElement;
//     let nodopadre = eliminar.parentNode;
//     nodopadre.removeChild(eliminar);
// })



// export const renderList = (listaId, list) => {

//     const listaContainer = document.getElementById( listaId )
//     let count = 0

//     for ( const item of list ) {

//         const itemList = document.createElement('div')
//         itemList.setAttribute('class', "task")
        
//         let id = 'input-delete-tarea' + count
        

//         itemList.innerHTML = `
//                               <p class="text"> ${item.mensaje} </p>
//                                <button type="button" id="${id}" onclick="eliminarTarea()" class= " deleteButton roundBorder" >Eliminar</button>
                              
                                  
//                              `

//         listaContainer.appendChild( itemList )
//         count++

//     }

    
// }

// function eliminarTarea(){

//     let eliminar = ev.target.parentElement;
//     let nodopadre = eliminar.parentNode;
//     nodopadre.removeChild(eliminar);
// }    