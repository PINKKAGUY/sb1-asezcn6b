import { motion } from 'framer-motion';

const testimonials = [
  {
    content: 'Les séances de Deep Healing ont complètement transformé ma vie. Je me sens plus énergique et équilibrée.',
    author: 'Marie L.',
    role: 'Cliente depuis 6 mois',
  },
  {
    content: 'Les soins sonores sont une expérience unique. La vibration des bols tibétains apporte une paix profonde.',
    author: 'Thomas B.',
    role: 'Client depuis 1 an',
  },
  {
    content: 'La communauté est extraordinaire. Le soutien et le partage d\'expériences sont très enrichissants.',
    author: 'Sophie M.',
    role: 'Cliente depuis 3 mois',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Témoignages
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nos clients disent
          </p>
        </div>
        <motion.div
          className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={index}
                className="rounded-2xl bg-gray-50 p-8 text-sm leading-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <blockquote className="text-gray-900">
                  <p>{`"${testimonial.content}"`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}