import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";
import ServerComponentTwo from "@/components/server-component-two";

export default function InterLeavingPage() {
    return (
        <>
        <h1>Interleaving Server and Client Components</h1>
        <ClientComponentOne />
        <ServerComponentOne />
        </>
    )
}