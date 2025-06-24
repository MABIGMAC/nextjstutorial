// import { getRandomInt } from "./reviews/[reviewId]/page";

export default function ProductLayout({children}: {children: React.ReactNode}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading product details.");
  // } 
  
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