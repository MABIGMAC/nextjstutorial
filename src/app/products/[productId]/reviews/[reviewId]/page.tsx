export default async function review({params}: {params: Promise<{
    productId: string,
    reviewId: number}> }) {
    const { productId ,reviewId } = await params;
    return (
        <div>
            <h1>Review Details for {productId}, number {reviewId}</h1>
            <p>This is the review details page.</p>
        </div>
    );
}