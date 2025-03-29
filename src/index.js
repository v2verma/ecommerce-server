import express from 'express';
import router from './routes/index.js';
import {connectDb} from "./db/mongoose.js";
import cors from 'cors';

const app = express();

connectDb();

app.use(express.json())
app.use(cors())
app.use('/api',router);
app.use('/healthcheck', (req, res)=> {
    res.send("server is healthy...")
})

app.listen(process.env.PORT || 6000, ()=> {
    console.log(`Server is up and running on ${process.env.PORT}...`)
})
