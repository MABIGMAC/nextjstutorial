"use server"

import { createProduct, deleteProduct, updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
    title?: string;
    price?: string;
    description?: string;
}

export type FormState = {
    errors: Errors;
}

export async function createProductButton(prevState: FormState, formData: FormData){
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        const errors: Errors = {};
        
        if (!title) {
            errors.title = "Title is required";
        }
        if (!price || isNaN(parseFloat(price))) {
            errors.price = "Price must be a valid number";
        }
        if (!description) {
            errors.description = "Description is required";
        }

        if (Object.keys(errors).length > 0) {
            return { errors };
        }

        await createProduct(title, parseInt(price), description);
        redirect("/products-db");
    }

export async function editProductButton(id: number, prevState: FormState, formData: FormData){
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        const errors: Errors = {};
        
        if (!title) {
            errors.title = "Title is required";
        }
        if (!price || isNaN(parseFloat(price))) {
            errors.price = "Price must be a valid number";
        }
        if (!description) {
            errors.description = "Description is required";
        }

        if (Object.keys(errors).length > 0) {
            return { errors };
        }

        await updateProduct(id, title, parseInt(price), description);
        redirect("/products-db");
    }

export async function deleteProductButton(id: number) {
    await deleteProduct(id);
    revalidatePath("/products-db");
}