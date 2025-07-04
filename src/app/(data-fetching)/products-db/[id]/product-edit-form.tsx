"use client";
import { editProductButton, FormState } from "@/actions/products";
import { useActionState } from "react";
import { Product } from "../page";


export default function EditProductForm({product}: {product: Product}) {
    const initialState: FormState = {
        errors: {}
    };

    const editButtonWithId = editProductButton.bind(null, product.id);

    const [state, formAction, isPending]= useActionState(editButtonWithId,initialState)
    
    return (
        <form action={formAction} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    name="title"
                    defaultValue={product.title}
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
                    name="price"
                    defaultValue={product.price}
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
                    defaultValue={product.description || ""} // Handle optional description
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