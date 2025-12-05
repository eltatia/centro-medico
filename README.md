# Centro Médico Santa Rosa – Frontend

Aplicación web en React + Vite para el portal público y panel de configuración del Centro Médico Santa Rosa. Incluye landing page con animaciones suaves, flujo de reserva de citas, formulario de contacto conectado a Supabase y panel para gestionar tema/campañas.

## Requisitos
- Node.js 18+ y npm.
- Variables de entorno en un archivo `.env` en la raíz del proyecto:

```
VITE_SUPABASE_URL="https://<tu-proyecto>.supabase.co"
VITE_SUPABASE_ANON_KEY="<anon-key>"
VITE_WHATSAPP_NUMERO="<numero_con_codigo_pais>"   # Ej: 51999999999
VITE_API_URL="https://centro-medico-backend.vercel.app/api/theme"  # Opcional; usa el backend desplegado por defecto
```

## Instalación y ejecución local
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Arranca el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La app quedará disponible en `http://localhost:5173/`.
3. (Opcional) Revisa el build de producción:
   ```bash
   npm run build
   npm run preview
   ```

## Qué mejoró en esta versión
- **Interacciones en la landing**: hero, bienvenida y especialidades ahora tienen animaciones de entrada al hacer scroll, estados hover y gradientes sutiles para guiar la atención.
- **Flujo de reserva guiado**: se añadió un stepper visual, validaciones mínimas (teléfono de 9 dígitos) y el botón de confirmar se desactiva hasta completar datos, fecha y hora.
- **Feedback en panel admin**: transiciones suaves de tema y manejo de errores con mensajes/skeletons si falla la sincronización con el backend de configuración.
- **Imagen del héroe corregida**: la sección de bienvenida usa una URL única para evitar errores JSX en el recurso de imagen.

## Dónde probar las mejoras
- Landing: `HomeView` (`src/components/home/*` y estilos en `src/styles/home/`).
- Reserva: `src/view/reservaCita/ReservarCitaView.jsx` con componentes en `src/components/reservarCita/` y estilos en `src/styles/reservarCita/`.
- Panel admin: `src/view/admin/AdminSettings.jsx` apoyado por el `ThemeProvider` (`src/context/ThemeContext.jsx`).

## Notas
- El servicio de contacto y registro de citas usa Supabase; asegúrate de que las tablas existan antes de probar envíos.
- Si `VITE_API_URL` no está definida, el tema se cargará del backend público incluido en la configuración por defecto.
