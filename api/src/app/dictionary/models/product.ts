import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface ProductSchema extends Document {
  name: string;
  dateOfCreate: Date;
  isActive: boolean;
}

const productSchema = new Schema<ProductSchema>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfCreate: {
    type: Date,
    default: new Date(Date.now()),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
productSchema.plugin(mongooseUniqueValidator);

export const Product = model<ProductSchema>('Product', productSchema);
