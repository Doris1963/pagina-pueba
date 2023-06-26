/*function validar(){
    const nombre=document.getElementById('idnombre').value;
    const  direccion0=Document.getElementById('id direccion').valu
}*/


class Formulario {
    constructor(nombre, direccion, correo) {
        this.name = nombre;
        this.direccion = direccion;
        this.correo = correo;
    }
    validarNombre = () => {
        const miMensajeInvalido = document.getElementById('mensajeIvalido');
        const nombreRegex = /^¨[a-zA-Z\s']+$/;
        if (!this.name.match(nomnbreRgex)) {
            alert("nombre invalido");
            miMensajeInvalido.textContent = "favor escriba bien su nombre";
        }
        console.log('valido')
    }

    validarDirreccion = () => {
        const dirreccionRegex = /^¨[a-zA-Z\s']+$/;
        if (!this.name.match(dirreccionRgex)) {
            alert("dirreccion invalido");

        }

    }

    ValidarCorreo = () => {
        const correoRegex = /^¨[^\s@+@[^\S@]+\.[^\S@]+$/;
        if (!this.name.match(correoRegex)) {
            //alert("nombre invalido");
            miMensajeInvalido.textContent = "favor escriba bien su nombre";
        }
      
    }

}