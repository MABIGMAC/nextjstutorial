
type ProductDetailsProps = {
    params: Promise<{
        productId: string;
    }>;                                                                                                      
}

export const dynamicParams = false; // Enable dynamic params for this page

export async function generateStaticParams() {
    return [
        { productId: '1' },
        { productId: '2' },
        { productId: '3' },
    ]
}

export async function generateMetadata ({ params }: ProductDetailsProps) {
    const { productId } = await params;
    
    return {
        title: `Product Details for ${productId}`,
        description: `This is the product details page for product ID: ${productId}.`,
    }
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
    const { productId } = await params;
    
    return (
        <div>
            <h1>Product Details for {productId}</h1>
            <p>This is the product details page.</p>
        </div>
    );
}