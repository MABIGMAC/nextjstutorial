import Form from "next/form";

export default function Search() {
    return (
        <Form action={"/products-db"} className="flex gap-2">
            <input
                name="query"
                className="flex-1 px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Search products..."/>
            <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Search
            </button>
        </Form>
    )
}