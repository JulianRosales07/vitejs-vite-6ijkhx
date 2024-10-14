import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Cootranar</h3>
            <p className="text-sm">Cooperativa de Transportadores de Nariño</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contacto</h3>
            <p className="text-sm">Teléfono: (123) 456-7890</p>
            <p className="text-sm">Email: info@cootranar.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">Facebook</a>
              <a href="#" className="text-white hover:text-blue-400">Twitter</a>
              <a href="#" className="text-white hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          © 2024 Cootranar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;