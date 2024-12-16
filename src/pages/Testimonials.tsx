import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    content: "Le Deep Healing a complètement transformé ma vie. Après seulement quelques séances, j'ai ressenti un changement profond dans mon énergie et ma clarté mentale.",
    author: {
      name: 'Marie Laurent',
      role: 'Cliente depuis 6 mois',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200'
    },
    rating: 5,
    service: 'Deep Healing',
    date: 'Mars 2024'
  },
  {
    id: 2,
    content: "Les séances de Sound Healing sont une expérience unique. La vibration des bols tibétains apporte une paix profonde que je n'avais jamais ressentie auparavant.",
    author: {
      name: 'Thomas Bernard',
      role: 'Client depuis 1 an',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200'
    },
    rating: 5,
    service: 'Sound Healing',
    date: 'Février 2024'
  },
  {
    id: 3,
    content: "Le programme de Breathwork m'a permis de gérer mon stress et mon anxiété de manière naturelle. Je me sens plus calme et centrée au quotidien.",
    author: {
      name: 'Sophie Martin',
      role: 'Cliente depuis 3 mois',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200'
    },
    rating: 5,
    service: 'Breathwork',
    date: 'Mars 2024'
  }
];

const featuredTestimonial = {
  content: "Pure Energy Coaching a été une révélation dans mon parcours de développement personnel. L'approche holistique et la qualité des praticiens sont exceptionnelles. Je recommande vivement à tous ceux qui cherchent une transformation profonde et durable.",
  author: {
    name: 'Julie Chen',
    role: 'Cliente Premium',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200'
  },
  rating: 5,
  service: 'Abonnement Annuel',
  date: 'Mars 2024'
};

const stats = [
  { label: 'Clients Satisfaits', value: '2,000+' },
  { label: 'Séances Réalisées', value: '5,000+' },
  { label: 'Note Moyenne', value: '4.9/5' },
  { label: 'Recommandation', value: '98%' },
];

export default function Testimonials() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Témoignages
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Découvrez les expériences transformatrices de nos clients et leurs parcours inspirants.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.dl
            className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <motion.figure 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>"{featuredTestimonial.content}"</p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={featuredTestimonial.author.image}
                alt={featuredTestimonial.author.name}
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{featuredTestimonial.author.name}</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">{featuredTestimonial.author.role}</div>
              </div>
              <div className="mt-2 flex justify-center">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex flex-col justify-between bg-white p-8 shadow-lg rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-indigo-600 font-medium">{testimonial.service}</span>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-8">"{testimonial.content}"</blockquote>
                </div>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                  />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.author.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Commencez votre transformation aujourd'hui
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Rejoignez notre communauté et découvrez le pouvoir de la transformation personnelle.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/pricing"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Voir les offres
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-white">
                En savoir plus <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}