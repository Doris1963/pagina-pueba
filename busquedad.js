class Buscardor{
constructor(datos){
    this.informacion= datos;
}
 buscar(busquedaUsuario){
  const resultado= this.informacion.filter(info=> info.ventas.toLowerCase()
  .includes(busquedaUsuario.toLowerCase)) 
  return resultado ;
 }
}