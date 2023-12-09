import express from "express";
import { PostsController } from "./post.controller";

const router = express.Router();

router.get("/", PostsController.getPostFromDB);
router.get("/:id", PostsController.getPostById);
router.post("/create-post", PostsController.insertPostIntoDB);

export const PostsRoutes = router;
