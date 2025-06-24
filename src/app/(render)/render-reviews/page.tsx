import { Product } from "@/components/products";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function renderReviews() {
    return (
        <div>
            <h1>Render Reviews</h1>
            <Suspense fallback={<div>Loading reviews...</div>}>

            <Reviews />
            </Suspense>
            <Suspense fallback={<div>Loading product...</div>}>

            <Product />
            </Suspense>
        </div>
    );
}