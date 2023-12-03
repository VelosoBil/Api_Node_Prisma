-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `cep` VARCHAR(20) NOT NULL,
    `endereco` VARCHAR(50) NOT NULL,
    `complemento` VARCHAR(15) NOT NULL,
    `bairro` VARCHAR(20) NOT NULL,
    `cidade` VARCHAR(20) NOT NULL,
    `uf` VARCHAR(2) NOT NULL,
    `celular` VARCHAR(15) NOT NULL,
    `email` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sequelizemeta` (
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
