-- CreateTable
CREATE TABLE "Hello" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Hello_pkey" PRIMARY KEY ("id")
);
