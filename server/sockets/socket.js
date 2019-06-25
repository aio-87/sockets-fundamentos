const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado.');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /* 
                if (mensaje.usuario) {
                    callback({
                        mensaje: 'TODO SALIÓ BIEN.'
                    });
                } else {
                    callback({
                        mensaje: 'TODO SALIÓ MAL!!!!'
                    });
                }
        */
    });
});