import { motion } from 'motion/react';
import { scrollRevealProps } from '../../../../shared/animations/scrollReveal';

export default function Mascot() {
  return <motion.img className="mascot" src="/images/features-mascot.svg" alt="" aria-hidden="true" {...scrollRevealProps} />;
}
