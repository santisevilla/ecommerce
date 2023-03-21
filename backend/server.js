import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products)
});

app.get("/api/products/slug/:slug", (req, res) => {
    const product = data.products.find(p => p.slug === req.params.slug)
    if(product){
        res.send(product)
    } else {
        res.status(404).send({message:"Product not  found"})
    }
    res.send(data.products)
});

app.get("/api/products/:_id", (req, res) => {
    const product = data.products.find(p => p._id === req.params._id)
    if(product){
        res.send(product)
    } else {
        res.status(404).send({message:"Product not  found"})
    }
    res.send(data.products)
});

app.listen(3001, () => {
    console.log('Port rendering...')
})