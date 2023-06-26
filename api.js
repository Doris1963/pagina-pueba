/*es una altermativa para guarda la informacion y compartir la imformacion de un usuario . para consultar la informacion 
fetch Api es una altermatva para consumir o compartir a imforacion  ingteracion con un codioo en la api se euarda la informacion de un usuaio 
api contenedor para los datos */

/*api fetch inter actura con los datos 

los ferch se necesita las siguientes opeciones
las terfases se tiene a repetir y se necesitan con fech se necesita
Headers
requests
Response

se necesita para hacer las peticion el metodo fech  

fetch() tiene los siguentes parametros 
input  es una url que se pasa con como estring 
request Infinity
promise reposne 
vamos a la API  GRATIS 
VAMOS A CONSUMIR UNA API MOQUADA 
JASON PLACEHOLDER ES UNA PAGINA NOS BRINDA API DE PRUEBA
APARECE UNOS RECURSOS  Y SE DEBE HACER CUANDO SE TENGA UNA API

RECURSOS 
POTSJASON  
DENTRO DE LA PAGINA HAY UNOS RECURSOS COMO EL GET POST tomamos la url del navegador 
*/

console.log ('api')

const callservice=fetch('https://jsonplaceholder.typicode.com/', {
  method: 'POST',
  body: JSON.stringify({
    title: 'prueba',
    body: 'tejidos',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((data)=> data.json())
.catch(error=> console.log(error,'menssaje error'))
.then(respuesta=> console.log ('datos de la respuesta',respuesta))
console.log(callservice,'llamar al servicio')
  





