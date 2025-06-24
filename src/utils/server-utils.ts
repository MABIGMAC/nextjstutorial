import "server-only"

export const serverSideFunction = () => {
    // This function is only executed on the server side
    console.log("This is a server-side function");
    return "Server response";
}