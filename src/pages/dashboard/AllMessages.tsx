import { motion } from 'framer-motion';
import { ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline';

const messages = [
  {
    id: 1,
    author: {
      name: 'Marie L.',
      imageUrl: '/images/avatars/marie.jpg',
    },
    content: 'La séance de Deep Healing d\'aujourd\'hui était incroyable ! Je me sens tellement plus légère et énergisée. 🌟',
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
    content: 'Quelqu\'un d\'autre a ressenti cette énergie puissante pendant la méditation de groupe ? C\'était vraiment spécial ! ✨',
    likes: 8,
    comments: 5,
    timestamp: '4h',
  },
  // Add more messages here
];

export default function AllMessages() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">Messages de la Communauté</h1>
            <p className="mt-2 text-sm text-gray-700">
              Explorez les discussions et partages de notre communauté spirituelle.
            </p>
          </div>
        </div>
        
        <motion.div 
          className="mt-8 flow-root"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul role="list" className="divide-y divide-gray-200">
            {messages.map((message) => (
              <li key={message.id} className="py-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {message.author.name}
                      <span className="ml-2 text-sm text-gray-500">il y a {message.timestamp}</span>
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{message.content}</p>
                    <div className="mt-2 flex space-x-6">
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-600">
                        <HeartIcon className="h-5 w-5" />
                        <span>{message.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-600">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        <span>{message.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}