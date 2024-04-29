// Funcion tradicional:
function saludar( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre);
}

// Funcion anónima:
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

// Funciones de flecha:
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
// funcion flecha con argumento
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}


saludar('Nerm', 40, true, 'Honduras');
saludarFlecha();
saludarFlecha2('Nerm Developer');
// saludar2('Nerm');

