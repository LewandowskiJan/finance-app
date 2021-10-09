import { model, Model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface TransferSchema extends Document {
  accountFrom: string;
  accountTo: string;
  value: string;
  currency: string;
  exchangeRate: string;
  valueInPln: string;
  date: Date;
  description?: string;
  transferLineIds?: string[];
}

const transferSchema = new Schema<TransferSchema>({
  accountFrom: {
    type: String,
    required: true,
  },
  accountTo: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    default: 'PLN',
    required: true,
  },
  exchangeRate: {
    type: String,
    default: '1',
    required: true,
  },
  valueInPln: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: new Date(Date.now()),
  },
  description: {
    type: String,
  },
  transferLineIds: [String],
});
transferSchema.plugin(mongooseUniqueValidator);

export const Transfer: Model<TransferSchema, {}, {}, {}> = model<TransferSchema>('Transfer', transferSchema);
