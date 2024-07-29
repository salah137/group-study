/*
  Warnings:

  - Added the required column `profile` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Group` ADD COLUMN `profile` VARCHAR(191) NOT NULL,
    ADD COLUMN `topic` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `profile` VARCHAR(191) NOT NULL;
