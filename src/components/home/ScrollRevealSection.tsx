import { motion } from 'framer-motion';

const features = [
  {
    title: 'Méditation Guidée',
    description: 'Des séances personnalisées pour développer votre pratique méditative',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200'
  },
  {
    title: 'Soins Énergétiques',
    description: 'Harmonisation des chakras et rééquilibrage énergétique',
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200'
  },
  {
    title: 'Développement Personnel',
    description: 'Accompagnement sur mesure pour votre évolution spirituelle',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200'
  }
];

export default function ScrollRevealSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Découvrez Nos Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Une approche holistique pour votre bien-être et votre développement spirituel
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {feature.description}
                </p>
                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    En savoir plus
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}