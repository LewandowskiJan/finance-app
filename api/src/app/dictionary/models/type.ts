import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface TypeSchema extends Document {
  name: string;
  dateOfCreate: Date;
  isActive: boolean;
}

const typeSchema = new Schema<TypeSchema>({
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
typeSchema.plugin(mongooseUniqueValidator);

export const Type = model<TypeSchema>('Type', typeSchema);
