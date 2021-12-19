export const renderList = (listaId, list) => {

    const listaContainer = document.getElementById( listaId )

    for ( const item of list ) {

        const itemList = document.createElement('p')


        itemList.innerHTML = `<span>
                                  <strong> 
                                      ${ item.mensaje } 
                                  </strong>
                              </span>`

        listaContainer.appendChild( itemList )

    }

}