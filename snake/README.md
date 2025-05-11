# Snake Game - Estilo Ochentero

Un clásico juego de Snake con estética retro de los 80s, desarrollado con React y TypeScript.

## 🎮 Características

- Interfaz con estilo ochentero (neón, efectos de brillo)
- Personalización del nombre del jugador
- Sistema de 3 vidas
- Puntuación que aumenta con cada comida
- La serpiente se mueve más rápido a medida que avanzas
- Controles con las flechas del teclado
- Efectos visuales retro y animaciones
- Diseño responsivo

## 🛠️ Stack Tecnológico

### Frontend
- **React 18.2.0**: Biblioteca principal para la interfaz de usuario
- **TypeScript 5.0.0**: Para tipado estático y mejor desarrollo
- **Vite 5.0.0**: Bundler y servidor de desarrollo

### Estilos
- CSS puro con variables CSS
- Fuente "Press Start 2P" para el estilo retro
- Animaciones CSS para efectos visuales
- Diseño responsivo
- Efectos de neón y brillo

## 🚀 Instalación

1. Clona el repositorio
2. Navega al directorio del proyecto:
   ```bash
   cd snake
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

1. Ingresa tu nombre para comenzar
2. Usa las flechas del teclado para mover la serpiente:
   - ↑: Mover arriba
   - ↓: Mover abajo
   - ←: Mover izquierda
   - →: Mover derecha
3. Come la comida (punto rosa) para:
   - Crecer la serpiente
   - Ganar puntos
   - Aumentar la velocidad
4. Evita:
   - Chocar con los bordes
   - Chocar contigo mismo
5. Tienes 3 vidas para conseguir la mayor puntuación posible

## 🎨 Estructura del Proyecto

```
snake/
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

### Constantes del Juego
- Tamaño de la cuadrícula: 20x20
- Tamaño de celda: 20px
- Velocidad inicial: 150ms
- Incremento de velocidad: 5ms por comida

### Mecánicas
- La serpiente se representa como un array de posiciones
- Cada posición tiene coordenadas x, y
- La comida se genera en posiciones aleatorias
- La velocidad aumenta con cada comida
- Sistema de colisiones para paredes y cuerpo
- Sistema de vidas con reinicio de posición

### Estado del Juego
- Posición de la serpiente
- Posición de la comida
- Dirección actual
- Puntuación
- Vidas restantes
- Estado del juego (inicio/jugando/fin)

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la versión de producción
- `npm run preview`: Previsualiza la versión de producción

## 🎨 Personalización

El juego puede ser personalizado modificando:
- Colores neón en las variables CSS
- Tamaño de la cuadrícula
- Velocidad inicial y incremento
- Número de vidas
- Puntuación por comida

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de:
1. Hacer fork del proyecto
2. Crear una rama para tu feature
3. Hacer commit de tus cambios
4. Hacer push a la rama
5. Abrir un Pull Request 