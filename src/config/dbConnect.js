import mongoose from "mongoose";
console.log(process.env.MONGODB_CONNECT_KEY);
mongoose.connect(process.env.MONGODB_CONNECT_KEY);

let db = mongoose.connection;

export default db;
