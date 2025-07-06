import Counter from "@/components/counter";
import NavBar from "@/components/navbar";
import Search from "@/components/search";
import Link from "next/link";

export default function Home() {
    return (<>
    <NavBar/>
    <Search/>
    <h1>Hello World@</h1>
    <Counter/>
    <Link href="/render-about">
    render about
    </Link>
    <Link href="/render-dashboard">
    render dashboard
    </Link>

    <Link href="/products">Go to Products Page</Link>
    <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
    <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>)
}