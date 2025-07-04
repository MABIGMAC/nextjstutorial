"use client";
import SubmitButton from "@/components/submit-button";
import { createProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { useActionState } from "react";

type Errors = {
    title?: string;
    price?: string;
    description?: string;
}

type FormState = {
    errors: Errors;
}

export default function AddProductPage() {
    const initialState: FormState = {
        errors: {}
    };

    const [state, formAction, isPending]= useActionState(createProductButton,initialState)
    async function createProductButton(formData: FormData){
        "use server"
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
    
    return (
        <form action={formAction} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    name="title"
                />
            {
                state.errors.title && (
                    <div className="text-red-500 mb-2">
                        {state.errors.title}
                    </div>
                )
            }
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    name="price"
                />
            {
                state.errors.price && (
                    <div className="text-red-500 mb-2">
                        {state.errors.price}
                    </div>
                )
            }
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={4}
                    name="description"
                />
            {
                state.errors.description && (
                    <div className="text-red-500 mb-2">
                        {state.errors.description}
                    </div>
                )
            }
            </div>
            {/* <SubmitButton /> */}
            <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors  flex justify-center "
        disabled={isPending}
        >
        {isPending? <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 "/> : "Add Product"}
        </button>
        </form>
    )
}