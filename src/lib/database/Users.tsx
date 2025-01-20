"use server";
import { connectDB } from "./connect";
import User, { IUser } from "./models/user";
import { randomStr } from "@/lib/utils";

export const addRandomUsers = async () => {
  connectDB();
  const user = await User.create({
    name: randomStr(5),
    email: randomStr(5) + "@test.com",
    password: randomStr(5),
    avatar: "avatar",
    phone: "phone",
    address: "address",
    isAdmin: true,
    isActive: true,
  });

  console.log("addUser", user);
};

export const addEmptyUsers = async (user: IUser) => {
  connectDB();
  const res = await User.create({
    name: user.name,
    email: user.email,
    password: user.password,
    avatar: "avatar",
    phone: "phone",
    address: "address",
    isAdmin: true,
    isActive: true,
  });

  console.log("addUser", res);
};

export const addUsers = async (user: IUser) => {
  connectDB();
  const res = await User.create({
    name: user.name,
    email: user.email,
    password: user.password,
    avatar: user.avatar,
    phone: user.phone,
    address: user.address,
    isAdmin: user.isAdmin,
    isActive: user.isActive,
  });

  console.log("addUser", res);
};

export const findUserByEmail = async (email: string) => {
  connectDB();
  const res = await User.findOne({ email });
  console.log("User", res);
  return res;
};

export const deleteUser = async (userId: string) => {
  connectDB();
  const res = await User.deleteOne({ _id: userId });
  console.log("deleteUser", res);
};

export const updateUser = async (userId: string, user: IUser) => {
  connectDB();
  const res = await User.updateOne(
    { _id: userId },
    { $set: user },
    { upsert: true }
  );
  console.log("deleteUser", res);
};

export const allUsers = async () => {
  console.log("fetchUsers");
  connectDB();
  const users = await User.find();

  const data = users.map((item) => {
    const obj = { id: item._id.toString(), ...item._doc };
    delete obj._id;
    delete obj.__v;
    return obj;
  });

  return data;
};
