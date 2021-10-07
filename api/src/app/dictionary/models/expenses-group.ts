import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface ExpensesGroup extends Document {
  name: string;
  dateOfCreate: Date;
  isActive: boolean;
}

const expensesGroupSchema = new Schema<ExpensesGroup>({
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
expensesGroupSchema.plugin(mongooseUniqueValidator);

export const ExpensesGroup = model<ExpensesGroup>('ExpensesGroup', expensesGroupSchema);
