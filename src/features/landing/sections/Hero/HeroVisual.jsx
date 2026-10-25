import { motion } from 'motion/react';
import PhoneMockup from './PhoneMockup';
import { revealVariants } from '../../../../shared/animations/scrollReveal';
import './HeroVisual.css';

export default function HeroVisual() {
  return (
    <motion.div className="hero-visual" variants={revealVariants}>
      <div className="hero-visual__shape" aria-hidden="true" />
      <PhoneMockup className="hero-visual__phone hero-visual__phone--back">
      </PhoneMockup>
      <PhoneMockup className="hero-visual__phone hero-visual__phone--front">
      </PhoneMockup>
    </motion.div>
  );
}
