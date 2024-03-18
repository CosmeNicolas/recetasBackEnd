import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required: true,
        minLength: 2,
        maxLength:150,
        unique:true
    },
    ingrediente1:{
        type:String,
        minLength:2,
        maxLength:150,
    },
    ingrediente2:{
        type:String,
        required:true,
        minLength:2,
        maxLength:150,
    },
    ingrediente3:{
        type:String,
        required:true,
        minLength:2,
        maxLength:150,
    },
    ingrediente4:{
        type:String,
        required:true,
        minLength:2,
        maxLength:150,
    },
    ingrediente5:{
        type:String,
        required:true,
        minLength: 2,
        maxLength:150,
    },
    imagen:{
        type:String,
        required:true,
        validate: {
            validator: (valor)=>{
                return /\.(jpg|jpeg|png|gif)$/i.test(valor)
            },
            message: dato => `${dato.value} no es una URL de imagen valida`
        }
    },
    categoria:{
        type:String,
        required:true,
        enum: ['saludables', 'carne', 'cerdo', 'pollo', 'pastas', 'dulce', 'salado', 'bebidas', 'pescadoYmariscos']
    },
    preparacion:{
        type:String,
        required:true,
        minLength: 3,
        maxLength:1000,
    }
})

const Receta = mongoose.model('receta', recetaSchema)

export default Receta