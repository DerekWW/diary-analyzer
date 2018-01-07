const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()

const PORT = process.env.PORT;

const app = express();

app.disable('x-powered-by')

app.get('/', (req, res, next) => {
  res.send("Hello World!")
})


app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
})
