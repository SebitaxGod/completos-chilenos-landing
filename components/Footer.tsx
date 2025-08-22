import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">🌭</span>
              <h3 className="text-2xl font-bold text-white">
                Completos Chilenos
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Los completos más auténticos de Chile, preparados con ingredientes 
              frescos y el sabor tradicional que nos caracteriza desde hace más de 20 años.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://wa.me/56912345678" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-completo-mostaza">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-completo-palta transition-colors duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-completo-palta transition-colors duration-300"
                >
                  Menú
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-completo-palta transition-colors duration-300"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-completo-palta transition-colors duration-300"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-completo-mostaza">
              Contacto
            </h4>
            <div className="space-y-3 text-gray-300">
              <p>📍 Av. Providencia 1234, Santiago</p>
              <p>📞 +56 9 1234 5678</p>
              <p>✉️ info@completoschilenos.cl</p>
              <div className="mt-4">
                <h5 className="font-semibold text-white mb-2">Horarios:</h5>
                <p className="text-sm">Lunes a Domingo</p>
                <p className="text-sm">11:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Completos Chilenos. Todos los derechos reservados.
            </p>
            
            {/* Elementos decorativos */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Hecho con</span>
              <span className="text-red-500">❤️</span>
              <span>en Chile</span>
              <span className="text-xl">🇨🇱</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
