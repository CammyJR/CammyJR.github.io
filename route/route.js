const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');

route
    .get('/api', controller.getQuery);

module.exports = route;