"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: '/signin', label: 'SignIn' },
  { href: '/register', label: 'Register' },
  { href: '/forgot-password', label: 'Forgot Password' },

];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname();
  return (
    <>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 rounded p-2 mb-4"
      />
    </div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href) && link.href !== '/';

        return (<Link className={isActive ? "font-bold mr-4": 'text-blue-500 mr-4'} key={link.href} href={link.href}>
          {link.label}
        </Link>)
      })}
      {children}
    </>
  );
}
