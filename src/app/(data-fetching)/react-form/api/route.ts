import { createProduct } from "@/prisma-db";

export async function POST(request: Request) {
    const { title, price, description } = await request.json();

    if (!title || !price) {
        return new Response("Title and price are required", { status: 400 });
    }

    try {
        const product = await createProduct(title, price, description);
        return new Response(JSON.stringify(product), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}