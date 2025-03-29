import express from 'express'
import { getProductCategory } from '../controllers/products.js';

const productRouter = express.Router()

productRouter.get('/getProductCategories', getProductCategory)

export default productRouter;
