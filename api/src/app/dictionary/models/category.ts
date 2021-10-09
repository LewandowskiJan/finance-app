import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface CategorySchema extends Document {
  name: string;
  utfIcon: string;
  dateOfCreate?: Date;
  isActive?: boolean;
}

const categorySchema = new Schema<CategorySchema>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  utfIcon: {
    type: String,
    required: true,
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
categorySchema.plugin(mongooseUniqueValidator);

export const Category = model<CategorySchema>('Category', categorySchema);
