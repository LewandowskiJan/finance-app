const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const checkConnectionRoute = require('./app/routes/checkConnectionRoute.route');
const dotenv = require('dotenv');
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

app.listen(PORT, () => console.log('Server is up!'));
