import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselImage {
  url: string;
  alt: string;
  caption: string;
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images: CarouselImage[] = [
    {
      url: 'https://www.m360.cl/noticias/site/artic/20170524/imag/foto_0000000820170524125204.jpg',
      alt: 'Completo italiano clásico',
      caption: 'El auténtico sabor del completo italiano'
    },
    {
      url: 'https://www.elvacanudo.cl/sites/elvacanudo.cl/files/imagen_noticia/205y2hs.jpg',
      alt: 'Variedad de completos chilenos',
      caption: 'Todas las variedades que amas'
    },
    {
      url: 'https://media-front.elmostrador.cl/2022/05/Enex_upa-completo.png',
      alt: 'Completos gourmet',
      caption: 'Calidad premium en cada bocado'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-100 mb-8">
      {/* Main carousel container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
              
              {/* Caption */}
              <motion.div 
                className="absolute bottom-8 left-8 right-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-white text-xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                  {images[currentIndex].caption}
                </h3>
                <div className="w-16 h-1 bg-completo-mostaza mx-auto rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group z-10"
          aria-label="Imagen anterior"
        >
          <FaChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group z-10"
          aria-label="Imagen siguiente"
        >
          <FaChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-completo-mostaza scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Loading indicator for auto-play */}
        {isAutoPlaying && (
          <div className="absolute top-4 right-4 z-10">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-4xl opacity-20 z-10">🌭</div>
      <div className="absolute top-8 right-8 text-4xl opacity-20 z-10">🇨🇱</div>
    </section>
  );
};

export default ImageCarousel;
