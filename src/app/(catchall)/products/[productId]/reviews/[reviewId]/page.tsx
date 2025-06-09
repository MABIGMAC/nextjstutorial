import { redirect } from "next/navigation";

export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export default async function review({params}: {params: Promise<{
    productId: string,
    reviewId: number}> }) {
    // const randomNumber = getRandomInt(2);
    // if (randomNumber === 1) {
    //     throw new Error("An error occurred while fetching the review details.");
    // }
    const { productId ,reviewId } = await params;
    if (reviewId > 1000) {                                                                                                                                                                                                                
        redirect('/products')                                                                                                                                                                                                                 
    }
    return (
        <div>
            <h1>Review Details for {productId}, number {reviewId}</h1>
            <p>This is the review details page.</p>
        </div>
    );
}