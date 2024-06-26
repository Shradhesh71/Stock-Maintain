import mongoose from "mongoose";
import "dotenv/config"

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Failed to connect!!😓");
    console.log(error);
  }
}
