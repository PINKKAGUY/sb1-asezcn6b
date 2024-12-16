import { motion } from 'framer-motion';
import { ChatBubbleLeftIcon, BookOpenIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const communityPosts = [
  {
    id: 1,
    author: {
      name: 'Marie Laurent',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200',
      role: 'Membre Premium'
    },
    content: 'La séance de Deep Healing d\'hier était incroyable ! Je me sens tellement plus légère et énergisée. 🌟',
    likes: 24,
    comments: 8,
    timeAgo: '2 heures'
  },
  {
    id: 2,
    author: {
      name: 'Thomas Bernard',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200',
      role: 'Praticien Certifié'
    },
    content: 'Je viens de terminer ma certification en Sound Healing. Tellement reconnaissant pour cette expérience transformatrice ! 🎵',
    likes: 45,
    comments: 12,
    timeAgo: '5 heures'
  }
];

const resources = [
  {
    id: 1,
    title: 'Guide de Méditation',
    type: 'PDF',
    icon: BookOpenIcon,
    downloads: 234
  },
  {
    id: 2,
    title: 'Séance Breathwork',
    type: 'Vidéo',
    icon: VideoCameraIcon,
    downloads: 156
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Cercle de Partage',
    date: '15 Mars 2024',
    participants: 12,
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200'
  },
  {
    id: 2,
    title: 'Méditation Collective',
    date: '20 Mars 2024',
    participants: 25,
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200'
  }
];

export default function Community() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000')`,
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
              Notre Communauté
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Rejoignez une communauté bienveillante de personnes engagées dans leur développement personnel et spirituel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feed Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                {/* Post Creation */}
                <div className="p-6 border-b">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-indigo-600"></div>
                    </div>
                    <div className="flex-grow">
                      <textarea
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Partagez votre expérience..."
                      />
                      <div className="mt-3 flex justify-end">
                        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                          Publier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts */}
                <div className="divide-y divide-gray-200">
                  {communityPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      className="p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.image}
                            alt={post.author.name}
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900">{post.author.name}</span>
                            <span className="text-sm text-gray-500">{post.author.role}</span>
                          </div>
                          <p className="mt-1 text-gray-600">{post.content}</p>
                          <div className="mt-4 flex items-center gap-6 text-sm">
                            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              {post.likes}
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                              <ChatBubbleLeftIcon className="h-5 w-5" />
                              {post.comments}
                            </button>
                            <span className="text-gray-500">{post.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Community Stats */}
              <motion.div
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notre Communauté</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">2,453</div>
                    <div className="text-sm text-gray-500">Membres</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">127</div>
                    <div className="text-sm text-gray-500">En ligne</div>
                  </div>
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ressources Populaires</h3>
                <div className="space-y-4">
                  {resources.map((resource) => (
                    <div key={resource.id} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <resource.icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium text-gray-900">{resource.title}</div>
                        <div className="text-sm text-gray-500">{resource.downloads} téléchargements</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Upcoming Events */}
              <motion.div
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Événements à Venir</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="group relative">
                      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="object-cover transform group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="mt-2">
                        <div className="font-medium text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-500">
                          {event.date} • {event.participants} participants
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Community CTA */}
      <div className="bg-indigo-600">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Prêt à rejoindre notre communauté ?</span>
            <span className="block text-indigo-200">Commencez votre voyage spirituel aujourd'hui.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Commencer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}