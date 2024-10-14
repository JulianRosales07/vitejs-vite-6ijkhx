import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, User, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Truck className="mr-2" />
          <span className="text-xl font-bold">Cootranar</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="hover:text-blue-200">
                Tiquetes
              </Link>
            </li>
            <li>
              <Link to="/fuel" className="hover:text-blue-200">
                Combustible
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-200">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/tracking" className="hover:text-blue-200">
                Rastreo
              </Link>
            </li>
            <li>
              <Link to="/rental" className="hover:text-blue-200">
                Alquiler
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-blue-200">
            <User size={24} />
          </Link>
          <Link to="/login" className="hover:text-blue-200">
            <LogIn size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
