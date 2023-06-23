import { Types } from 'mongoose';
import { IDocument } from './IDocument';

export interface IUser extends IDocument {
  name: string;
  profile: Types.ObjectId;
}
