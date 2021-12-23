// export const renderList = (listaId, list) => {

//     const listaContainer = document.getElementById( listaId )

//     for ( const item of list ) {

//         const itemList = document.createElement('div')
//         itemList.setAttribute('class', "task")

//         itemList.innerHTML = `
//                               <p class="text"> ${item.mensaje} </p>
//                               <button type="button"  class= " input-delete-tarea deleteButton roundBorder" >Eliminar</button>
//                              `

//         listaContainer.appendChild( itemList )

//     }

// }

export const renderList = (listaId, list) => {

    const listaContainer = document.getElementById( listaId )
    let count = 0

    for ( const item of list ) {

        const itemList = document.createElement('div')
        itemList.setAttribute('class', "task")
        
        let id = 'input-delete-tarea' + count
        

        itemList.innerHTML = `
                              <p class="text"> ${item.mensaje} </p>
                               <button type="button" id="${id}" onclick="eliminarTarea()" class= " deleteButton roundBorder" >Eliminar</button>
                              
                                  
                             `

        listaContainer.appendChild( itemList )
        count++

    }

    
}

