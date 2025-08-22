import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías integrar con un servicio de email o API
    console.log('Form submitted:', formData);
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola! Soy ${formData.name}.%0A%0A${formData.message}%0A%0ACorreo: ${formData.email}`;
    const whatsappUrl = `https://wa.me/56912345678?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-completo-tomate">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido? ¡Estamos aquí para ayudarte!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-completo-tomate text-white p-3 rounded-full mr-4">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">+56 9 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-completo-palta text-white p-3 rounded-full mr-4">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@completoschilenos.cl</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-completo-mostaza text-white p-3 rounded-full mr-4">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ubicación</p>
                  <p className="text-gray-600">Av. Providencia 1234, Santiago</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <FaClock size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Horarios</p>
                  <p className="text-gray-600">Lun - Dom: 11:00 - 23:00</p>
                </div>
              </div>
            </div>

            {/* WhatsApp directo */}
            <motion.div 
              className="mt-8 p-6 bg-green-100 rounded-2xl border border-green-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📱</span>
                <h4 className="text-lg font-bold text-green-800">
                  Pedidos por WhatsApp
                </h4>
              </div>
              <p className="text-green-700 mb-4">
                ¡La forma más rápida de hacer tu pedido! Escríbenos directamente.
              </p>
              <a 
                href="https://wa.me/56912345678?text=Hola! Me gustaría hacer un pedido de completos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
              >
                Abrir WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-completo-tomate focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-completo-tomate focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-completo-tomate focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntanos sobre tu pedido o consulta..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-completo-tomate to-completo-mostaza text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
