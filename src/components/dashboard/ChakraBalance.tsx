import { useState } from 'react';
import { motion } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface Chakra {
  name: string;
  color: string;
  balance: number;
  description: string;
  info: string;
}

const chakras: Chakra[] = [
  {
    name: 'Couronne',
    color: 'bg-violet-500',
    balance: 85,
    description: 'Connection spirituelle',
    info: 'Le chakra couronne représente notre connexion au divin et à la conscience universelle.',
  },
  {
    name: 'Troisième Œil',
    color: 'bg-indigo-500',
    balance: 75,
    description: 'Intuition et clairvoyance',
    info: 'Ce chakra est le siège de l\'intuition et de la perception extrasensorielle.',
  },
  {
    name: 'Gorge',
    color: 'bg-blue-500',
    balance: 90,
    description: 'Expression et vérité',
    info: 'Le chakra de la gorge gouverne notre communication et notre expression personnelle.',
  },
  {
    name: 'Cœur',
    color: 'bg-green-500',
    balance: 95,
    description: 'Amour et compassion',
    info: 'Centre de l\'amour inconditionnel et de la compassion, ce chakra nous connecte à nous-mêmes et aux autres.',
  },
  {
    name: 'Plexus Solaire',
    color: 'bg-yellow-500',
    balance: 70,
    description: 'Pouvoir personnel',
    info: 'Siège de notre volonté et de notre pouvoir personnel, ce chakra régit notre confiance en soi.',
  },
  {
    name: 'Sacré',
    color: 'bg-orange-500',
    balance: 80,
    description: 'Créativité et émotions',
    info: 'Centre de notre créativité et de nos émotions, ce chakra influence notre capacité à ressentir et créer.',
  },
  {
    name: 'Racine',
    color: 'bg-red-500',
    balance: 88,
    description: 'Ancrage et sécurité',
    info: 'Le chakra racine nous connecte à la terre et nous procure un sentiment de sécurité et de stabilité.',
  },
];

export default function ChakraBalance() {
  const [selectedChakra, setSelectedChakra] = useState<Chakra | null>(null);
  const [isAdjusting, setIsAdjusting] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-lg bg-white shadow"
    >
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Équilibre des Chakras
        </h3>
        <div className="mt-6 space-y-4">
          {chakras.map((chakra) => (
            <div key={chakra.name} className="space-y-2">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setSelectedChakra(chakra)}>
                <div>
                  <p className="text-sm font-medium text-gray-900">{chakra.name}</p>
                  <p className="text-xs text-gray-500">{chakra.description}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900 mr-2">{chakra.balance}%</span>
                  <InformationCircleIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                </div>
              </div>
              <div 
                className="h-2 w-full bg-gray-100 rounded-full cursor-pointer"
                onClick={() => setIsAdjusting(true)}
              >
                <div
                  className={`h-2 rounded-full ${chakra.color}`}
                  style={{ width: `${chakra.balance}%` }}
                />
              </div>
              {selectedChakra?.name === chakra.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gray-50 p-4 rounded-md mt-2"
                >
                  <p className="text-sm text-gray-600">{chakra.info}</p>
                  {isAdjusting && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Ajuster l'équilibre
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={chakra.balance}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                        onChange={() => {/* Add balance adjustment logic */}}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button
            onClick={() => setSelectedChakra(null)}
            className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Fermer les détails
          </button>
        </div>
      </div>
    </motion.div>
  );
}