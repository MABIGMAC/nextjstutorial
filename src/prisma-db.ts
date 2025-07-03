import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient()

const seedProducts = async () => {
    const count = await prisma.product.count();
    if (count === 0){
        await prisma.product.createMany({
            data: [
                { title: "Product 1", price: 100, description: "Description for product 1" },
                { title: "Product 2", price: 200, description: "Description for product 2" },
                { title: "Product 3", price: 300, description: "Description for product 3" },
            ],
        });
        console.log("Products seeded successfully.");
    }
}

seedProducts()

export const getProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}

export const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: { id },
    });
    return product;
}

export const createProduct = async (title: string, price: number, description?: string) => {
    const product = await prisma.product.create({
        data: { title, price, description },
    });
    return product;
}

export const updateProduct = async (id: number, title?: string, price?: number, description?: string) => {
    const product = await prisma.product.update({
        where: { id },
        data: { title, price, description },
    });
    return product;
}

export const deleteProduct = async (id: number) => {
    const product = await prisma.product.delete({
        where: { id },
    });
    return product;
}

