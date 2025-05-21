import { Router } from 'express';

const router = Router(); // Crea una instancia del Router de Express

// Middleware para el parámetro 'word'
router.param('word', async (req, res , next, word) => {
    
    let searchWord = word; // Asigna el valor del parámetro 'word' a la variable 'searchWord'
    if(!searchWord){ // Si 'searchWord' no tiene valor
        req.word = null; // Asigna null a la propiedad 'word' del objeto 'req'
    }else{ // Si 'searchWord' tiene valor
        req.word = word + " encontrada"; // Asigna el valor de 'word' concatenado con " encontrada" a la propiedad 'word' del objeto 'req'
    }
    next(); // Llama a la siguiente función middleware
})

// Ruta GET para obtener una palabra
router.get('/:word', (req, res) => {
    console.log(req.word); // Imprime el valor de 'req.word' en la consola
    res.send(req.word); // Envía el valor de 'req.word' como respuesta
})


// Ruta PUT para actualizar una palabra
router.put('/:word/:language', (req, res) => {
    console.log(req.params.word); // Imprime el valor del parámetro 'word' en la consola
    res.send(req.params.word); // Envía el valor del parámetro 'word' como respuesta
})

// Ruta DELETE para eliminar una palabra
router.delete('/:word/:language', (req, res) => {
    console.log(req.params.word); // Imprime el valor del parámetro 'word' en la consola
    res.send(req.params.word); // Envía el valor del parámetro 'word' como respuesta
})

export default router; // Exporta el router