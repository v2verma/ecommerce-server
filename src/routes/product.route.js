import express from 'express'
import { getProductCategory, createProductCategory, createProductsByCategory } from '../controllers/products.js';

const productRouter = express.Router()

productRouter.get('/getProductCategories', getProductCategory)
productRouter.post('/createProductCategory', createProductCategory)

productRouter.post('/createProduct', createProductsByCategory)



export default productRouter;
