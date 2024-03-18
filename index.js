import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import recetasRouter from './src/routes/recetas.routes.js'
import './src/database/database.js'
//1- configurar un puerto (express)

const app = express();
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto'+ app.get('port'))
})
//2- configurar los middleware, se ejecuta antes de las rutas 
//configuramos cors
app.use(cors())
//config morgan, nos da info extra en la terminal
app.use(morgan('dev'))
//faltan middleware json
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const __filename = fileURLToPath(import.meta.url)
console.log(__filename)
const __dirname = path.dirname(dirname(__filename))
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public')))


//3- configurar las rutas 
//http://localhost:3000/productos
app.use('/api', recetasRouter)

/* app.get('/',(req, res)=>{
    console.log('procesando una solicitud get')
    res.send('respuesta funcionando ')
}) */