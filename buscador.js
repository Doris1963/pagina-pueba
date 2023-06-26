function realizarBusqueda() {
    const infoInput=document.getElementById('buscador').value
    const datos=[
        {
            linK:'',
            titulo:'clases',
        },
        {
            linK:'',
            titulo:'ventas de insumos',
        },
        {
            linK:'',
            titulo:'Venta proyectos',
        }
    ]
       
        const buscador= new Buscador(datos);
        const resultado=buscador.buscar(infoInput)
        mostrarInformacion(resultado);

}

function mostrarInformacion(informacion){
    const divMostrarInfo=document.getElementById('listadodBusqueda')
    for(let i=0; i<informacion.length ; i++){
        const objeto= informacion[i];
        const linK=document.createEvent('a');
        linK.textContext=objeto.titulo;
        linK.href=objeto.linK;
       divMostrarInfo.appendchild(linK)
    }
}
