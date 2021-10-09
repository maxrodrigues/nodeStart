const express = require("express");
const app = express();

// ROTAS CARREGADAS
const index = require("./routes/index");
const products = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", index);
app.use("/products", products);

module.exports = app;
