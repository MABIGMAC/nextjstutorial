import { comments } from "./data";

export async function GET() {
  return Response.json(comments)
}

export async function POST(request: Request) {
  const { text } = await request.json();
  const newComment = {
    id: comments.length + 1,
    text,
  };
  comments.push(newComment);
  return Response.json(newComment, { 
    headers: { "Content-Type": "application/json" },
    status: 201 });
}