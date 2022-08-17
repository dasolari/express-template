import prismaClient from '../../prisma/client';

const list = async () => {
  const hellos = await prismaClient.hello.findMany();
  return hellos;
};

export default list;
