import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingShapes from './FloatingShapes';

export default function Hero() {
  return (
    <div 
      className="relative isolate overflow-hidden bg-cover bg-center min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000')`
      }}
    >
      <FloatingShapes />
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <motion.div
          className="px-4 sm:px-6 lg:px-0 lg:pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-16 sm:mt-24 lg:mt-16">
                <motion.a
                  href="#"
                  className="inline-flex space-x-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    Nouveauté
                  </span>
                </motion.a>
              </div>
              <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Pure Energy Coaching App
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-200">
                Transformez votre énergie, libérez votre potentiel. Découvrez une approche holistique
                du bien-être à travers nos services de coaching personnalisés.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Découvrir l'offre
                  </Link>
                </motion.div>
                <Link to="/about" className="text-sm font-semibold leading-6 text-white hover:text-indigo-200">
                  En savoir plus <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}