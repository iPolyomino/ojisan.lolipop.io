'use strict';

const express = require('express');
const app = express();

const index = require("./routes/index");

app.use(express.static(__dirname + '/view'));
app.use("/", index);

module.exports = app;
