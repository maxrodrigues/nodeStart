"use-strict";

const mongoose = require("mongoose");
const Product = mongoose.model("Product");

// List all products
exports.get = (req, res, next) => {
    Product.find({ active: true }, "title slug price")
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((e) => {
            res.status(400).send({
                message: "Houve um erro ao listar os produto!",
                data: e,
            });
        });
};

// List product by slug
exports.getBySlug = (req, res, next) => {
    Product.findOne(
        {
            slug: req.params.slug,
            active: true,
        },
        "title slug price description tags"
    )
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((e) => {
            res.status(400).send({
                message: "Houve um erro ao listar os produto!",
                data: e,
            });
        });
};

// List product by ID
exports.getById = (req, res, next) => {
    Product.findById(req.params.id, "title slug price description tags")
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((e) => {
            res.status(400).send({
                message: "Houve um erro ao listar os produto!",
                data: e,
            });
        });
};

// List product by Tags
exports.getByTags = (req, res, next) => {
    Product.find({ tags: req.params.tag }, "title slug price description tags")
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((e) => {
            res.status(400).send({
                message: "Houve um erro ao listar os produto!",
                data: e,
            });
        });
};

// Create new product
exports.post = (req, res, next) => {
    let product = new Product(req.body);
    product
        .save()
        .then((x) => {
            res.status(201).send({
                message: "Produto cadastrado com sucesso!",
            });
        })
        .catch((e) => {
            res.status(400).send({
                message: "Houve um erro ao cadastrar o produto!",
                data: e,
            });
        });
};

exports.put = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug,
        },
    })
        .then((x) => {
            res.status(200).send({
                message: "Produto atualizado com sucesso",
            });
        })
        .catch((e) => {
            res.status(400).send({
                message: "Houve um erro ao atualizar o produto",
                data: e,
            });
        });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
