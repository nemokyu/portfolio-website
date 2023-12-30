import Image from 'next/image';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className='container my-24 mx-auto px-12 py-6'>
        <Hero />
      </div>
      </main>
    
    
  )
}
