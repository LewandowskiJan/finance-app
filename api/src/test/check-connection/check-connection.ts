import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface CheckConnectionSchema {
  connectionStatus: string;
  connectionDate: Date;
}

const checkConnectionSchema = new Schema<CheckConnectionSchema>({
  connectionStatus: {
    type: String,
    required: true,
  },
  connectionDate: {
    type: Date,
    default: new Date(Date.now()),
    required: true,
  },
});
checkConnectionSchema.plugin(mongooseUniqueValidator);

export const CheckConnection = model<CheckConnectionSchema>('CheckConnection', checkConnectionSchema);
