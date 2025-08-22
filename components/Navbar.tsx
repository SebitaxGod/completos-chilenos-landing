import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-completo-tomate">
                🌭 Completos Chilenos
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-900 hover:text-completo-tomate px-3 py-2 text-sm font-medium transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-900 hover:text-completo-tomate px-3 py-2 text-sm font-medium transition-colors"
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-900 hover:text-completo-tomate px-3 py-2 text-sm font-medium transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-900 hover:text-completo-tomate px-3 py-2 text-sm font-medium transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-completo-tomate focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-gray-900 hover:text-completo-tomate px-3 py-2 text-base font-medium w-full text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block text-gray-900 hover:text-completo-tomate px-3 py-2 text-base font-medium w-full text-left"
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="block text-gray-900 hover:text-completo-tomate px-3 py-2 text-base font-medium w-full text-left"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block text-gray-900 hover:text-completo-tomate px-3 py-2 text-base font-medium w-full text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
