import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-completo-palta via-completo-mostaza to-completo-tomate">
      {/* Background overlay */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Emoji de completo grande */}
          <motion.div 
            className="text-8xl mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌭
          </motion.div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Los completos más sabrosos de{' '}
            <span className="text-completo-mostaza">Chile</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Directo a tu mesa, con todo el sabor tradicional chileno
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToMenu}
            className="bg-completo-tomate hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🍽️ Haz tu pedido
          </motion.button>

          {/* Elementos decorativos */}
          <div className="mt-12 flex justify-center space-x-8 text-4xl">
            <motion.span 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              🥑
            </motion.span>
            <motion.span 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              🍅
            </motion.span>
            <motion.span 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              🧀
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
