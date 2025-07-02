type Author = {
    id: number;
    name: string;
    }
export default async function Author({userId}: {userId: number}) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay for demonstration purposes
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        cache: "no-store", // Ensures fresh data on each request
    });
    const author: Author = await response.json();
    return (
        <div className="text-sm text-gray-500">
            Written by: 
            <span className="font-semibold text-gray-700 hover:text-gray-900 ">{author.name}</span>
        </div>
    );
}