import { useState } from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import './SocialRail.css';

const socials = [
  { name: 'Instagram', Icon: FaInstagram }, { name: 'TikTok', Icon: FaTiktok },
  { name: 'Facebook', Icon: FaFacebook }, { name: 'X', Icon: FaXTwitter }, { name: 'YouTube', Icon: FaYoutube },
];

export default function SocialRail() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`social-rail${isOpen ? ' social-rail--open' : ''}`}>
      <nav className="social-rail__links" aria-label="Redes sociales" aria-hidden={!isOpen}>
        {socials.map(({ name, Icon }) => (
          <a key={name} href="#" aria-label={name} tabIndex={isOpen ? 0 : -1}><Icon /></a>
        ))}
      </nav>
      <button
        className="social-rail__toggle"
        type="button"
        aria-label={isOpen ? 'Ocultar redes sociales' : 'Mostrar redes sociales'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m14.5 5-7 7 7 7" />
        </svg>
      </button>
    </aside>
  );
}
