"use client"

import { useEffect } from "react"

export default function ErrorPage({error}: {error: Error}) {
     useEffect(() => {
        console.error("An error occurred:", error);
     }, [error]);
     return (
         <div className="flex items-center justify-center h-screen">
             <div className="text-center">
                 <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
                 <p className="text-lg">{error.message}</p>
             </div>
         </div>
     )
}