import { motion } from 'motion/react';
import { steps } from '../../data/content';
import { scrollRevealProps, staggerVariants, revealVariants } from '../../../../shared/animations/scrollReveal';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="how container" id="como-funciona">
      <motion.h2 {...scrollRevealProps}>¿Cómo funciona Univoz?<span>.</span></motion.h2>
      <motion.p className="how__sub" {...scrollRevealProps}>Así de fácil puedes empezar a comunicarte</motion.p>

      <motion.ol
        className="how__steps"
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealProps.viewport}
        variants={staggerVariants}
      >
        {steps.map((s) => (
          <motion.li key={s.id} className={`step ${s.center ? 'step--center' : ''}`} variants={revealVariants}>
            <span className={`step__icon step__icon--${s.id}`} aria-hidden="true">
              <img src={s.icon} alt="" />

              {s.center && (
                <>
                  <i className="link link--left" />
                  <i className="link link--right" />
                </>
              )}
            </span>
            <h3>{s.title}</h3>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}