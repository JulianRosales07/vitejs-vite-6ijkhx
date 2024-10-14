import React, { useState } from 'react';

const PackageTracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de rastreo de paquetes
    setTrackingResult(`El paquete ${trackingNumber} está en tránsito. Última ubicación: Bogotá.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rastreo de Paquetes</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trackingNumber">
            Número de Rastreo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="trackingNumber"
            type="text"
            placeholder="Ingrese el número de rastreo"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Rastrear Paquete
          </button>
        </div>
      </form>
      {trackingResult && (
        <div className="max-w-md mx-auto mt-4 p-4 bg-blue-100 rounded-lg">
          <p className="text-blue-800">{trackingResult}</p>
        </div>
      )}
    </div>
  );
};

export default PackageTracking;