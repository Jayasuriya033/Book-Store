/*
  Warnings:

  - You are about to drop the column `departments` on the `student` table. All the data in the column will be lost.
  - Added the required column `department` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `departments`,
    ADD COLUMN `department` VARCHAR(191) NOT NULL;
