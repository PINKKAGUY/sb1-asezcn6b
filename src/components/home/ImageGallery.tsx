import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200',
    alt: 'Séance de méditation en groupe',
    title: 'Méditation Collective',
    description: 'Rejoignez nos séances de méditation guidée en groupe'
  },
  {
    src: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200',
    alt: 'Séance de sound healing',
    title: 'Sound Healing',
    description: 'Découvrez le pouvoir thérapeutique des bols tibétains'
  },
  {
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200',
    alt: 'Séance de breathwork',
    title: 'Breathwork',
    description: 'Apprenez des techniques de respiration transformatrices'
  }
];

export default function ImageGallery() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Pratiques en Images
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez l'ambiance apaisante de nos séances et la richesse de nos pratiques
          </p>
        </div>
        <motion.div 
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}