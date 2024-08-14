/*
  Warnings:

  - You are about to drop the `automobil` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `automobil`;

-- CreateTable
CREATE TABLE `AutoMobile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AutoMobile_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
