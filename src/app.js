const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://balta:e296cd9f@localhost:27017/admin");

// ROTAS CARREGADAS
const index = require("./routes/index");
const products = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", index);
app.use("/products", products);

module.exports = app;
