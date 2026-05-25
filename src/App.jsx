import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutBook from './components/sections/AboutBook';
import InsideBook from './components/sections/InsideBook';
import Quotes from './components/sections/Quotes';
import Author from './components/sections/Author';
import Preview from './components/sections/Preview';
import Reviews from './components/sections/Reviews';
import Buy from './components/sections/Buy';
import FAQ from './components/sections/FAQ';
import ClosingQuote from './components/sections/ClosingQuote';
import Footer from './components/layout/Footer';
import FloatingButton from './components/layout/FloatingButton';

function App() {
  // Enable smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          const offset = 80; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative text-white">
      <div className="grain" />
      <Navbar />
      <Hero />
      <AboutBook />
      <InsideBook />
      <Quotes />
      <Author />
      <Preview />
      <Reviews />
      <Buy />
      <FAQ />
      <ClosingQuote />
      <Footer />
      
      {/* Floating Button - Bottom Right */}
      <FloatingButton />
    </div>
  );
}

export default App;