import { Request, Response } from "express";
import { PostsService } from "./post.service";

const insertPostIntoDB = async (req: Request, res: Response) => {
  console.log("body:", req.body);
  const result = await PostsService.insertPostIntoDB(req.body);
  res.send(result);
};

export const PostsController = {
  insertPostIntoDB,
};
