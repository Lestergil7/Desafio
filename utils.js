export const renderList = (listaId, list) => {

    const listaContainer = document.getElementById( listaId )
    
    for ( const item of list ) {

        const itemList = document.createElement('div')
        itemList.setAttribute('class', "task")

        itemList.innerHTML = `
                              <p class="text"> ${item.mensaje} </p>
                              <button type="button" id="input-delete-tarea"  class= "deleteButton roundBorder" >Eliminar</button>
                             `

        listaContainer.appendChild( itemList )

    }

}

// export const renderList = (listaId, list) => {

//     const listaContainer = document.getElementById( listaId )
//     let count = 0
    
//     for ( const item of list ) {

//         const itemList = document.createElement('div')
//         itemList.setAttribute('class', "task" + count)

//         itemList.innerHTML = `
//                               <p class="text"> ${item.mensaje} </p>
//                               <button type="button" id="input-delete-tarea"  class= "deleteButton roundBorder" >Eliminar</button>
//                              `

//         listaContainer.appendChild( itemList )
//         count++

//     }
// }





