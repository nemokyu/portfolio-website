import Image from 'next/image';
import Hero from "./components/Hero";
import Container from 'postcss/lib/container';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className='container mx-auto px-12 py-6'>
        <Hero />
      </div>
      </main>
    
    
  )
}