/* eslint-disable no-console */
import prisma from '../client';

const seeder = async () => {
  // add seeds here
};

seeder()
  .catch((error) => {
    console.error(`There was an error while seeding the database: ${error}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });
