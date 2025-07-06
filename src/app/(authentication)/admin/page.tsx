import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function Admin() {
    const client = await clerkClient();
    const users = (await client.users.getUserList()).data
    return (
        <>
            {
                users.map((user) => {
                    return (
                        <div key={user.id} className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md m-2 ${users.indexOf(user) % 2 === 0 ? 'bg-gray-300' : 'bg-white'}">
                            <div className="text-lg font-semibold mb-2">{user.firstName} {user.lastName}</div>
                            <div className="text-sm text-gray-600 mb-2">Email: {user.emailAddresses[0]?.emailAddress}</div>
                            <div className="text-sm text-gray-600 mb-2">Role: {user.publicMetadata.role as string}</div>
                            <form action={setRole} className="flex flex-col items-center">
                                <input type="hidden" name="id" value={user.id} />
                                <select name="role" className="mb-2 p-1 border rounded">
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="super-admin">Super Admin</option>
                                </select>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">Set Role</button>
                                </form>
                                <form action={removeRole} className="flex flex-col items-center">
                                    <input type="hidden" name="id" value={user.id} />
                                    <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Remove Role</button>
                                </form>
                        </div>
                    )
                })

            }
        </>
    )
}