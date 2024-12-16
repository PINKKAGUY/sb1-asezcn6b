import { useState, useEffect } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { createResource, deleteResource, fetchResources } from '../../services/resourceService';
import type { Resource } from '../../types/resource';

const emptyResource = {
  name: '',
  description: '',
  type: 'pdf',
  category: 'meditation',
  accessLevel: 'premium',
  url: '',
  price: 0,
};

export default function ResourceManager() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isAddingResource, setIsAddingResource] = useState(false);
  const [newResource, setNewResource] = useState(emptyResource);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const data = await fetchResources();
        setResources(data);
      } catch (error) {
        console.error('Error loading resources:', error);
      }
    };

    loadResources();
  }, []);

  const handleAddResource = async () => {
    try {
      const formData = new FormData();
      
      // Add resource data to FormData
      Object.entries(newResource).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      await createResource(formData);
      const updatedResources = await fetchResources();
      setResources(updatedResources);
      setNewResource(emptyResource);
      setSelectedFile(null);
      setIsAddingResource(false);
    } catch (error) {
      console.error('Error creating resource:', error);
      alert('Failed to create resource. Please try again.');
    }
  };

  const handleDeleteResource = async (id: string) => {
    try {
      if (window.confirm('Are you sure you want to delete this resource?')) {
        await deleteResource(id);
        const updatedResources = await fetchResources();
        setResources(updatedResources);
      }
    } catch (error) {
      console.error('Error deleting resource:', error);
      alert('Failed to delete resource. Please try again.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Gestion des Ressources</h2>
        <button
          onClick={() => setIsAddingResource(true)}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Ajouter une ressource
        </button>
      </div>

      {isAddingResource && (
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Nom de la ressource"
            value={newResource.name}
            onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <textarea
            placeholder="Description"
            value={newResource.description}
            onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="grid grid-cols-2 gap-4">
            <select
              value={newResource.type}
              onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
              className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="pdf">PDF</option>
              <option value="video">Vidéo</option>
              <option value="audio">Audio</option>
            </select>
            <select
              value={newResource.category}
              onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
              className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="meditation">Méditation</option>
              <option value="breathwork">Breathwork</option>
              <option value="sound-healing">Sound Healing</option>
            </select>
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsAddingResource(false)}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              onClick={handleAddResource}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Ajouter
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Nom</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Catégorie</th>
              <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                  {resource.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{resource.type}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {resource.category}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                    onClick={() => console.log('Edit', resource.id)}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteResource(resource.id)}
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