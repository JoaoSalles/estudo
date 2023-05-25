#!/usr/bin/env node
import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(xss());

app.use(cors())

app.use(router);

app.listen(process.env.PORT || 4000, () => {
    console.log(`conectado ${process.env.PORT}`)
});