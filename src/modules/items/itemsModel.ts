import mongoose from 'mongoose';
import { IItemName, ICategory } from '../../index';

const Schema = mongoose.Schema;

const ItemSchema = new Schema<IItemName>({
  name: { type: String, required: true },
  count: Number,
});

const CategorySchema = new Schema<ICategory>({
  category: { type: String, required: true },
  items: [ItemSchema],
});

export const Category = mongoose.model<ICategory>('Category', CategorySchema);
