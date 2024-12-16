import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function MeditationTimer() {
  const [time, setTime] = useState(600); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(600);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setTime(selectedTime);
    setIsRunning(false);
  };

  const timeOptions = [
    { value: 300, label: '5 minutes' },
    { value: 600, label: '10 minutes' },
    { value: 900, label: '15 minutes' },
    { value: 1200, label: '20 minutes' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-lg bg-white shadow"
    >
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Minuteur de Méditation
        </h3>
        <div className="mt-6 flex flex-col items-center">
          <div className="text-6xl font-bold text-indigo-600 mb-8">
            {formatTime(time)}
          </div>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              {isRunning ? (
                <PauseIcon className="h-5 w-5 mr-2" />
              ) : (
                <PlayIcon className="h-5 w-5 mr-2" />
              )}
              {isRunning ? 'Pause' : 'Démarrer'}
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200"
            >
              <ArrowPathIcon className="h-5 w-5 mr-2" />
              Réinitialiser
            </button>
          </div>
          <select
            value={selectedTime}
            onChange={(e) => {
              setSelectedTime(Number(e.target.value));
              setTime(Number(e.target.value));
              setIsRunning(false);
            }}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {timeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
}