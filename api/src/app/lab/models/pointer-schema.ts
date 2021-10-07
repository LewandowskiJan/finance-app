import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface PointerSchema extends Document {
  time: Date;
  dateOfCreate: Date;
  light: string;
  humidity: string;
  temperature: string;
  moisture: string;
  plantName: string;
}

const pointerSchema = new Schema<PointerSchema>({
  time: {
    type: Date,
    required: true,
  },
  dateOfCreate: {
    type: Date,
    default: new Date(Date.now()),
  },
  light: {
    type: String,
    require: true,
  },
  humidity: {
    type: String,
    require: true,
  },
  temperature: {
    type: String,
    require: true,
  },
  moisture: {
    type: String,
    require: true,
  },
  plantName: {
    type: String,
    default: 'test',
  },
});
pointerSchema.plugin(mongooseUniqueValidator);

export const Pointer = model<PointerSchema>('Pointer', pointerSchema);
