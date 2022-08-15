import mongoose from "../lib/db.js";
const { Schema, model } = mongoose;



const postSchema = new Schema({
  theme: { type: String, default: null },
  title: { type: String, default: null },
  description:{ type: String, default: null },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

export const PostModel= model("Posts", postSchema);