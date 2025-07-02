type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Album = {
    userId: number;
    id: number;
    title: string;
}

async function fetchPosts(userId: number) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        cache: "no-store", // Ensures fresh data on each request
    });
    return response.json();
}
async function fetchAlbums(userId: number) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, {
        cache: "no-store", // Ensures fresh data on each request
    });
    return response.json();
}


export default async function UserProfile({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const userId = Number(id);

    const postsData = fetchPosts(userId);
    const albumsData = fetchAlbums(userId);
    
    // Fetch posts and albums in parallel
    const [posts, albums] = await Promise.all([
        postsData,
        albumsData
    ]);

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-8">User Profile</h1>
            <h2 className="text-xl font-bold mb-4">Posts</h2>
            <ul className="mb-8">
                {posts.map((post: Post) => (
                    <li key={post.id} className="mb-4">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-bold mb-4">Albums</h2>
            <ul>
                {albums.map((album: Album) => (
                    <li key={album.id} className="mb-4">
                        <h3 className="text-lg font-semibold">{album.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );

}