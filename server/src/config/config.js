import config from './serve/src/config/config.js';

app.listen(config.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${config.PORT}`);
});
