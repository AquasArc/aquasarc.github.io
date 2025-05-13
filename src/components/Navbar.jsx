import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="navbar-start">
        <a href="#home" className="btn btn-ghost normal-case text-xl">Anton Lim</a>
      </div>

      <div className="navbar-end hidden lg:flex">
        <a href="#home" className="btn btn-ghost">Home</a>
        <a href="#about" className="btn btn-ghost">About</a>
        <a href="#projects" className="btn btn-ghost">Projects</a>
        <a href="#contact" className="btn btn-ghost">Contact</a>
      </div>

      <div className="navbar-end lg:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 left-0 bg-base-100 shadow-lg z-20">
          <a href="#home" className="block px-4 py-2 text-xl">Home</a>
          <a href="#about" className="block px-4 py-2 text-xl">About</a>
          <a href="#projects" className="block px-4 py-2 text-xl">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-xl">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
