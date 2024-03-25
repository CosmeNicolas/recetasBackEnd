import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import recetasRouter from './src/routes/recetas.routes.js'
import './src/database/database.js'


const app = express();
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto'+ app.get('port'))
})
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const __filename = fileURLToPath(import.meta.url)
console.log(__filename)
const __dirname = path.dirname(dirname(__filename))
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public')))



app.use('/api', recetasRouter)

