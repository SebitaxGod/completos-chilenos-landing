# Stack Tecnológico para la Landing Page de Completos

## Framework
- **Next.js** (versión estable)
  - Generación de páginas estáticas (SSG) para rapidez en carga.
  - Server-Side Rendering (SSR) para futuras funcionalidades dinámicas.
  - Soporte integrado para despliegue en **Vercel**.

## Estilos
- **Tailwind CSS**
  - Sistema de utilidades para estilos rápidos.
  - Diseño responsive adaptado a mobile-first.
  - Paleta de colores personalizada (rojo, amarillo, verde — colores alusivos a completos).

## Despliegue
- **Vercel**
  - Deploy continuo con cada push en GitHub.
  - Configuración optimizada para Next.js.
  - URL pública gratuita.

## Estructura de carpetas
/completos-landing
/pages
index.tsx -> Landing principal
/components
Navbar.tsx
Hero.tsx
Menu.tsx
About.tsx
Contact.tsx
Footer.tsx
/styles
globals.css
tailwind.config.js
/public
logo.png
completos.png

markdown
Copiar
Editar

## Librerías adicionales (opcional)
- **Framer Motion** → animaciones suaves.
- **React Icons** → íconos simples (ej: comida, contacto).
- **Formik / React Hook Form** → para un formulario de contacto simple.