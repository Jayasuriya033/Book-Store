/*
  Warnings:

  - You are about to drop the `automobile_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `civil_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cse_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ece_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eee_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `it_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mba_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mca_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mech_department` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `automobile_department`;

-- DropTable
DROP TABLE `civil_department`;

-- DropTable
DROP TABLE `cse_department`;

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

-- CreateTable
CREATE TABLE `AutoMobil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AutoMobil_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Civil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Civil_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cse_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ece` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Ece_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Eee_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mech` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mech_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `It` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `It_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mca_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mba` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mba_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
