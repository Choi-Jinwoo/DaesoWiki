const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = require('./router');

app.use('/static', express.static('public'));
app.use(authMiddleware);
app.use('/api', router);

app.listen(8000, () => {
  console.log("start");
});