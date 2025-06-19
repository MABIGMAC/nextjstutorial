import { comments } from "../data";

export async function GET(request: Request, { params}: { params: Promise<{id: string}> } ) {
    const { id } = await params;
    const comment = comments.find(c => c.id === parseInt(id));
    return Response.json(comment || { error: "Comment not found" })
}

export async function PATCH(request: Request, { params }: { params: Promise<{id: string}> }) {
    const { id } = await params;
    const comment = comments.find(c => c.id === parseInt(id));
    if (!comment) {
        return Response.json({ error: "Comment not found" }, { status: 404 });
    }
    const { text } = await request.json();
    comment.text = text;
    return Response.json(comment);
}

export async function DELETE(request: Request, { params }: { params: Promise<{id: string}> }) {
    const { id } = await params;
    const index = comments.findIndex(c => c.id === parseInt(id));
    if (index === -1) {
        return Response.json({ error: "Comment not found" }, { status: 404 });
    }
    comments.splice(index, 1);
    return Response.json({ message: "Comment deleted successfully" });
}