const express = require('express');
const path = require('path');
const cors = require('cors');

class Express {
  constructor() {
    this.express = express();

    this.configureServer();
    this.configureRoutes();
  }

  configureServer() {
    this.express.use(cors());
    this.express.use(express.static('public'));
  }

  configureRoutes() {
    this.express.use('/printer', require('./routes/printer'));
    this.express.use('/', express.static(path.join(__dirname, 'public')));
  }
}

module.exports = new Express().express;
