import Image from 'next/image';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from "./components/Projects";
import Footer from './components/Footer';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#25354f] ">
      <Navbar />
      <div className='container my-24 mx-auto px-12 py-6'>
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </main>
    
  )
}
