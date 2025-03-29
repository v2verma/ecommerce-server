import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const categoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  popularity: {
    type: Number
  }
}, { timestamps: true });

const Category = mongoose.model('Category', categoriesSchema);

export default Category;
