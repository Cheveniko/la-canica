import { Schema, model, models } from "mongoose";

import { ObjectId } from "mongodb";

export interface IAccount {
  provider?: string;
  type?: string;
  providerAccountId?: string;
  access_token?: string;
  expires_at?: number;
  scope?: string;
  token_type?: string;
  id_token?: string;
  userId?: ObjectId;
}

const AccountSchema: Schema = new Schema<IAccount>({
  provider: {
    type: String,
  },
  type: {
    type: String,
  },
  providerAccountId: {
    type: String,
  },
  access_token: {
    type: String,
  },
  expires_at: {
    type: Number,
  },
  scope: {
    type: String,
  },
  token_type: {
    type: String,
  },
  id_token: {
    type: String,
  },
  userId: {
    type: ObjectId,
  },
});

export const Account =
  models.Account || model<IAccount>("Account", AccountSchema);
