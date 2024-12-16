import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgb(238 242 255), rgb(250 245 255))',
            'linear-gradient(to bottom right, rgb(245 243 255), rgb(243 232 255))',
            'linear-gradient(to bottom right, rgb(238 242 255), rgb(250 245 255))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
}