import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connection to mongoDB is established!");
  } catch (error) {
    console.log(`Error in connecting mongoDB! ${error}`);
    process.exit(1);
  }
};

export default connectDb;
