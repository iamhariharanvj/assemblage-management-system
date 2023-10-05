import express from 'express';
import { connectDB } from './db/config.mjs';
import dotenv from 'dotenv';
import EventRoutes from './routes/event.mjs';
import ParticipantRoutes from './routes/participant.mjs'
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 4000;

const app = express();
dotenv.config();

const isConnected = await connectDB();
app.use(cors())
app.use(bodyParser.json({limit: '10mb'}))
app.get('/', async(req, res) => {
    res.send("Server is up and running");
})

app.use("/events", EventRoutes)
app.use("/user", ParticipantRoutes)


app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Server is running on http://localhost:${PORT}`);
    }
})