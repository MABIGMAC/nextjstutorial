"use client"
import { useState } from "react";
import "./globals.css"
interface WrapperProps {
  children: React.ReactNode
}

const ErrorSimulater = ({message = "An error occurred"}: {message?: string}) => {
  const [error, setError] = useState<boolean>(false);
  if (error) {
    throw new Error(message);
  }
  return (
    <div>
      <button className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold" onClick={() => setError(true)}>Simulate Error</button>
      <p>Click the button to simulate an error.</p>
    </div>
  );
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Error Simulation</h1>
      <ErrorSimulater />
      <div className="mt-4 p-4 border rounded shadow-lg bg-white">
        {children}
      </div>
    </div>
  );
}