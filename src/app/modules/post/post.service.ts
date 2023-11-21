import prisma from "../../../shared/prisma";

const insertPostIntoDB = async (payload: any) => {
  const result = await prisma.post.create({
    data: payload,
  });
  console.log("service data: ", result);
  return result;
};

export const PostsService = {
  insertPostIntoDB,
};
