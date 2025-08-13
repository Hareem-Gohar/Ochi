import { useEffect } from 'react'
import About from './components/About'
import Cards from './components/Cards'
import EyeSection from './components/EyeSection'
import HeroSection from './components/HeroSection'
import Marquee from './components/Marquee'
import Navbar from './components/navbar'
import Projects from './components/Projects'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Reviews from './components/Reviews'
function App() {
 useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <HeroSection />
      <Marquee />
      <About />
      <EyeSection />
      <Projects /> 
      <Reviews />
      <Cards />
     
    </div>
  )
}

export default App
