import { cookies } from "next/headers";

export default async function AboutPage() {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")
    console.log("Current theme from cookies:", theme);
    console.log("AboutPage rendered");
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">About Page</h1>
            <p>This is the about page of the application.</p>
            <p>It provides information about the app and its features.</p>
        </div>
    );
}