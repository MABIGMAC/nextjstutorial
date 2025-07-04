import { getProductById } from "@/prisma-db";
import EditProductForm from "./product-edit-form";
import { Product } from "../page";
import { notFound } from "next/navigation";



export default async function EditProductPage({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    console.log("EditProductPage", id);
    const product: Product | null = await getProductById(parseInt(id))

    if (!product) {
        notFound()
    }
    
    return (
        <EditProductForm product={product}/>
    )
}