export const metadata = {
    title: 'Blog Pages',
    description: 'This is the blog page of the application.',}

export default async function Blog() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay

    return <h1>Blog Page</h1>;
}