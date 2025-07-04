import { SignInButton, SignOutButton } from '@clerk/nextjs';
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
                <SignInButton mode="modal"/>
                <SignOutButton/>
            </div>
        </nav>
    );
}