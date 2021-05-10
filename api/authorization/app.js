const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const checkConnectionRoute = require('./app/routes/checkConnectionRoute.route');
const dotenv = require('dotenv');
dotenv.config({ path: './environments/dev.env' });

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mongooseConnect = require('./helpers/dbConnect');

mongooseConnect.dbConnect(process.env.NODE_ENV).on('error', (err) => console.log('connection to db failed'));

app.use('/api/authorization', cors(), checkConnectionRoute);

app.listen(PORT, () => console.log('Server is up! '));
