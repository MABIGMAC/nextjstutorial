import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';

export const metadata = {
  title: 'NextJsTutorial',
  description: 'Generated by Next.js',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <ThemeProvider>

      <body>
        <header
          style={{
            backgroundColor: 'lightblue',
            padding: '10px',
          }}
          >
          <p>Header</p>
        </header>
          <Navigation/>
        {children}
        
        <footer
          style={{
            
            backgroundColor: 'lightblue',
            padding: '10px',
          }}>
          <p>Footer</p>
        </footer>
        </body>
        </ThemeProvider>
    </html>
    </ClerkProvider>
  );
}