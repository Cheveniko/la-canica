import { Schema, model, models } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  image: string;
  role: string;
  emailVerified: Date;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    emailVerified: {
      type: Date,
      required: true,
      default: null,
    },
  },
  { timestamps: true },
);
export const User = models.User || model<IUser>("User", UserSchema);
