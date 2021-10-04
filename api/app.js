const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const errorController = require('./app/shared/errorHandler/controllers/error.controller');

const accountMicroService = require('./app/account/accountMicroService.route');
const dictionaryMicroService = require('./app/dictionary/dictionaryMicroService.route');
const dataRoute = require('./app/lab/labMicroService.route');

// const requestLoop = require('./app/lab/controllers/getLabDataRequest');

dotenv.config({ path: './environments/dev.env' });
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mongooseConnect = require('./helpers/dbConnect');

mongooseConnect.dbConnect(process.env.NODE_ENV).on('error', (err) => console.log('connection to db failed'));

app.use('/api/account', cors(), accountMicroService);
app.use('/api/dictionary', cors(), dictionaryMicroService);
app.use('/api/lab/data', cors(), dataRoute);

app.use(errorController);
app.listen(PORT, () => console.log('Server is up!'));

// requestLoop;

module.exports = app;
