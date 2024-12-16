import { motion } from 'framer-motion';
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  instructor: string;
  duration: string;
  level: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Programme Deep Healing',
    description: 'Un parcours complet de guérison énergétique sur 12 semaines',
    price: 997,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200',
    rating: 5,
    reviews: 89,
    category: 'Programmes',
    instructor: 'Sarah Martin',
    duration: '12 semaines',
    level: 'Tous niveaux'
  },
  // Add more products here
];

export default function Marketplace() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <button className="relative rounded-full bg-white p-2 text-gray-400 hover:text-gray-500">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center"
                />
                <div className="flex items-end p-4">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-medium text-white">{product.price}€</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <div className="mt-2 flex items-center">
                  {[...Array(product.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{product.reviews} avis</span>
                </div>
                <div className="mt-4">
                  <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}