"use client";
import { serverSideFunction } from "@/utils/server-utils";

const serverResponse = serverSideFunction();
export default function ClientPage() {
    return (
        <div>
            Client Page {serverResponse}
        </div>
    )
}