import { auth, currentUser } from "@clerk/nextjs/server";

export default async function aaDashboardPage() {
    const authObj = await auth();
    const userObj = await currentUser();

    console.log("Auth Object:", authObj);
    console.log("User Object:", userObj);

    return <h1>AA Dashboard</h1>;

}