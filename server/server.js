import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.router.js';

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express()
app.use(express.json());
app.use(cors());
app.use('/posts', postRoutes )

app.listen(`${PORT}`, console.log(`Server on http://localhost:${PORT}`));