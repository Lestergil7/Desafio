export const renderList = (listaId, list) => {

    const listaContainer = document.getElementById( listaId )

    for ( const item of list ) {

        const itemList = document.createElement('div')
        itemList.setAttribute('class', "task")

        itemList.innerHTML = `
                              <p class="text"> ${item.mensaje} </p>
                              
                             `

        listaContainer.appendChild( itemList )

    }

}


