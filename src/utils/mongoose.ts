import { connect, connection } from "mongoose";

let dbIsConnected = false;

const mongodbUri = process.env.MONGODB_URI!;

export const connectDB = async () => {
  if (dbIsConnected) return;

  const db = await connect(mongodbUri);
  db.connections[0].readyState === 1
    ? (dbIsConnected = true)
    : (dbIsConnected = false);
};

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});
