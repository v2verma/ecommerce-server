import mongoose from "mongoose";
import Category from '../models/categories.js';
import Product from '../models/products.js';
import {successResponse, errorResponse} from '../utils/construct-response.js';

export const getProductCategory = async (req, res) => {
    try {
      const data = await Category.find({}, {name: 1, popularity: 1, _id: 0}).exec();
      successResponse(res, 200, 'Category fetched successfully', data);
    } catch (error) {
        errorResponse(res, 400, 'Failed to get product category', error.message);
    }
};
export const createProductCategory = async (req, res) => {
    const {name, popularity} = req.body;
    try {
      const data = new Category({name, popularity})
      await data.save()
      successResponse(res, 200, 'Category created successfully', Category);
    } catch (error) {
        errorResponse(res, 400, 'Failed to create category', error.message);
    }
};

export const getProductsByCategory = async (req, res) => {
  // const {} = req.body;
    try {
      const data = await Product.find().exec();
      successResponse(res, 200, 'Products fetched successfully', data);
    } catch (error) {
        errorResponse(res, 400, 'Failed to get products', error.message);
    }
};
export const createProductsByCategory = async (req, res) => {
    const {name, description, price, stockQuantity,
      imgURL, category, rating, stockType, brand, popularity
    } = req.body;
    try {
      const data = new Product({name, description, price, stockQuantity,
        imgURL, category, rating, stockType, brand, popularity})
      await data.save()
      successResponse(res, 200, 'Product created successfully', Category);
    } catch (error) {
        errorResponse(res, 400, 'Failed to create product', error.message);
    }
};



