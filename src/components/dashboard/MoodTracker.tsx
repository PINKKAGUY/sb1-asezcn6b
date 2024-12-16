import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  SunIcon,
  CloudIcon,
  MoonIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';

const moodData = [
  { day: 'Lun', mood: 85, icon: SunIcon },
  { day: 'Mar', mood: 75, icon: CloudIcon },
  { day: 'Mer', mood: 90, icon: SunIcon },
  { day: 'Jeu', mood: 70, icon: CloudIcon },
  { day: 'Ven', mood: 95, icon: SunIcon },
  { day: 'Sam', mood: 88, icon: SunIcon },
  { day: 'Dim', mood: 92, icon: SunIcon },
];

const getMoodIcon = (mood: number) => {
  if (mood >= 80) return SunIcon;
  if (mood >= 60) return CloudIcon;
  return MoonIcon;
};

export default function MoodTracker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMood, setNewMood] = useState(75);
  const [moodNote, setMoodNote] = useState('');

  const handleAddMood = () => {
    // Here you would typically update your mood data
    console.log('New mood:', newMood, 'Note:', moodNote);
    setIsModalOpen(false);
    setMoodNote('');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-lg bg-white shadow"
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Suivi de l'Humeur
            </h3>
            <ChartBarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-7 gap-2">
              {moodData.map((data) => {
                const Icon = getMoodIcon(data.mood);
                return (
                  <div
                    key={data.day}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="text-sm font-medium text-gray-500">{data.day}</div>
                    <div
                      className={`p-2 rounded-full ${
                        data.mood >= 80
                          ? 'bg-green-100 text-green-600'
                          : data.mood >= 60
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">{data.mood}%</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Ajouter une entrée
            </button>
          </div>
        </div>
      </motion.div>

      <Transition.Root show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <span className="sr-only">Fermer</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Ajouter une entrée d'humeur
                      </Dialog.Title>
                      <div className="mt-6 space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Niveau d'humeur ({newMood}%)
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={newMood}
                            onChange={(e) => setNewMood(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Note (optionnel)
                          </label>
                          <textarea
                            value={moodNote}
                            onChange={(e) => setMoodNote(e.target.value)}
                            rows={3}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                      onClick={handleAddMood}
                    >
                      Enregistrer
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Annuler
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}