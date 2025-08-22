import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import Menu from '../components/Menu';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Completos Chilenos - Los completos más sabrosos de Chile</title>
        <meta 
          name="description" 
          content="Descubre los completos más auténticos de Chile. Ingredientes frescos, sabor tradicional y más de 20 años de experiencia. ¡Haz tu pedido ahora!" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="completos chilenos, completo italiano, completo dinámico, comida chilena, santiago" />
        <meta name="author" content="Completos Chilenos" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://completoschilenos.vercel.app/" />
        <meta property="og:title" content="Completos Chilenos - Los completos más sabrosos de Chile" />
        <meta property="og:description" content="Descubre los completos más auténticos de Chile. Ingredientes frescos, sabor tradicional y más de 20 años de experiencia." />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://completoschilenos.vercel.app/" />
        <meta property="twitter:title" content="Completos Chilenos - Los completos más sabrosos de Chile" />
        <meta property="twitter:description" content="Descubre los completos más auténticos de Chile. Ingredientes frescos, sabor tradicional y más de 20 años de experiencia." />
        <meta property="twitter:image" content="/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#EF4444" />
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ImageCarousel />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
