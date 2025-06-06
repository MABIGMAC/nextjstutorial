export default function ProductLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <header
        style={{
          backgroundColor: 'lightblue',
          padding: '10px',
        }}
      >
        <p>Product Header</p>
      </header>
      {children}
      <footer
        style={{
          backgroundColor: 'red',
          padding: '10px',
        }}
      >
        <p>Product Footer</p>
      </footer>
    </div>
  );
    
}