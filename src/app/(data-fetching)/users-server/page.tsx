type User = {
    id: number;
    name: string;
    username: string;
    phone: string;
    email: string;
}

export default async function usersServerPage() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay for demonstration purposes
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store", // Ensures fresh data on each request
    });
    const users: User[] = await response.json();
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}