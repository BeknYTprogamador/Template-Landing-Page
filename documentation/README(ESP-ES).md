# Documentación del Proyecto - Página de aterrizaje con React + Bootstrap

## Visión general

Idiomas disponibles:
- [English](README(English).md)
- [Português Brasileiro](README(PT-BR).md)
- [Español (España)](README(ES).md)

Este proyecto es una página de aterrizaje moderna construida con **React** y **Bootstrap 5**. Demuestra un diseño limpio y adaptable con barra de navegación, sección principal, carrusel, servicios, acerca de, portafolio y pie de página.

## Novedades en Alpha 2.0
- **Soporte de traducción al portugués (Brasil)**: Se añadieron los archivos `en.json` y `pt.json` en `src/locales/` para habilitar contenido multilingüe.
- **Selector de idioma**: Un menú desplegable `<select>` en la barra de navegación permite cambiar entre inglés y portugués.
- **Carpeta de actualizaciones**: Se introdujo el directorio `updates/` donde los colaboradores pueden documentar notas de versión, problemas y progreso.  
  - Ejemplo: `Alpha-2.0` describe la implementación inicial de traducción y el problema del carrusel.

## Novedades en Alpha 2.2.0
- **Refinamiento de locales**: Se actualizó la ruta de traducción de `pt` a `pt-br` para reflejar correctamente el estándar del portugués brasileño.
- **Corrección de consistencia**: Se ajustaron imports y referencias en `App.jsx` y `Slideshow.jsx` para usar `pt-br.json`.
- **Problema resuelto**: Los subtítulos del carrusel ahora se traducen correctamente al cambiar de idioma.
- **Documentación**: Se añadió `Alpha-2.2.0.md` en la carpeta `updates/` para registrar este refinamiento.

## Novedades en Alpha 2.2.1
- **Expansión de documentación**: Se añadieron archivos README multilingües en la carpeta `documentation/`:
  - `README(English).md`
  - `README(PT-BR).md`
- **Organización de actualizaciones**: Se estructuró el directorio `updates/locales/` para separar notas de versión por idioma.
- **Consistencia**: Se aseguró que los archivos de documentación sigan el mismo formato para facilitar la navegación y colaboración.
- **Crecimiento planificado**: Se añadirán futuras traducciones de README a medida que la página de aterrizaje soporte más idiomas.

## Novedades en Alpha 2.3

- **Compatibilidad con la traducción al español (España)**: Se agregó el archivo es.json en `src/locales/` para habilitar el contenido en español.

**Actualización del selector de idioma**: El menú desplegable de la barra de navegación ahora incluye inglés, portugués (Brasil) y español (España).

**Ampliación de la documentación**: Se agregó el archivo `README(ES).md` en la carpeta documentation/ para proporcionar todos los detalles del proyecto en español.

**Consistencia**: Se aseguró que todos los archivos de traducción (en.json, pt-br.json, es.json) sigan la misma estructura para facilitar el mantenimiento.

## Componentes

### Barra de navegación
* Barra de navegación adaptable construida con Bootstrap.
* Enlaces a secciones: Servicios, Acerca de, Portafolio.
* Incluye un selector de idioma (`<select>` con `<option>`).
* Fija en la parte superior de la ventana.

### Sección principal (Hero)
* Muestra un encabezado y subtítulo de bienvenida.
* Texto localizado cargado desde archivos JSON.
* Posicionada en la parte superior de la página para introducir el sitio.

### Componente de carrusel (`Slideshow.jsx`)
* Carrusel personalizado en React que rota automáticamente cada 5 segundos.
* Cada diapositiva incluye:
  * Imagen
  * Título
  * Descripción
  * Botón de acción
* Textos cargados desde archivos de traducción (`en.json` / `pt-br.json`).
* **Estado:** Error de traducción corregido en Alpha 2.2.0.

### Sección de servicios
* Tres columnas que muestran servicios:
  * Desarrollo web
  * Desarrollo de aplicaciones móviles
  * Diseño UI/UX
* Texto localizado desde archivos JSON.
* Uso de iconos y sistema de cuadrícula de Bootstrap.

### Sección acerca de
* Fondo destacado (`bg-light`).
* Descripción centrada del equipo y misión.
* Texto localizado desde archivos JSON.

### Sección de portafolio
* Cuadrícula de tarjetas que muestran proyectos:
  * Proyecto A: Sitio web de comercio electrónico
  * Proyecto B: Aplicación móvil para seguimiento de fitness
  * Proyecto C: Rediseño de sitio corporativo
* Texto localizado desde archivos JSON.
* Uso de componentes de tarjeta de Bootstrap.

### Pie de página
* Pie de página de ancho completo con derechos de autor.
* Texto localizado desde archivos JSON.
* Estilizado con `bg-light` y texto centrado.

## Estilos (`index.css`)
* Reinicio global con fuente `Poppins`.
* Fondo neutro (`#f9f9f9`) y texto oscuro (`#333`).
* Barra de navegación fija arriba, con sombra y ajustes sobre Bootstrap.
* Sección principal estilizada con tipografía y efectos hover en botones.
* Carrusel estilizado con bordes redondeados, diseño centrado y `object-fit: cover` para imágenes proporcionales.

## Fortalezas
* Estructura limpia y lógica.
* Uso efectivo de Bootstrap para adaptabilidad.
* Soporte de traducción para inglés y portugués brasileño.
* Fácil de extender y personalizar.

## Limitaciones
* El carrusel carece de controles de navegación manual.
* El pie de página está limitado por el ancho del contenedor.
* Se necesitan mejoras de accesibilidad.

## Mejoras sugeridas
1. Añadir controles manuales (flechas, indicadores) al carrusel.
2. Superponer subtítulos en imágenes del carrusel con fondo semitransparente.
3. Usar `.container-fluid` para elementos de ancho completo (barra de navegación, carrusel, pie de página).
4. Añadir texto alternativo descriptivo a las imágenes.
5. Mejorar contraste para mayor legibilidad.

## Conclusión
Este proyecto proporciona una base sólida para una página de aterrizaje moderna. Con soporte multilingüe refinado en Alpha 2.2.0 y futuras mejoras en el carrusel y accesibilidad, puede evolucionar hacia una plantilla profesional lista para uso real.
