"use client"
import './globals.css';

export default function GlobalError() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Global Error</h2>
            <button onClick={() => {
                window.location.reload();
            }} className="bg-blue-500 text-white rounded p-2">
                Reload Page
            </button>
        </div>
    )
}