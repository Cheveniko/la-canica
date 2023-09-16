import { connect, connection } from "mongoose";

const dbConnection = {
  isConnected: false,
};

export async function connectDB() {
  if (dbConnection.isConnected) return;

  const db = await connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
  });
  dbConnection.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});
