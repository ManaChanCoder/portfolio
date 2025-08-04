import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connection: ${conn.connection.host}`);
  } catch (error) {
    console.error(`connection failed: ${error}`);
    process.exit(1);
  }
};
