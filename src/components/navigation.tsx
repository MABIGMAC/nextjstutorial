import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navigation() {
    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            borderBottom: '1px solid #eaeaea',
            background: '#000'
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>
            NextJS app
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: '#fff' }}>
                <SignedOut>

                <SignInButton mode="modal"/>
                </SignedOut>
                <SignedIn>

                <SignOutButton/>
                {/* <UserButton /> */}
                <Link href={"/user-profile"} style={{ color: '#fff', textDecoration: 'none' }}>
                Profile
                </Link>
                </SignedIn>
            </div>
        </nav>
    );
}