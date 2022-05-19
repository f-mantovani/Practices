"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const app = express();
// number type
const PORT = 3000;
// string
const database = process.env.MONGO_URI;
// array
// let simpleArray: number[] = [1, 2, 3, 4]
// mongoose connection
mongoose.connect(database);
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
(0, crmRoutes_1.default)(app);
// serving static files
app.use(express.static('public'));
app.get('/', (req, res) => res.send(`Node and express server is running on port ${PORT}`));
app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
