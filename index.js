require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

//set up for future deployment:
let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.use(cors());
app.use(express.static('public'));

app.listen(port, () => console.log(`proxy server on ${port} is here!`));
