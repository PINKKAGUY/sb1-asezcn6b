import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[50vh] overflow-hidden bg-black"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2000')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ y, opacity }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Éveillez Votre Potentiel
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Découvrez une approche holistique pour transformer votre vie et libérer votre énergie intérieure
          </p>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-black/50" />
    </motion.div>
  );
}