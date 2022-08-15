import express from "express";
import {indexView, createViewPOST, updateViewPOST, deleteViewGET} from "../controllers/postController.js";
const route = express.Router();

route.get("/api/posts/read", indexView);
route.post("/api/posts/create", createViewPOST);
route.post("/api/posts/update", updateViewPOST);
route.get("/api/posts/delete/:id", deleteViewGET);

export default route;