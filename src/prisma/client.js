import Prisma from '@prisma/client';

const prisma = new Prisma.PrismaClient({
  errorFormat: 'pretty',
});

export default prisma;
