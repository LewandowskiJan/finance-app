import { Schema, Model, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface AccountSchema extends Document {
  name: string;
  alias: string;
  dateOfCreate: Date;
  isActive: boolean;
  isExternal: boolean;
  balance: string;
  currency: string;
}

const accountSchema = new Schema<AccountSchema>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  alias: {
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
  isExternal: {
    type: Boolean,
    default: true,
    required: true,
  },
  balance: {
    type: String,
    default: '0.0',
  },
  currency: {
    type: String,
    default: 'PLN',
  },
});
accountSchema.plugin(mongooseUniqueValidator);

export const Account: Model<AccountSchema, {}, {}, {}> = model<AccountSchema>('Account', accountSchema);
