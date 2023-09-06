import { motion } from "framer-motion";

function FadeInLeft({children}){

  const windowWidth = window.innerWidth;

  const animationValues = windowWidth < 768 ? { x: -150, opacity: 1 } : { x: -800, opacity: 1 };

  return (
    <motion.div
      initial={animationValues}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInLeft