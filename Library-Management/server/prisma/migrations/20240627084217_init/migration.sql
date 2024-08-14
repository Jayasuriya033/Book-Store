/*
  Warnings:

  - You are about to drop the `automobile_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `civil_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cse_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ece_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eee_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `it_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mba_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mca_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mech_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `automobile_department` DROP FOREIGN KEY `automobile_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `civil_department` DROP FOREIGN KEY `civil_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `cse_department` DROP FOREIGN KEY `cse_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `ece_department` DROP FOREIGN KEY `ece_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `eee_department` DROP FOREIGN KEY `eee_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `it_department` DROP FOREIGN KEY `it_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `mba_department` DROP FOREIGN KEY `mba_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `mca_department` DROP FOREIGN KEY `mca_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `mech_department` DROP FOREIGN KEY `mech_department_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_departmentId_fkey`;

-- DropTable
DROP TABLE `automobile_department`;

-- DropTable
DROP TABLE `civil_department`;

-- DropTable
DROP TABLE `cse_department`;

-- DropTable
DROP TABLE `departments`;

-- DropTable
DROP TABLE `ece_department`;

-- DropTable
DROP TABLE `eee_department`;

-- DropTable
DROP TABLE `it_department`;

-- DropTable
DROP TABLE `mba_department`;

-- DropTable
DROP TABLE `mca_department`;

-- DropTable
DROP TABLE `mech_department`;

-- DropTable
DROP TABLE `students`;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Student_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AutoMobileDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AutoMobileDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CivilDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CivilDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CseDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CseDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EceDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EceDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EeeDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EeeDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MechDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MechDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ItDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `McaDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `McaDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MbaDepartment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MbaDepartment_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
