import React from 'react';
import { Wrench, Package, Truck, CreditCard } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Mantenimiento de Vehículos',
      description: 'Servicio de mantenimiento y reparación para tu vehículo.',
      icon: <Wrench size={40} />,
    },
    {
      title: 'Envío de Paquetes',
      description: 'Servicio de envío de paquetes y encomiendas.',
      icon: <Package size={40} />,
    },
    {
      title: 'Alquiler de Vehículos',
      description: 'Alquila vehículos para tus necesidades de transporte.',
      icon: <Truck size={40} />,
    },
    {
      title: 'Tarjeta de Fidelización',
      description: 'Obtén beneficios exclusivos con nuestra tarjeta de fidelidad.',
      icon: <CreditCard size={40} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;