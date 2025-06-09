"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    function handleClick(): void {
        router.push('/')
    }

    return <>
        <h1>Order Product</h1>
        <p>This is the order product page.</p>
        <p>It can be used to place orders for products.</p>
        <button onClick={handleClick} >Place Order</button>
    </>
}