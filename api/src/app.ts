import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { load } from 'ts-dotenv';

import { dbConnect, dbClose } from './helpers/db-connect';
import { errorController } from './app/shared/error-handler/controllers/error.controller';

import { CheckConnectionRoute } from './test/check-connection/check-connection.route';
import { AccountMicroServiceRoute } from './app/account/account-micro-service.route';
import { DictionaryMicroServiceRoute } from './app/dictionary/dictionary-micro-service.route';
import { LabMicroServiceRoute } from './app/lab/lab-micro-service.route';

const env = load({
  NODE_ENV: ['production' as const, 'development' as const, 'test' as const],
  PORT: Number,
});

const app = express();
const PORT = env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dbConnect(env.NODE_ENV).on('error', (error: any[]) => console.log('connection to db failed', error));

app.use('/api/checkConnection', cors(), CheckConnectionRoute);
app.use('/api/account', cors(), AccountMicroServiceRoute);
app.use('/api/dictionary', cors(), DictionaryMicroServiceRoute);
app.use('/api/lab', cors(), LabMicroServiceRoute);

app.use(errorController);
app.listen(PORT, () => console.log('Server is up!'));

export const myApp = app;
