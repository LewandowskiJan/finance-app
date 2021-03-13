const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const checkConnectionRoute = require('./app/routes/checkConnection.route');
const accountRoute = require('./app/routes/account.route');

const categoryRoute = require('./app/routes/category.route');
const eventRoute = require('./app/routes/event.route');
const expensesGroupRoute = require('./app/routes/expensesGroup.route');
const productRoute = require('./app/routes/product.route');
const projectRoute = require('./app/routes/project.route');
const targetRoute = require('./app/routes/target.route');
const typeRoute = require('./app/routes/type.route');

dotenv.config({ path: './environments/dev.env' });

const database = process.env.DATABASE_URL;
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(database, {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

let db = mongoose.connection;

db.once('open', function () {
  console.log('Connected to MongoDB');
});

db.on('error', function (error) {
  console.log(error);
});

app.use('/api/account', cors(), checkConnectionRoute);
app.use('/api/account/account', cors(), accountRoute);

app.use('/api/dictionary/category', cors(), categoryRoute);
app.use('/api/dictionary/event', cors(), eventRoute);
app.use('/api/dictionary/expenses-group', cors(), expensesGroupRoute);
app.use('/api/dictionary/product', cors(), productRoute);
app.use('/api/dictionary/project', cors(), projectRoute);
app.use('/api/dictionary/target', cors(), targetRoute);
app.use('/api/dictionary/type', cors(), typeRoute);

app.listen(PORT, () => console.log('Server is up!'));
