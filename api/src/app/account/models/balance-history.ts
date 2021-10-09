import { Schema, Model, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface BalanceHistorySchema extends Document {
  balance: string;
  date: Date;
  isActive: boolean;
  accountId: string;
}

const balanceHistorySchema = new Schema<BalanceHistorySchema>({
  balance: {
    type: String,
    required: true,
    default: '0.0',
  },
  date: {
    type: Date,
    default: new Date(Date.now()),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  accountId: {
    type: String,
    required: true,
  },
});
balanceHistorySchema.plugin(mongooseUniqueValidator);

export const BalanceHistory: Model<BalanceHistorySchema, {}, {}, {}> = model<BalanceHistorySchema>(
  'BalanceHistory',
  balanceHistorySchema
);
