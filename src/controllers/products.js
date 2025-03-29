import mongoose from "mongoose";
import Category from '../models/categories.js';
import {successResponse, errorResponse} from '../utils/construct-response.js';

export const getProductCategory = async (req, res) => {
    try {
      const data = await Category.find().exec();
      successResponse(res, 200, 'Category fetched successfully', data);
    } catch (error) {
        errorResponse(res, 400, 'Failed to get product category', error.message);
    }
};
