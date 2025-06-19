export const dynamic = "force-static";
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET() {
    return Response.json({ currentTime: new Date().toISOString() }, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}