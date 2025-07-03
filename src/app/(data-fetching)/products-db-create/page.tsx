import SubmitButton from "@/components/submit-button";
import { createProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function AddProductPage() {
    async function createProductButton(formData: FormData){
        "use server"
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;
        await createProduct(title, parseInt(price), description);
        redirect("/products-db");
    }
    
    return (
        <form action={createProductButton} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    name="title"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    name="price"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={4}
                    name="description"
                />
            </div>
            <SubmitButton />
        </form>
    )
}