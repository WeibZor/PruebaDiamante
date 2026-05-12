# 🛒 Nexora Store — Modern E-commerce Platform

Aplicación E-commerce moderna desarrollada con React + Vite + Tailwind CSS + Zustand, enfocada en arquitectura escalable, experiencia de usuario profesional y despliegue en GitHub Pages.

> Proyecto desarrollado bajo arquitectura moderna frontend utilizando Atomic Design, persistencia local, rutas protegidas, consumo de APIs y experiencia responsive premium.

---

# 🚀 Demo

🌐 Deploy:  
[https://TU-USUARIO.github.io/TU-REPOSITORIO](https://TU-USUARIO.github.io/TU-REPOSITORIO)

📦 Repositorio:  
[https://github.com/TU-USUARIO/TU-REPOSITORIO](https://github.com/TU-USUARIO/TU-REPOSITORIO)

---

# 📸 Características Principales

## ✅ Funcionalidades Implementadas

- 🔐 Login y registro funcional
- 💾 Persistencia de sesión con localStorage
- 🛍️ Catálogo dinámico de productos
- 🔎 Búsqueda en tiempo real
- 📂 Filtros por categorías
- 📄 Paginación de productos
- 🛒 Carrito de compras persistente
- ❤️ Wishlist
- 🌙 Dark Mode
- 📱 Responsive Design
- ⚡ Lazy Loading
- 🔔 Toast Notifications
- 🔒 Protected Routes
- 🧠 Zustand State Management
- 🌐 Consumo de FakeStore API
- 🚀 Deploy en GitHub Pages

---

# 🧠 Tecnologías Utilizadas

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- React Icons
- React Hot Toast / Sonner

## Gestión de Estado
- Zustand
- Persist Middleware

## API
- FakeStore API

## Deploy
- GitHub Pages

---

# 🏗️ Arquitectura del Proyecto

```plaintext
src/
├── assets/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── layouts/
│   ├── templates/
│   └── ui/
├── pages/
├── routes/
├── services/
├── hooks/
├── store/
├── context/
├── utils/
├── constants/
├── mockdata/
├── styles/
├── App.jsx
└── main.jsx
```

---

# 🔐 Autenticación

La aplicación cuenta con:

- Registro de usuarios
- Inicio de sesión
- Persistencia local
- Protección de rutas
- Logout funcional
- Cuenta demo integrada

## 👤 Cuenta Demo

```txt
Correo:
demo@ecommerce.com

Contraseña:
123456
```

---

# 🛒 Funcionalidades E-commerce

## Productos
- Listado dinámico
- Product Detail
- Productos relacionados
- Ratings
- Categorías
- Búsqueda inteligente

## Carrito
- Agregar productos
- Eliminar productos
- Incrementar/disminuir cantidad
- Persistencia localStorage
- Cálculo automático de totales

## Checkout
- Vista previa
- Resumen de compra
- Simulación de orden
- Confirmación fake

---

# 🎨 UI/UX

## Diseño Moderno
- Glassmorphism
- Navbar Sticky
- Footer Premium
- Responsive Layout
- Dark Mode
- Microanimaciones
- Hover Effects
- Skeleton Loaders

## Responsive Design
Compatible con:
- 📱 Mobile
- 💻 Tablet
- 🖥️ Desktop

---

# ⚙️ Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
```

## 2. Entrar al proyecto

```bash
cd TU-REPOSITORIO
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar proyecto

```bash
npm run dev
```

---

# 🌐 Deploy GitHub Pages

## Instalar gh-pages

```bash
npm install gh-pages --save-dev
```

## package.json

Agregar:

```json
"homepage": "https://TU-USUARIO.github.io/TU-REPOSITORIO"
```

Scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

---

# ⚡ Configuración Vite para GitHub Pages

## vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TU-REPOSITORIO/',
})
```

---

# 🧭 Configuración React Router

Para evitar errores 404 en GitHub Pages se recomienda usar:

```jsx
<HashRouter>
  <App />
</HashRouter>
```

---

# 📦 Scripts Disponibles

```bash
npm run dev
npm run build
npm run preview
npm run deploy
```

---

# 🔥 Estado Global con Zustand

Stores implementados:

- authStore
- cartStore
- productStore
- wishlistStore
- uiStore

Características:
- Persistencia
- Selectores optimizados
- Manejo global eficiente

---

# 🌐 API Utilizada

## FakeStore API

```txt
https://fakestoreapi.com/
```

Endpoints utilizados:
- /products
- /products/categories
- /products/:id

---

# 🧪 Buenas Prácticas Implementadas

✅ Atomic Design  
✅ Código modular  
✅ Componentes reutilizables  
✅ Lazy Loading  
✅ Separación de responsabilidades  
✅ Persistencia local  
✅ Optimización de renders  
✅ Responsive Design  
✅ Arquitectura escalable  
✅ Rutas protegidas  
✅ Error Handling  

---

# 📈 Optimizaciones

- Lazy Loading
- Code Splitting
- Suspense
- useMemo
- useCallback
- Skeleton Loaders
- Optimización de imágenes

---

# 🧩 Funcionalidades Extra

- Wishlist
- Dark Mode
- Navbar Sticky
- Footer Premium
- Toast Notifications
- Search Autocomplete
- Breadcrumbs
- Página 404
- Loading States
- Empty States

---

# 🛠️ Variables Persistidas

La aplicación guarda automáticamente:

```txt
users
currentUser
cart
wishlist
theme
```

---

# 📚 Recursos Utilizados

- React Docs  
https://react.dev/

- Tailwind CSS  
https://tailwindcss.com/

- Zustand  
https://zustand.docs.pmnd.rs/

- FakeStore API  
https://fakestoreapi.com/

- Axios  
https://axios-http.com/

- Vite  
https://vitejs.dev/

- Atomic Design  
https://bradfrost.com/blog/post/atomic-web-design/

---

# 📌 Roadmap Futuro

- 🔥 Firebase Authentication
- 💳 Integración de pagos
- 📦 Backend Node.js
- 📊 Dashboard Admin
- 📈 Analytics
- 🧾 Historial de órdenes
- ❤️ Sistema de favoritos avanzado

---

# 👨‍💻 Autor

Desarrollado por:

**[TU NOMBRE]**  
Frontend & Full Stack Developer 🚀

---

# 📄 Licencia

Proyecto de uso educativo y portfolio profesional.
