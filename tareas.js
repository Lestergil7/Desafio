export class Tareas{

    constructor( lista ) {
       lista = this.lista = JSON.parse(localStorage.getItem('tareas')) || [];
    }

    findAllTasks() {
        
        return this.lista;
    }

    createTask( tarea ) {
        
        this.lista.push( tarea )
        localStorage.setItem( 'tareas', JSON.stringify (this.lista) )
    
    }

    
}