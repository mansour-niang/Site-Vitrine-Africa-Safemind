import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current route

  return (
    <header className="fixed w-full z-50 bg-[#ffffff]/80 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            <img src="./src/assets/SAFMIND-removebg-preview.png" alt="Logo" className='w-48 h-19'/>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" isActive={location.pathname === '/'}>Accueil</NavLink>
            <NavLink href="/about" isActive={location.pathname === '/about'}>À propos</NavLink>
            <NavLink href="/product" isActive={location.pathname === '/product'}>Nevermind</NavLink>
            <NavLink href="/compliance" isActive={location.pathname === '/compliance'}>Conformité</NavLink>
            <NavLink href="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00A675]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" isActive={location.pathname === '/'} onClick={() => setIsMenuOpen(false)}>
                Accueil
              </MobileNavLink>
              <MobileNavLink href="/about" isActive={location.pathname === '/about'} onClick={() => setIsMenuOpen(false)}>
                À propos
              </MobileNavLink>
              <MobileNavLink href="/product" isActive={location.pathname === '/product'} onClick={() => setIsMenuOpen(false)}>
                Nevermind
              </MobileNavLink>
              <MobileNavLink href="/compliance" isActive={location.pathname === '/compliance'} onClick={() => setIsMenuOpen(false)}>
                Conformité
              </MobileNavLink>
              <MobileNavLink href="/contact" isActive={location.pathname === '/contact'} onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

// NavLink component for desktop menu
function NavLink({ href, children, isActive }) {
  return (
    <Link
      to={href}
      className={`font-bold transition-colors duration-200 ${
        isActive ? 'text-[#00A675]' : 'text-[#3D3D3D] hover:text-[#00A675]'
      }`}
      style={{ fontFamily: 'Open Sans, sans-serif' }}
    >
      {children}
    </Link>
  );
}

// MobileNavLink component for mobile menu
function MobileNavLink({ href, children, isActive, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`block transition-colors duration-200 ${
        isActive ? 'text-[#00A675]' : 'text-[#9C9C9C] hover:text-[#00A675]'
      }`}
      style={{ fontFamily: 'Open Sans, sans-serif' }}
    >
      {children}
    </Link>
  );
}
