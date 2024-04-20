import mongoose from "mongoose";
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connected to db");
    });
    connection.on("error", (error) => {
      console.log("error connecting to db", error);
    });
  } catch (error) {
    console.log("something went wrong", error);
  }
}

export default connectDB;
