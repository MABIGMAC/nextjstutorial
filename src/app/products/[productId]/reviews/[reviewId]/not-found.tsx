"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathName = usePathname();
    const productId = pathName.split('/')[2];
    const reviewId = pathName.split('/')[4];
    return (
        <div>
        <h1>404 - Review Not Found</h1>
        <p>The page you are looking for product {productId} with review {reviewId} does not exist.</p>
        </div>
    );
}