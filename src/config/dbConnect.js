import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECT_KEY);

let db = mongoose.connection;

export default db;
