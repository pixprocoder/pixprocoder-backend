import express from "express";
import { PostsController } from "./post.controller";

const router = express.Router();

router.post("/", PostsController.insertPostIntoDB);

export const PostsRoutes = router;
