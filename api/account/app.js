const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const errorController = require('./app/errorHandler/controllers/error.controller');

const checkConnectionRoute = require('./app/routes/checkConnection.route');
const accountRoute = require('./app/routes/account.route');
const transferRoute = require('./app/routes/transfer.route');
const transferLineRoute = require('./app/routes/transferLine.route');
const balanceHistoryRoute = require('./app/routes/balanceHistory.route');

const categoryRoute = require('./app/routes/category.route');
const eventRoute = require('./app/routes/event.route');
const expensesGroupRoute = require('./app/routes/expensesGroup.route');
const productRoute = require('./app/routes/product.route');
const projectRoute = require('./app/routes/project.route');
const targetRoute = require('./app/routes/target.route');
const typeRoute = require('./app/routes/type.route');

dotenv.config({path: './environments/dev.env'});
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const mongooseConnect = require('./helpers/dbConnect');

mongooseConnect.dbConnect(process.env.NODE_ENV).on('error', (err) => console.log('connection to db failed'));

app.use('/api/account', cors(), checkConnectionRoute);
app.use('/api/account/account', cors(), accountRoute);
app.use('/api/account/transfer', cors(), transferRoute);
app.use('/api/account/transferline', cors(), transferLineRoute);
app.use('/api/account/balanceHistory', cors(), balanceHistoryRoute);

app.use('/api/dictionary/category', cors(), categoryRoute);
app.use('/api/dictionary/event', cors(), eventRoute);
app.use('/api/dictionary/expensesgroup', cors(), expensesGroupRoute);
app.use('/api/dictionary/product', cors(), productRoute);
app.use('/api/dictionary/project', cors(), projectRoute);
app.use('/api/dictionary/target', cors(), targetRoute);
app.use('/api/dictionary/type', cors(), typeRoute);

app.use(errorController);
app.listen(PORT, () => console.log('Server is up!'));

module.exports = app;
