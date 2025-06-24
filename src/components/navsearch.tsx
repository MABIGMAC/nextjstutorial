"use client";
import { useState } from "react";

export default function NavSearch() {
    const [ searchTerm, setSearchTerm ] = useState("");
    console.log("NavSearch component rendered");
    return (
        <h1>NavSearch</h1>
    );
}