"use client"

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors  flex justify-center "
        disabled={pending}
        >
        {pending? <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 "/> : "Add Product"}
        </button>
    );
}