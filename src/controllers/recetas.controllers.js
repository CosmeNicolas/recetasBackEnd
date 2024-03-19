import Receta from '../database/models/receta.js'

export const listarRecetas = async(req, res)=>{
    try {
        const recetas = await Receta.find()
        res.status(200).json(recetas)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Erorr al buscar la receta'})
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

export const editarReceta = async(req, res)=>{
    try {
        //verificar si existe la receta
         const recetaBuscada = await Receta.findById(req.params.id)
         if(!recetaBuscada){
             //responder si es correcto
            return res.status(404).json({mensaje: 'No se Encontro la receta a editar'})
         }
        //si el producto existe y sus datos son validados correctamente, actualizamos
        await Receta.findByIdAndUpdate(req.params.id, req.body)
        //responder al usuario 
        res.status(200).json({mensaje: 'Receta editada con exito!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Error interno en la solicitud, no se edito el producto'})
    }
}

export const borrarReceta = async(req, res)=>{
    try {
         const recetaBuscada = await Receta.findById(req.params.id)
         if(!recetaBuscada){
            return res.status(404).json({mensaje: 'No se borró la receta'})
         }
        await Receta.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'Receta borrada con exito!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Error interno en la solicitud, no se edito el producto'})
    }
}
