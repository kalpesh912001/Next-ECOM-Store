import React from 'react'
import dbConfig from 'helpers/dbConfig'
import Product from 'Models/Product';

dbConfig();

export default function products(req, res) {
    // Product.find().then(products => {
    //     res.status(200).json(products);
    // })
    getProducts(req, res);

}

// get products api
const getProducts = async (req, res) => {
    let response = await Product.find();
    res.status(200).json(response);
}
