import { motion } from 'motion/react';
import { features } from '../../data/content';
import Mascot from './Mascot';
import { scrollRevealProps, staggerVariants, revealVariants } from '../../../../shared/animations/scrollReveal';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="caracteristicas">
      <div className="container">
        <motion.h2 {...scrollRevealProps}>Características</motion.h2>
        <motion.p className="features__intro" {...scrollRevealProps}>Univoz está diseñada para crear un mundo más inclusivo, potencialmente accesible y conectado.</motion.p>
        <Mascot />
        <motion.ul
          className="features__grid"
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealProps.viewport}
          variants={staggerVariants}
        >
          {features.map((f) => (
            <motion.li key={f.title} className="feature" variants={revealVariants}>
              <span className="feature__icon" style={{ background: f.color }} aria-hidden="true">
                <img src={f.icon} alt="" />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
