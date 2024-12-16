import { motion } from 'framer-motion';
import { ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const upcomingEvents = [
  {
    id: 1,
    title: 'Retraite Méditative',
    description: 'Un weekend d\'immersion pour approfondir votre pratique méditative',
    date: '15-17 Mars 2024',
    time: '9:00 - 18:00',
    location: 'Centre Pure Energy - Paris',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200',
    price: '490€',
    spots: 12,
    instructor: 'Sarah Martin'
  },
  {
    id: 2,
    title: 'Atelier Sound Healing',
    description: 'Découvrez le pouvoir thérapeutique des bols tibétains',
    date: '23 Mars 2024',
    time: '14:00 - 17:00',
    location: 'Centre Pure Energy - Paris',
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200',
    price: '120€',
    spots: 8,
    instructor: 'Marc Dubois'
  },
  {
    id: 3,
    title: 'Masterclass Breathwork',
    description: 'Techniques avancées de respiration pour la transformation',
    date: '30 Mars 2024',
    time: '10:00 - 16:00',
    location: 'En ligne',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200',
    price: '180€',
    spots: 20,
    instructor: 'Julie Chen'
  }
];

export default function Events() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000')`,
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
              Événements & Ateliers
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Participez à nos événements transformateurs et rejoignez une communauté passionnée
              par le développement personnel et spirituel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Prochains Événements
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Réservez Votre Place
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des expériences uniques pour votre transformation personnelle
            </p>
          </div>

          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {upcomingEvents.map((event) => (
              <motion.article
                key={event.id}
                className="flex flex-col items-start"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={event.date} className="text-gray-500">
                      {event.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {event.price}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {event.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <ClockIcon className="mr-2 h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="mr-2 h-4 w-4" />
                      {event.spots} places disponibles
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                      Réserver ma place
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Calendrier des Événements
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Planifiez votre parcours de transformation
            </p>
          </div>

          <div className="mt-16">
            {/* Calendar component will be added here */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-center text-gray-600">
                Le calendrier interactif sera bientôt disponible.
                En attendant, consultez nos événements ci-dessus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Restez Informé
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Recevez en avant-première les dates de nos prochains événements
            </p>
            <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
              <input
                type="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Entrez votre email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}