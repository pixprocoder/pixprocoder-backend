import prisma from "../../../shared/prisma";

const insertPostIntoDB = async (payload: any) => {
  const result = await prisma.post.create({
    data: payload,
  });

  return result;
};

const getPostFromDB = async () => {
  const result = await prisma.post.findMany({});
  return result;
};

const getPostById = async (id: any) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const PostsService = {
  insertPostIntoDB,
  getPostFromDB,
  getPostById,
};
