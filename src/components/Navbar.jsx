import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'projects', 'contact'];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top >= -300) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-base-100/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="navbar-start">
        <a href="#home" className="btn btn-ghost normal-case text-xl">
          Anton Lim
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-end hidden lg:flex gap-16">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`btn btn-ghost capitalize transition-all duration-200 ${
              activeSection === item
                ? 'bg-primary text-primary-content'
                : 'hover:bg-base-200'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="navbar-end lg:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-4 left-4 bg-base-100 rounded-box shadow-xl p-4 z-50 space-y-3">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`block px-4 py-2 text-lg rounded-md capitalize transition-all duration-200 ${
                activeSection === item
                  ? 'bg-primary text-primary-content'
                  : 'hover:bg-base-200'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
