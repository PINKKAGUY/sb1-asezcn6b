import { useState } from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: 'L\'Énergie',
    description: 'Le moment est venu de recharger vos batteries et de vous reconnecter à votre source d\'énergie.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200',
  },
  {
    id: 2,
    title: 'La Transformation',
    description: 'Une période de changement positif s\'annonce. Embrassez cette transformation.',
    image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=1200',
  },
  {
    id: 3,
    title: 'L\'Harmonie',
    description: 'Trouvez l\'équilibre entre votre corps, votre esprit et votre âme.',
    image: 'https://images.unsplash.com/photo-1531171673193-06ab3c43e4ae?q=80&w=1200',
  },
];

export default function OracleCard() {
  const [currentCard, setCurrentCard] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const drawCard = () => {
    if (!isRevealed) {
      const randomCard = Math.floor(Math.random() * cards.length);
      setCurrentCard(randomCard);
      setIsRevealed(true);
    }
  };

  const resetCards = () => {
    setCurrentCard(null);
    setIsRevealed(false);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tirage Oracle
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Recevez un message guidant pour votre journée
          </p>
        </div>

        <motion.div
          className="mx-auto mt-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            {currentCard !== null ? (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${cards[currentCard].image})` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {cards[currentCard].title}
                </h3>
                <p className="text-gray-600">{cards[currentCard].description}</p>
                <button
                  onClick={resetCards}
                  className="mt-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Tirer une nouvelle carte
                </button>
                </div>
              </motion.div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={drawCard}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Tirer une carte
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}