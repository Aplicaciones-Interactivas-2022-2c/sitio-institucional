const express = require('express')
const app = express()
const port = 4000
const { sequelize } = require('./models/index');
const cors = require('cors')
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// Rutas
app.use(require('./routes'));

app.listen(port, function () {
  console.log(`Listening on http://localhost:${port}!`);

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }

});