import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
    absolute: "Babagoush Products"}}

export default function Product() {
    return <>
    <Link href="/">
    Home
    </Link>
    <h1>Product Page</h1>;
    
    <h2>
        <Link href="/products/1">
        Product 1
        </Link>
    </h2>
    <h2>
        <Link href="/products/2">
        Product 2
        </Link>
    </h2>
    </> 
}