import { IUser } from '@monorepo/types';
import { model, Schema } from 'mongoose';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    profile: {
      ref: 'Profile',
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    toObject: { virtuals: true },
  }
);

export const User = model<IUser>('User', userSchema);
