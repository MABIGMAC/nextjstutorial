import { notFound } from "next/navigation";

export default async function review({params}: {params: Promise<{
    productId: string,
    reviewId: number}> }) {
    const { productId ,reviewId } = await params;
    if (reviewId > 1000) {                                                                                                                                                                                                                
        notFound();                                                                                                                                                                                                                         
    }
    return (
        <div>
            <h1>Review Details for {productId}, number {reviewId}</h1>
            <p>This is the review details page.</p>
        </div>
    );
}