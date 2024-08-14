/*
  Warnings:

  - You are about to drop the `automobiledepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `civildepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `csedepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ecedepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eeedepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `itdepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mbadepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mcadepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mechdepartment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `automobiledepartment`;

-- DropTable
DROP TABLE `civildepartment`;

-- DropTable
DROP TABLE `csedepartment`;

-- DropTable
DROP TABLE `ecedepartment`;

-- DropTable
DROP TABLE `eeedepartment`;

-- DropTable
DROP TABLE `itdepartment`;

-- DropTable
DROP TABLE `mbadepartment`;

-- DropTable
DROP TABLE `mcadepartment`;

-- DropTable
DROP TABLE `mechdepartment`;

-- CreateTable
CREATE TABLE `AutoMobile_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AutoMobile_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Civil_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Civil_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cse_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cse_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ece_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Ece_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eee_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Eee_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mech_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mech_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `It_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `It_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mca_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mca_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mba_Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mba_Department_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
