/*
  Warnings:

  - Added the required column `groupId` to the `GroupUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `GroupUser` DROP FOREIGN KEY `GroupUser_userId_fkey`;

-- AlterTable
ALTER TABLE `GroupUser` ADD COLUMN `groupId` INTEGER NOT NULL;
