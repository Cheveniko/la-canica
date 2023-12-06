import { ObjectId } from "mongoose";
import { connectDB } from "./mongoose";

import { User, IUser } from "@/models/User";

type extraFields = {
  role: string;
  createdAt: Date;
};

export const getUser = async (email: string | null | undefined) => {
  console.log(email);
  await connectDB();

  const foundUser: IUser | null = await User.findOne({ email: email });
  console.log(foundUser);
  return foundUser;
};

export const updateUser = async (id: string, data: extraFields) => {
  await connectDB();

  const updatedUser: IUser | null = await User.findOneAndUpdate(
    { _id: id },
    data,
    { new: true },
  );

  return updatedUser;
};
