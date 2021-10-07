import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface EventSchema extends Document {
  name: string;
  dateOfCreate: Date;
  isActive: boolean;
}

const eventSchema = new Schema<EventSchema>({
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

eventSchema.plugin(mongooseUniqueValidator);

export const Event = model<EventSchema>('Event', eventSchema);
