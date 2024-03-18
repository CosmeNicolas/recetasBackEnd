import Receta from '../database/models/receta.js'

export const listarRecetas = (req, res)=>{
    console.log('aca iran las peticiones de las recetas')
    res.send('Enviando recetas')
}

export const crearReceta = async(req, res)=>{
    try {
        //extraer los datos del body
      
        //validar los datos del body 
        //pedir a la BD crear el producto
        const recetaNueva = new Receta(req.body);
        await recetaNueva.save();
        //responder al frontend
        res.status(201).json(
            {mensaje:'La receta fue creada exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(400).json({mensaje:'La receta no pude ser creada'})
    }
}