# Actualización Alpha 2.0 - Versión Portugués Brasileño

## Propósito
Introducir soporte de traducción al portugués (Brasil) en toda la aplicación.

## Cambios implementados
- Se añadieron los archivos de traducción `en.json` y `pt.json` en `src/locales/`.
- Se refactorizó `App.jsx` para consumir texto desde archivos de traducción en lugar de cadenas fijas.
- Se añadió un menú desplegable `<select>` en la barra de navegación para cambiar entre inglés y portugués.
- Se actualizó `Slideshow.jsx` para aceptar una prop `lang` e intentar cargar contenido de diapositivas desde archivos de traducción.

## Estado actual
- **Funciona:** Las secciones Navbar, Hero, Servicios, Acerca de, Portafolio y Pie de página se traducen correctamente entre inglés y portugués.
- **Problema:** El componente `Slideshow` no se traduce correctamente. Aunque `pt.json` contiene la sección `slides`, el componente sigue mostrando texto en inglés.

## Problema conocido
- Los textos del carrusel permanecen en inglés independientemente del idioma seleccionado.
- Causas probables:
  - La prop `lang` no se está pasando correctamente de `App.jsx` a `Slideshow.jsx`.
  - El archivo `pt.json` puede no estar estructurado exactamente como se espera (el array `slides` debe coincidir con la versión en inglés).
  - El carrusel puede seguir haciendo referencia a un array codificado en lugar de los datos JSON.

## Próximos pasos
- Verificar que `App.jsx` pase `lang={lang}` a `<Slideshow />`.
- Asegurar que `pt.json` contenga un array `slides` con la misma estructura que `en.json`.
- Confirmar que `Slideshow.jsx` use `translations[lang].slides` en lugar de un array local codificado.
- Probar el cambio de idioma mediante el menú desplegable `<select>` para confirmar actualizaciones dinámicas.

## Notas
Esta versión está marcada como **Alpha** porque el soporte de traducción está incompleto. El problema del carrusel debe resolverse antes de pasar a Beta. Publicar esta actualización permite que los colaboradores revisen la implementación actual y ayuden a corregir el error de traducción del carrusel.

### Autor
BeknYTProgramador

### Conectar
<a href="https://github.com/BeknYTProgramador" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-BeknYTProgramador-black?logo=github" alt="Perfil GitHub"/>
</a>
