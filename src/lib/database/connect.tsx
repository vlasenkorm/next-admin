"use server"
import mongoose, { ConnectionStates } from "mongoose";

interface connectionStatus {
    isConnected: null | ConnectionStates
}

export const connectDB = async () => {
  const connection: connectionStatus = {isConnected: null};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO || '');
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connect", db.connections[0].readyState)
  } catch (error) {
    console.log(error);
  }
};
