import prismaClient from '../../prisma/client';

const create = async (args) => {
  const hello = await prismaClient.hello.create({
    data: {
      ...args,
    },
  });
  return hello;
};

export default create;
