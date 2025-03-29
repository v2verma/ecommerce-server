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
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  stockQuantity: {
    type: Number
  },
  img: {
    type: String
  },
  category: {
    type: String
  },
  rating: {
    type: mongoose.Types.Decimal128
  },
  stockType: {
    type: String
  },
  brand: {
    type: String,
    required: true
  },
  popularity: {
    type: Number
  },
}, { timestamps: true });

const product = mongoose.model('products', productSchema);

export default product;
