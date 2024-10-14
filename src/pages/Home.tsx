import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Fuel, Wrench } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Cootranar</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Venta de Tiquetes"
          description="Compra tus tiquetes de viaje de forma rápida y segura."
          icon={<Ticket size={48} />}
          link="/tickets"
        />
        <ServiceCard
          title="Venta de Combustible"
          description="Abastece tu vehículo con nuestro combustible de calidad."
          icon={<Fuel size={48} />}
          link="/fuel"
        />
        <ServiceCard
          title="Otros Servicios"
          description="Descubre nuestros servicios adicionales para tu comodidad."
          icon={<Wrench size={48} />}
          link="/services"
        />
      </div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-blue-600 font-semibold">Más información →</span>
      </div>
    </Link>
  );
};

export default Home;