const express = require("express");
const routes = require('./route/route');
const app = express();
const port = process.env.PORT || 8080;

app.use('/', routes);

app.listen(port, () => {
    console.log("Server is up and running")
})