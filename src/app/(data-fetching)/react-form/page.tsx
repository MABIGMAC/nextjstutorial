"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/react-form/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, price, description }),
            });
            if (!response.ok) {
                throw new Error('Failed to create product');
            }
            router.push('/products-db');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={4}
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Creating...' : 'Create Product'}
            </button>
        </form>
    )
}