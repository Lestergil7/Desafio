import { Usuarios } from "./usuario.js";
import { renderList } from "./utils.js";
import { Datos } from "./objetos.js";

const usuario = new Usuarios();

const  Mensajes = usuario.findAllUser();

console.log(usuario.findAllUser())

const formUsuario = document.getElementById('form-usuario')
const inputNombreUsuario = document.getElementById('input-nombre-usuario')
const inputApellidoUsuario = document.getElementById('input-apellido-usuario')
const inputMensajeUsuario = document.getElementById('input-mensaje-usuario')

formUsuario.addEventListener('submit', () => {

    const nombre = inputNombreUsuario.value
    const apellido = inputApellidoUsuario.value
    const mensaje = inputMensajeUsuario.value

    const prod = new Datos(  nombre, apellido, mensaje)

    usuario.createUser( prod )
})



renderList ('mensajes-lista', Mensajes)
