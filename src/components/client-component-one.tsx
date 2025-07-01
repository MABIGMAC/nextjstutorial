"use client"
import ClientComponentTwo from "./client-component-two";

export default function ClientComponentOne() {
    console.log("Client Component One Rendered");   
    return <>
    <h1>Client Component One</h1>;
    <ClientComponentTwo />
    </>
}