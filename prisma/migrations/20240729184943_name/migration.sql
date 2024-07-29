/*
  Warnings:

  - Added the required column `groupName` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `GroupUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile` to the `GroupUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Group` ADD COLUMN `groupName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `GroupUser` ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `profile` VARCHAR(191) NOT NULL;
