/**const  nombre = document.getElementById('nombre').value
const  errorName=document.getElementById('errorName')
function envia(){
   if(nombre==='') {
    errorName.textContent='ingresa tu nombre'
    
}else{
    errorName.textContent=''
}

}
console.log(envia);*/
function validar(evento){
    evento.preventDefault();
    const miNombre=document.getElementById('idNombre').value;
    const  miDireccion=Document.getElementById('idDireccion').value;
    const  miCorreo=Document.getElementById('idCorreo').value;

 const miObjeto=new Formulario(miNombre,miDireccion,miCorreo);

    miObjeto.validarNomnbre;
    miObjeto.validarDireecion;
    miObjeto.validarCorreo;
     console.log(evento,evento);

}
