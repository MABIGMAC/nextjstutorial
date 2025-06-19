import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  console.log("Request Headers:", requestHeaders);
  console.log("the auth token is:", requestHeaders.get("authorization"));
  return new Response("Hello, profile api!", {
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "no-store",
    },
  });
}

