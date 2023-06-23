import { IProfile } from '@monorepo/types';
import { model, Schema } from 'mongoose';

const profileSchema = new Schema<IProfile>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const Profile = model<IProfile>('Profile', profileSchema);
