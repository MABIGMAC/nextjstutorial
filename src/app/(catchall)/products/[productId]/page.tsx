export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    
    return (
        <div>
            <h1>Product Details for {productId}</h1>
            <p>This is the product details page.</p>
        </div>
    );
}