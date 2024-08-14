/*
  Warnings:

  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departmenttostudent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `departments` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `departmenttostudent` DROP FOREIGN KEY `DepartmentToStudent_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `departmenttostudent` DROP FOREIGN KEY `DepartmentToStudent_studentId_fkey`;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `departments` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `department`;

-- DropTable
DROP TABLE `departmenttostudent`;
