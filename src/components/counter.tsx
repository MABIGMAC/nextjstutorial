"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const {isLoaded, userId, sessionId, getToken} = useAuth();
    // const {isLoaded: isUserLoaded, user} = useUser();

    if (!isLoaded || !userId) {
        return null;
    }

    return (
        <>
            <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h2>Counter</h2>
                <p>Current Count: {count}</p>
                <button onClick={() => setCount(count + 1)} style={{ marginRight: '1rem' }}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </>
    )
}