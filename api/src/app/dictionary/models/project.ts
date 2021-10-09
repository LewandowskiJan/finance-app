import { Schema, model } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface ProjectSchema extends Document {
  name: string;
  dateOfCreate: Date;
  isActive: boolean;
}

const projectSchema = new Schema<ProjectSchema>({
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
projectSchema.plugin(mongooseUniqueValidator);

export const Project = model<ProjectSchema>('Project', projectSchema);
