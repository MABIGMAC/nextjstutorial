"use client";
import { useState } from "react";

export default function RenderDashboard() {
    const [username, setUsername] = useState<string>("Guest");
    console.log("RenderDashboard rendered");
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Render Dashboard</h1>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 mb-4" placeholder="Enter your name" />
            <p>Hello {username}</p>
        </div>
    );
}