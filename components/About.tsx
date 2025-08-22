import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra <span className="text-completo-tomate">Historia</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Desde hace más de <strong className="text-completo-tomate">20 años</strong>, 
                hemos estado preparando los completos más auténticos de Chile, 
                manteniendo vivas las tradiciones culinarias que nos representan.
              </p>
              
              <p>
                Nuestro secreto está en la <strong className="text-completo-palta">calidad de nuestros ingredientes</strong>: 
                paltas maduras perfectas, tomates frescos de temporada, 
                y una mayonesa casera que le da ese toque especial a cada completo.
              </p>
              
              <p>
                Cada vienesa es seleccionada cuidadosamente, y nuestro pan 
                es horneado diariamente para garantizar la <strong className="text-completo-mostaza">frescura 
                y el sabor</strong> que nos caracteriza.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-completo-tomate mb-2">20+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-completo-palta mb-2">100%</div>
                <div className="text-sm text-gray-600">Ingredientes frescos</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-completo-mostaza mb-2">1000+</div>
                <div className="text-sm text-gray-600">Clientes felices</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Imagen/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-completo-palta via-completo-mostaza to-completo-tomate rounded-3xl p-8 text-center">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 text-4xl opacity-20">🥑</div>
              <div className="absolute top-4 right-4 text-4xl opacity-20">🍅</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-20">🧀</div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-20">🌭</div>
              
              {/* Main visual */}
              <div className="relative z-10">
                <div className="text-8xl mb-6">🏪</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Tradición Familiar
                </h3>
                <p className="text-white opacity-90 mb-6">
                  Preparando completos con amor desde 2003
                </p>
                
                {/* Chilean flag colors */}
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-6 h-4 bg-blue-600 rounded"></div>
                  <div className="w-6 h-4 bg-white rounded"></div>
                  <div className="w-6 h-4 bg-red-600 rounded"></div>
                </div>
                
                <p className="text-white text-sm font-semibold">
                  Orgullosamente Chilenos 🇨🇱
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
