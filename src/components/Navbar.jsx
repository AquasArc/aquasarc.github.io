import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="navbar-start">
        <a href="#home" className="btn btn-ghost normal-case text-xl">
          Anton Lim
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-end hidden lg:flex space-x-2">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="btn btn-ghost transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Toggle Button */}
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
        <div className="lg:hidden absolute top-16 right-0 left-0 bg-base-100 shadow-lg z-20">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-xl transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
