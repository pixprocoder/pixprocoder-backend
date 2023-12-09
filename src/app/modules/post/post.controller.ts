import { Request, Response } from "express";
import { PostsService } from "./post.service";
import sendResponse from "../../../shared/sendResponse";

const insertPostIntoDB = async (req: Request, res: Response) => {
  const result = await PostsService.insertPostIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post created successfully",
    data: result,
  });
};

const getPostFromDB = async (req: Request, res: Response) => {
  const result = await PostsService.getPostFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Post fetched successfully",
    data: result,
  });
};

const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PostsService.getPostById(Number(id));
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single post fetched successfully",
    data: result,
  });
};

export const PostsController = {
  insertPostIntoDB,
  getPostFromDB,
  getPostById,
};
