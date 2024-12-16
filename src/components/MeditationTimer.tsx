import { useState, useEffect } from 'react';

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

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900">Minuteur de Méditation</h3>
      <div className="mt-6 text-center">
        <div className="text-4xl font-bold text-gray-900 mb-8">
          {formatTime(time)}
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            {isRunning ? 'Pause' : 'Démarrer'}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
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
          className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value={300}>5 minutes</option>
          <option value={600}>10 minutes</option>
          <option value={900}>15 minutes</option>
          <option value={1200}>20 minutes</option>
        </select>
      </div>
    </div>
  );
}