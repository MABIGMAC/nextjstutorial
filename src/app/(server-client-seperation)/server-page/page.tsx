import { serverSideFunction } from "@/utils/server-utils";

export default function ServerPage() {
    const serverResponse = serverSideFunction();
    return (
        <div>
            Server Page {serverResponse}
        </div>
    )
}