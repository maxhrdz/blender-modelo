import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Barra de navegación fija con enlaces a las secciones principales
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  const navLinks = (
    <ul className="flex flex-col gap-6 text-lg font-medium text-muted md:flex-row md:items-center md:gap-10 md:text-sm">
      <li>
        <a href="#inicio" onClick={closeMenu} className="hover:text-primary transition-colors">
          Inicio
        </a>
      </li>
      <li>
        <a href="#servicios" onClick={closeMenu} className="hover:text-primary transition-colors">
          Servicios
        </a>
      </li>
      <li>
        <a href="#nosotros" onClick={closeMenu} className="hover:text-primary transition-colors">
          Nosotros
        </a>
      </li>
      <li>
        <a href="#contacto" onClick={closeMenu} className="hover:text-primary transition-colors">
          Contacto
        </a>
      </li>
    </ul>
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 bg-light/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-2xl font-bold text-primary">
          Visionaria
        </a>

        <div className="hidden items-center gap-10 md:flex">{navLinks}</div>

        <a href="#contacto" className="btn-primary hidden md:inline-flex">
          Contáctanos
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-full border border-primary/10 p-3 text-primary shadow-soft transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
          aria-label="Abrir menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className="px-6 pb-6">
              {navLinks}
              <a
                href="#contacto"
                onClick={closeMenu}
                className="btn-primary mt-6 w-full text-center"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
