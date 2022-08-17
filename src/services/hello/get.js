import prismaClient from '../../prisma/client';

const get = async () => {
  const hellos = await prismaClient.hello.findMany();
  const hello = hellos.splice(-1)[0];
  return hello;
};

export default get;
