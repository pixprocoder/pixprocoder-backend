import express from "express";
import { PostsRoutes } from "../modules/post/post.route";

const router = express.Router();

const moduleRoutes = [
  // routes

  {
    path: "/posts",
    route: PostsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
