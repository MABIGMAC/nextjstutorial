"use client";

import { deleteProductButton } from "@/actions/products";
import Link from "next/link";
import { useOptimistic } from "react";

export type Product = {
    id: number;
    title: string;
    price: number;
    description?: string | null;
};

export default function ProductDetail( {products}: {products: Product[]}) {

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter(product => product.id !== productId);
    })

    const removeProduct = async (productId: number) => {
        setOptimisticProducts(productId);
        await deleteProductButton(productId);
    }

    return (
        <ul className="space-y-4 p-4">
            {optimisticProducts.map((product) => (
                <li key={product.id} className=" p-4 bg-white shadow-md rounded-lg text-gray-700 ">
                    <h2 className="text-xl font-semibold">
                    <Link href={`/products-db/${product.id}`} className="hover:underline">
                        {product.title}
                    </Link>
                    </h2>
                    <p>
                        {product.description}
                    </p>
                    <p className="text-lg font-medium">Price: ${product.price}</p>
                    <form action={removeProduct.bind(null, product.id)} method="post" className="mt-4">
                    <button type="submit" className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600">
                        Delete
                    </button>
                    </form>
                </li>
            ))}
        </ul>
    )

}
