import mongoose from "mongoose";

mongoose.connect("mongodb+srv://carmencmattos:Aurora26@cluster0.8tr4b2v.mongodb.net/alura-node");

let db = mongoose.connection

export default db;