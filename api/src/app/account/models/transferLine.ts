import { Schema, Model, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface TransferLineSchema extends Document {
  value: string;
  currency: string;
  exchangeRate: string;
  valueInPln: string;
  transferId: string;
  categoryId: string;
  expensesGroupId: string;
  productId: string;
  projectId: string;
  targetId: string;
  typeId: string;
  eventId: string;
  importance: string;
}

const transferLineSchema = new Schema<TransferLineSchema>({
  value: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  exchangeRate: {
    type: String,
    required: true,
  },
  valueInPln: {
    type: String,
  },
  transferId: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  expensesGroupId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
  },
  projectId: {
    type: String,
  },
  targetId: {
    type: String,
  },
  typeId: {
    type: String,
  },
  eventId: {
    type: String,
  },
  importance: {
    type: String,
  },
});
transferLineSchema.plugin(mongooseUniqueValidator);

export const TransferLine: Model<TransferLineSchema, {}, {}, {}> = model<TransferLineSchema>(
  'TransferLine',
  transferLineSchema
);
