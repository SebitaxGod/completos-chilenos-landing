import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  emoji: string;
}

const Menu = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Completo Italiano",
      description: "Palta, tomate y mayonesa. El clásico tricolor chileno.",
      price: "$3.500",
      emoji: "🇮🇹"
    },
    {
      name: "Completo Dinámico",
      description: "Palta y tomate picado fino. Simple y delicioso.",
      price: "$3.200",
      emoji: "⚡"
    },
    {
      name: "Completo Chacarero",
      description: "Porotos verdes, palta, tomate y ají verde.",
      price: "$3.800",
      emoji: "🌱"
    },
    {
      name: "Completo Barros Luco",
      description: "Queso derretido y palta. Un clásico imperdible.",
      price: "$3.600",
      emoji: "🧀"
    },
    {
      name: "Completo As",
      description: "Palta, mayonesa y ají verde picante.",
      price: "$3.400",
      emoji: "🌶️"
    },
    {
      name: "Completo 21",
      description: "Palta, tomate, mayonesa y huevo duro.",
      price: "$4.200",
      emoji: "🥚"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
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
            Nuestro <span className="text-completo-tomate">Menú</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre los sabores auténticos de Chile en cada bocado
          </p>
          <div className="mt-6 w-24 h-1 bg-completo-tomate mx-auto rounded-full"></div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                {/* Emoji e indicador de precio */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <span className="bg-completo-tomate text-white px-3 py-1 rounded-full text-lg font-bold">
                    {item.price}
                  </span>
                </div>

                {/* Nombre del completo */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-completo-tomate transition-colors">
                  {item.name}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Botón de pedido */}
                <button className="w-full bg-gradient-to-r from-completo-palta to-completo-mostaza text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Añadir al pedido
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Tenemos más opciones disponibles.
          </p>
          <a 
            href="https://wa.me/56912345678?text=Hola! Me gustaría hacer un pedido de completos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">📱</span>
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
