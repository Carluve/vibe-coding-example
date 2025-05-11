# Tic Tac Toe Online

Un juego de Tic Tac Toe (Tres en Línea) moderno y atractivo, desarrollado con React y TypeScript.

## 🎮 Características

- Juego en línea para dos jugadores
- Personalización de nombres de jugadores
- Animación de confeti para el ganador
- Animación triste para el perdedor
- Interfaz moderna y responsiva
- Diseño limpio y minimalista
- Feedback visual en cada movimiento

## 🛠️ Stack Tecnológico

### Frontend
- **React 18.2.0**: Biblioteca principal para la interfaz de usuario
- **TypeScript 5.0.0**: Para tipado estático y mejor desarrollo
- **Vite 5.0.0**: Bundler y servidor de desarrollo
- **React Confetti 6.1.0**: Para la animación de victoria

### Estilos
- CSS Modules para estilos modulares
- Diseño responsivo
- Animaciones CSS
- Variables CSS para temas

## 🚀 Instalación

1. Clona el repositorio
2. Navega al directorio del proyecto:
   ```bash
   cd tic-tac-toe
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🎯 Cómo Jugar

1. Ingresa los nombres de los dos jugadores
2. El jugador X comienza primero
3. Los jugadores se turnan para colocar sus símbolos
4. El primer jugador en alinear 3 símbolos gana
5. Si el tablero se llena sin un ganador, es un empate

## 🎨 Estructura del Proyecto

```
tic-tac-toe/
├── src/
│   ├── App.tsx          # Componente principal del juego
│   ├── App.css          # Estilos del juego
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/             # Archivos estáticos
├── index.html          # HTML principal
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
└── vite.config.ts      # Configuración de Vite
```

## 🎮 Lógica del Juego

- El juego utiliza un array de 9 elementos para representar el tablero
- Cada posición puede ser 'X', 'O' o null
- La lógica de victoria verifica 8 combinaciones posibles:
  - 3 horizontales
  - 3 verticales
  - 2 diagonales
- El estado del juego se maneja con React Hooks:
  - useState para el estado del tablero y jugadores
  - useEffect para efectos secundarios

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la versión de producción
- `npm run preview`: Previsualiza la versión de producción

## 🎨 Personalización

El juego puede ser personalizado modificando:
- Colores en las variables CSS
- Tamaños y espaciados
- Animaciones y transiciones
- Textos y mensajes

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de:
1. Hacer fork del proyecto
2. Crear una rama para tu feature
3. Hacer commit de tus cambios
4. Hacer push a la rama
5. Abrir un Pull Request 