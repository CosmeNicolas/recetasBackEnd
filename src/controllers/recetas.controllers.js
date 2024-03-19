import Receta from '../database/models/receta.js'

export const listarRecetas = async(req, res)=>{
    try {
        const recetas = await Receta.find()
        res.status(200).json(recetas)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Erorr al bsucar el producto'})
    }
}

export const crearReceta = async(req, res)=>{
    try {
        const recetaNueva = new Receta(req.body);
        await recetaNueva.save();
        res.status(201).json(
            {mensaje:'La receta fue creada exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(400).json({mensaje:'La receta no pude ser creada'})
    }
}

export const obtenerReceta = async(req, res)=>{
    try {
        //extraer id 
        console.log(req.params.id)
        //solicitar a la bd ese id
        const recetaBuscada = await Receta.findById(req.params.id)
        //preguntar si no encontre el producto buscado
        if(!recetaBuscada){
            return res.status(404).json({mensaje: 'No se encontro la receta con el id enviado'})
        }
        //enviar respuesta
        res.status(200).json(recetaBuscada)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'No se pudo encontrar el producto solicitado'})
    }
}