import '../index.css';
import { useState } from 'react';
import { FileText, Github, Instagram, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-zinc-400">
        {/* Left: Logo + Links */}
        <div className="flex items-center space-x-8">
          <a href="/" onClick={() => window.location.reload()} className="text-xl font-bold text-white hover:text-teal-200">
            Muaaz Ahmed
          </a>
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#work" className="hover:text-teal-200">Work</a>
            <a href="#about" className="hover:text-teal-200">About</a>
            <a href="#projects" className="hover:text-teal-200">Projects</a>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center space-x-4 text-white">
          <a href="/Muaaz_Ahmed_Resume.pdf" target="_blank" className="hover:text-teal-200" title="Resume"><FileText /></a>
          <a href="https://github.com/muaazahmed03" target="_blank" className="hover:text-teal-200" title="GitHub"><Github /></a>
          <a href="https://www.instagram.com/muaaz_ahmed_03/" target="_blank" className="hover:text-teal-200" title="Instagram"><Instagram /></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} className="cursor-pointer text-white hover:text-teal-200" />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg text-white transform transition-all duration-600 ease-in-out origin-top ${
          menuOpen ? 'scale-y-100 h-[100vh]' : 'scale-y-0 h-0'
        } overflow-hidden z-40`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="flex flex-col items-start justify-start h-full space-y-6 text-lg px-6 pt-4">
          <span className="text-xl font-bold text-white hover:text-teal-200">Muaaz Ahmed</span>
          <br />
          <a href="#work" className="hover:text-teal-200" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" className="hover:text-teal-200" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="hover:text-teal-200" onClick={() => setMenuOpen(false)}>Projects</a>
          <hr className="w-full border-gray-500" />
          <a href="/Muaaz_Ahmed_Resume.pdf" target="_blank" className="hover:text-teal-200">Resume</a>
          <a href="https://github.com/muaazahmed03" target="_blank" className="hover:text-teal-200">GitHub</a>
          <a href="https://www.instagram.com/muaaz_ahmed_03/" target="_blank" className="hover:text-teal-200">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
