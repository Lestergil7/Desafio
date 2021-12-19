export class Usuarios{

    constructor( lista ) {
       lista = this.lista = JSON.parse(localStorage.getItem('usuarios')) || [];
    }

    findAllUser() {
        
        return this.lista;
    }

    createUser( user ) {
        
        this.lista.push( user )
        localStorage.setItem( 'usuarios', JSON.stringify (this.lista) )
    }

}

