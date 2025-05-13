import { useState, useEffect } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-base-100 shadow-md' : 'bg-transparent'}`}
    >
      <div className="navbar-start">
        <a href="#home" className="btn btn-ghost normal-case text-xl">
          Anton Lim
        </a>
      </div>

      <div className="navbar-end hidden lg:flex">
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="btn btn-ghost transition-colors duration-200 hover:bg-base-200"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 left-0 bg-base-100 shadow-md z-20">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-4 py-2 text-xl hover:bg-base-200 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
