class Usuarios{

    constructor( lista ) {
        this.lista = lista;
    }

    findAllUser() {
        
        return this.lista;
    }

    createUser( user ) {
        
        this.lista.push( user )
    }

    findOneByIdUser( userId ) {
       
        const user = this.lista.find( element => element.id === userId )

        if ( !user ) {
            throw new Error('No existe el user id:' + userId)
        }

        return user;
    }
}

class Datos {

    constructor(id,nombre, apellido, telefono,mensaje) {
        this.id = id;
        this.nombre  = nombre;
        this.apellido = apellido;
        this.telefono = parseInt(telefono);
        this.mensaje = mensaje;
    
        
    }
    saludar() {
        console.log("Bienvenida a Nani's Beauty" + this.nombre)
    }
    
}
const datos1 = new  Datos ("1","Maria", "Heredia", "1124025258","me gustaria mas informacion");
const datos2 = new  Datos ("2","Gabriela", "Diaz", "1164259638" , "tienes redes sociales?");
const datos3 = new  Datos ("3", "Camila","Curcio","1173631253", "que pagina tan linda") 

const usuario = new Usuarios ([]);

usuario.createUser(datos1);
usuario.createUser(datos2);
usuario.createUser(datos3);


datos1.saludar();
datos2.saludar();
datos3.saludar();


console.log(usuario.findAllUser());
// console.log(usuario.findOneByIdUser());