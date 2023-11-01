// event loop

// El Código en JavaScript es como se dice, de un solo hilo, es decir, se ejecuta una linea, solo sucede una cosa a la vez y  cada que se va completando una, se manda llamar la otra, eso es el loop de eventos, piensa en el, como un while, que va ejcutando tareas mientras haya tareas disponibles

// Un Ejemplo de la vida real seria una fila en el cajero de tu banco, el cajero solamente puede despachar a una persona...

// Pero hay bancos que ofrecen a sus clientes especiales un servicio donde no hacen fila no, en JavaScript hay algo similar, hay eventos que tienen más prioridad que otros..

console.log("1");

setTimeout(function() {
    console.log("6");
}, 0);

console.log("2");

setTimeout(function() {
    console.log("7");
}, 0);

new Promise(function(resolve) {
    resolve("5")
}).then(console.log);

console.log("3");

function hola(){
    console.log('4');
}
hola();

// El Event Loop esta revisando siempre por funciones que ejecutar, esas funciones pasan al stack, y una vez que se ejecutan, entonces comienza ir al queueue y comienza a ejecutar esas funciones...