import mongoose from "mongoose";

export interface IUser {
  id: string;
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  phone?: string;
  address?: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updateAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, unique: true, min: 3, max: 18 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: String,
    phone: String,
    address: String,
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
