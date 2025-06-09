"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            // This will reload the current route
            router.refresh();
            reset();
        })
    }
    return <div>
        Error in reviewId {error.message}
        <button onClick={() => reload()}>Try again</button>
    </div>
}