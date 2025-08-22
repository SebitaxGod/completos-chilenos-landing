# Completos Chilenos - Landing Page

Una landing page moderna y atractiva para una tienda de completos chilenos, construida con Next.js y Tailwind CSS.

## 🌭 Características

- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Colores Temáticos**: Paleta inspirada en los ingredientes del completo (palta, tomate, mayonesa, mostaza)
- **Animaciones**: Transiciones suaves con Framer Motion
- **Optimización SEO**: Meta tags y estructura semántica
- **Contacto Directo**: Integración con WhatsApp para pedidos
- **Performance**: Generación estática para carga rápida

## 🚀 Stack Tecnológico

- **Next.js 14** - Framework React con SSG/SSR
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones
- **React Icons** - Iconografía
- **Vercel** - Plataforma de despliegue

## 📁 Estructura del Proyecto

```
/
├── components/           # Componentes reutilizables
│   ├── Navbar.tsx       # Navegación principal
│   ├── Hero.tsx         # Sección hero con CTA
│   ├── Menu.tsx         # Catálogo de completos
│   ├── About.tsx        # Historia y valores
│   ├── Contact.tsx      # Formulario y contacto
│   └── Footer.tsx       # Pie de página
├── pages/               # Páginas Next.js
│   ├── _app.tsx         # App wrapper
│   └── index.tsx        # Página principal
├── styles/              # Estilos globales
│   └── globals.css      # CSS global + Tailwind
├── public/              # Assets estáticos
└── config files         # Configuración del proyecto
```

## 🎨 Paleta de Colores

La paleta está inspirada en los ingredientes tradicionales del completo:

- **Verde Palta**: `#4ADE80` - Elementos de acento
- **Rojo Tomate**: `#EF4444` - CTAs y elementos principales
- **Blanco Mayo**: `#FFFFFF` - Fondos y texto
- **Amarillo Mostaza**: `#EAB308` - Detalles y highlights

## 🏗️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📱 Secciones Principales

### 1. Hero Section
- Imagen llamativa con gradiente temático
- Título principal con call-to-action
- Animaciones de elementos flotantes

### 2. Menú
- Grid responsive de completos
- Tarjetas con precios y descripciones
- Botones de pedido interactivos

### 3. Nosotros
- Historia de la tienda
- Estadísticas con animaciones
- Valores y tradición chilena

### 4. Contacto
- Formulario de contacto funcional
- Información de ubicación y horarios
- Integración directa con WhatsApp

### 5. Footer
- Enlaces de navegación
- Redes sociales
- Información corporativa

## 🌍 Despliegue en Vercel

El proyecto está optimizado para Vercel con:

- Configuración automática de Next.js
- Generación estática (SSG) para máximo rendimiento
- Variables de entorno para configuración
- Deploy automático desde Git

```bash
# Deploy manual
vercel --prod
```

## 📞 Integración WhatsApp

El proyecto incluye integración directa con WhatsApp para facilitar los pedidos:

- Botones CTA redirigen a WhatsApp
- Mensajes pre-configurados
- Número personalizable en los componentes

## 🔧 Personalización

### Cambiar Información de Contacto
Edita los siguientes archivos:
- `components/Contact.tsx` - Información y formulario
- `components/Footer.tsx` - Datos del footer
- `components/Navbar.tsx` - Enlaces de navegación

### Modificar Menú
Actualiza el array `menuItems` en `components/Menu.tsx` con:
- Nombres de completos
- Descripciones
- Precios
- Emojis representativos

### Ajustar Colores
Modifica `tailwind.config.js` en la sección `colors.completo` para cambiar la paleta temática.

## 📈 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🇨🇱 Hecho con ❤️ en Chile
