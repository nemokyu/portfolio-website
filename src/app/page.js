import Image from 'next/image';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from "./components/Projects";
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import EmailSection from './components/EmailMe';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className='container my-24 mx-auto px-12 py-6'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact className='grid-col-1'/>
      </div>
      <Footer />
    </main>
    
  )
}
