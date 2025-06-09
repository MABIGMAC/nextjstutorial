import Link from "next/link";

export default async function Pages({params, searchParams}: {
    params: Promise<{articlesId: string}>
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
}
) {
    const { articlesId } = await params;
    const { lang="en" } = await searchParams;
    
    return (
        <div>
            <h1>Article Details for {articlesId}</h1>
            <p>This is the article details page.</p>
            <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
            <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
        </div>
    );
    
}