import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  redirect("/profile");
  const requestHeaders = new Headers(request.headers)
  console.log("Request Headers:", requestHeaders);
  console.log("the auth token is:", requestHeaders.get("authorization"));
  const theme = request.cookies.get("theme")?.value || "light"; // Default to 'light' if not set
  console.log("Theme:", theme);
  const cookieStore = await cookies();
  cookieStore.set("results per Page", "10");

  return new Response("Hello, profile api!", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    },
  });
}

