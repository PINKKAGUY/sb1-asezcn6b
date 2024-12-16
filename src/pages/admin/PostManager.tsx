import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

const initialPosts = [
  {
    id: 1,
    author: 'Marie L.',
    content: 'La séance de Deep Healing d\'aujourd\'hui était incroyable !',
    likes: 12,
    comments: 3,
    timestamp: '2h',
  },
  // Add more initial posts
];

export default function PostManager() {
  const [posts, setPosts] = useState(initialPosts);

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Gestion des Messages</h2>
      </div>

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Auteur</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Message</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">J'aimes</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Commentaires</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Il y a</th>
              <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                  {post.author}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">{post.content}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.likes}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.comments}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.timestamp}</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}