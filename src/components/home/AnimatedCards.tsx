import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Méditation Guidée',
    description: 'Explorez des techniques de méditation avancées pour une paix intérieure profonde',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Soins Énergétiques',
    description: 'Harmonisez vos chakras et restaurez l\'équilibre de votre corps énergétique',
    image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1200',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Développement Personnel',
    description: 'Transformez votre vie avec des outils de développement personnel puissants',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1200',
    color: 'from-amber-500 to-pink-500'
  }
];

export default function AnimatedCards() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nos Services Premium
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Des solutions personnalisées pour votre transformation
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} mix-blend-multiply opacity-90`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-200">{card.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}