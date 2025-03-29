import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
    default: 0
  },
  stockQuantity: {
    type: Number,
    default: 1
  },
  imgURL: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  rating: {
    type: mongoose.Types.Decimal128,
    default: 0
  },
  stockType: {
    type: String,
    default: ''
  },
  brand: {
    type: String,
    required: true,
    default: ''
  },
  popularity: {
    type: Number,
    default: 0
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
