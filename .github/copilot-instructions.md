# Instrucciones para Agentes de IA - Completos Chilenos Landing Page

## Arquitectura del Proyecto

Esta es una landing page Next.js con Tailwind CSS para una tienda de completos chilenos. La estructura está diseñada con componentes modulares y un diseño mobile-first.

### Stack Principal
- **Next.js 14** con TypeScript para SSG/SSR
- **Tailwind CSS** con paleta personalizada temática de completos
- **Framer Motion** para animaciones suaves
- **React Icons** para iconografía consistente

### Estructura de Componentes
```
components/
├── Navbar.tsx      # Navegación fija con scroll suave
├── Hero.tsx        # Sección principal con CTA animado
├── Menu.tsx        # Grid de completos con hover effects
├── About.tsx       # Historia con estadísticas animadas
├── Contact.tsx     # Formulario + integración WhatsApp
└── Footer.tsx      # Enlaces y redes sociales
```

## Patrones de Código Específicos

### Paleta de Colores Temática
Los colores están definidos en `tailwind.config.js` bajo `colors.completo`:
- `completo-palta`: Verde de la palta (#4ADE80)
- `completo-tomate`: Rojo del tomate (#EF4444) 
- `completo-mostaza`: Amarillo mostaza (#EAB308)
- `completo-mayo`: Blanco mayonesa (#FFFFFF)

**Usar siempre estas clases** en lugar de colores genéricos para mantener consistencia visual.

### Animaciones con Framer Motion
Patrón estándar para elementos que aparecen al hacer scroll:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

### Navegación por Scroll
Usa `scrollToSection()` en lugar de enlaces href para navegación interna:
```tsx
const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};
```

### Integración WhatsApp
Los CTAs de pedido deben usar este formato para mantener consistencia:
```tsx
const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(mensaje)}`;
```

## Flujos de Desarrollo Críticos

### Agregar Nuevos Completos
1. Editar array `menuItems` en `components/Menu.tsx`
2. Incluir: name, description, price, emoji
3. Mantener formato de precios chilenos ($X.XXX)

### Modificar Información de Contacto
1. **Teléfono**: Actualizar en Contact.tsx, Footer.tsx y links WhatsApp
2. **Dirección**: Contact.tsx y Footer.tsx
3. **Horarios**: Contact.tsx y Footer.tsx
4. **Email**: Contact.tsx y Footer.tsx

### Optimización de Performance
- Componentes usan `viewport={{ once: true }}` para evitar re-renders
- Imágenes deben ir en `/public/` con optimización Next.js
- CSS crítico está en `globals.css` con Tailwind

### SEO y Meta Tags
Meta tags están centralizados en `pages/index.tsx`:
- Título, descripción y keywords orientados a completos chilenos
- Open Graph para redes sociales
- Structured data implícito en componentes semánticos

## Convenciones del Proyecto

### Tipografía
- Font principal: Inter (cargada desde Google Fonts)
- Jerarquía: text-4xl/5xl para títulos, text-xl para subtítulos
- Siempre usar `font-bold` para títulos principales

### Responsive Design
- Breakpoints: `md:` (768px+), `lg:` (1024px+)
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Mobile-first approach obligatorio

### Estados y Interactividad
- Hover effects: `hover:scale-105`, `hover:shadow-lg`
- Botones CTA: Gradients con colores temáticos
- Focus states: `focus:ring-2 focus:ring-completo-tomate`

### Estructura Semántica
- `<section id="nombre">` para cada sección principal
- Navigation landmarks apropiados
- Textos alt descriptivos (cuando se agreguen imágenes)

## Comandos de Desarrollo

```bash
npm run dev      # Desarrollo local (puerto 3000)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint + Prettier
```

## Deploy en Vercel

El proyecto está configurado para deploy automático:
- Push a main branch dispara build automático
- Variables de entorno en panel de Vercel
- Dominio personalizable en configuración del proyecto

### Variables de Entorno Importantes
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Número de WhatsApp (formato: 56912345678)
- `NEXT_PUBLIC_SITE_URL`: URL canónica para SEO

## Archivos Críticos

- `tailwind.config.js`: Paleta de colores personalizada
- `next.config.js`: Configuración de optimizaciones
- `globals.css`: Estilos base + gradients personalizados
- `package.json`: Dependencias específicas del proyecto

**Nunca modificar** la configuración de colores sin actualizar todos los componentes que los usan.
