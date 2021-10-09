import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

interface TargetSchema extends Document {
  name: string;
  dateOfCreate?: Date;
  isActive?: boolean;
}

const targetSchema = new Schema<TargetSchema>({
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
targetSchema.plugin(mongooseUniqueValidator);

export const Target = model<TargetSchema>('Target', targetSchema);
