import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017", { dbName: "Post" })
  .then(() => {
    console.log("MongoDBga ulanish hosil qilindi...");
  })
  .catch((err) => {
    console.error("MongoDBga ulanish vaqtida xato ro'y berdi...", err);
  });

export default mongoose;