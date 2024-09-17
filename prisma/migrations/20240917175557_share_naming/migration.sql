/*
  Warnings:

  - You are about to drop the column `privateKeyShare1` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `privateKeyShare2` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `privateKeyShare3` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "privateKeyShare1",
DROP COLUMN "privateKeyShare2",
DROP COLUMN "privateKeyShare3",
ADD COLUMN     "aesShare" TEXT,
ADD COLUMN     "awsShare" TEXT,
ADD COLUMN     "gcpShare" TEXT;
