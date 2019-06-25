var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos Conexión con el servidor.');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jairo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Mensaje Server:', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});