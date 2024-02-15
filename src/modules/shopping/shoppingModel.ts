import mongoose from 'mongoose';
import { IShopping } from '../../index';

const Schema = mongoose.Schema;

const HistoryShoppingSchema = new Schema<IShopping>({
  title: { type: String, required: true },
  list: [
    {
      category: String,
      items: [
        {
          _id: { type: String, required: true },
          name: String,
          complete: Boolean,
          count: Number,
        },
      ],
    },
  ],
  status: String,
  current: Boolean,
  date: Date,
});

export const HistoryShopping = mongoose.model('historyShopping', HistoryShoppingSchema);
