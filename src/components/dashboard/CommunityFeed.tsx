import { motion } from 'framer-motion';
import { ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline';

const posts = [
  {
    id: 1,
    author: {
      name: 'Marie L.',
      imageUrl: '/images/avatars/marie.jpg',
    },
    content:
      'La séance de Deep Healing d\'aujourd\'hui était incroyable ! Je me sens tellement plus légère et énergisée. 🌟',
    likes: 12,
    comments: 3,
    timestamp: '2h',
  },
  {
    id: 2,
    author: {
      name: 'Thomas B.',
      imageUrl: '/images/avatars/thomas.jpg',
    },
    content:
      'Quelqu\'un d\'autre a ressenti cette énergie puissante pendant la méditation de groupe ? C\'était vraiment spécial ! ✨',
    likes: 8,
    comments: 5,
    timestamp: '4h',
  },
  {
    id: 3,
    author: {
      name: 'Sophie M.',
      imageUrl: '/images/avatars/sophie.jpg',
    },
    content:
      'Je viens de terminer le nouveau guide de méditation. Les techniques sont super bien expliquées ! 🧘‍♀️',
    likes: 15,
    comments: 2,
    timestamp: '6h',
  },
];

export default function CommunityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-lg bg-white shadow"
    >
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Fil de la communauté
        </h3>
        <div className="mt-6 flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.id} className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {post.author.name}
                      <span className="ml-2 text-sm text-gray-500">il y a {post.timestamp}</span>
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{post.content}</p>
                    <div className="mt-2 flex space-x-6">
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-600">
                        <HeartIcon className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-600">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="/dashboard/messages"
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Voir tous les messages
          </a>
        </div>
      </div>
    </motion.div>
  );
}