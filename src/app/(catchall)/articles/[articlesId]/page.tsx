"use client"
import Link from "next/link";
import { use } from "react";

export default function Pages({params, searchParams}: {
    params: Promise<{articlesId: string}>
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
}
) {
    const { articlesId } = use(params);
    const { lang="en" } = use(searchParams);
    
    return (
        <div>
            <h1>Article Details for {articlesId} {lang}</h1>
            <p>This is the article details page.</p>
            <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
            <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
        </div>
    );
    
}