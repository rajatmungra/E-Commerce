import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/routes.js';

const app = express();
const PORT = 8000;

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/',Routes);

Connection(username,password);
app.listen(PORT, () => {
    console.log(`Server is  running on PORT ${PORT}`);
});
//Default data to database
DefaultData();

 
