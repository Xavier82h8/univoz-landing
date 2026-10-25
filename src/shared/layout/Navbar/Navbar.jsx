import { useState } from 'react';
import { motion } from 'motion/react';
import Button from '../../ui/Button';
import { navLinks } from '../../../features/landing/data/content';
import './Navbar.css';

export default function Navbar({ homeHref = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const homeLink = (hash) => `${homeHref}${hash}`;

  return (
    <motion.header
      className={`navbar container${menuOpen ? ' navbar--open' : ''}`}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href={homeLink('#inicio')} className="navbar__brand">
        <img className="navbar__logo" src="/images/univoz-logo.svg" alt="" aria-hidden="true" />
        <span>UNIVOZ</span>
      </a>
      <button
        className="navbar__toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="navbar-menu" className="navbar__links" aria-label="Principal">
        {navLinks.map((link) => (
          <a className="navbar__item" key={link.href} href={homeLink(link.href)} onClick={closeMenu}>{link.label}</a>
        ))}
        <a className="navbar__item navbar__contact" href={homeLink('#contacto')} onClick={closeMenu}>Contacto</a>
        <div className="navbar__download-row">
          <Button variant="pill" href={homeLink('#descargar')} onClick={closeMenu}>Descargar</Button>
        </div>
      </nav>
    </motion.header>
  );
}
