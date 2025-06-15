import express from 'express'
import cors from 'cors'
import {authRouter} from './routes/auth.route.js';
import {packagesRouter} from './routes/packages.route.js';
import cookieParser from 'cookie-parser'
import { destinationRouter } from './routes/destination.route.js';

const app = express()
const allowedOrigins = [`${process.env.FRONTEND_URL}`, '*']

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: allowedOrigins}))

app.get('/', (_,res) => {
    res.send("API Working")
})

//API Endpoint 
app.use('/api/auth', authRouter)
app.use('/api/pack', packagesRouter)
app.use('/api/dest', destinationRouter)

export default app