import { connect, connection } from "mongoose";

const dbConnection = {
  isConnected: false,
};

const mongodbUri = process.env.MONGODB_URI as string;

export const connectDB = async () => {
  if (dbConnection.isConnected) return;

  await connect(mongodbUri);
  // dbConnection.isConnected = db.connections[0].readyState;
};

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});
