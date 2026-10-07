# Aula v0.1

Tu aula de estudio personal: lecciones interactivas, repaso espaciado y diario técnico. Es la **v0**: una herramienta para estudiar ya. La versión profesional (v1) es el proyecto que vas a construir tú durante el curso.

## Qué trae

- **Inicio:** racha, progreso, lección siguiente, tarjetas pendientes y el botón **Copiar resumen para Claude**.
- **Programa:** las 24 semanas por fases. La Semana 1 viene completa; las demás se cargan cuando llegues a ellas.
- **Lección:** concepto, código con colores, ejercicios para **predecir** antes de ver la respuesta, quizzes, tareas y checklist.
- **Repaso:** tarjetas con repetición espaciada (sistema Leitner: 1, 3, 7, 16 y 35 días).
- **Diario:** las 5 preguntas de cierre de cada semana.
- **Más:** crear cursos, importar o exportar cursos y lecciones en JSON, respaldo y restauración.
- Funciona **sin internet** una vez abierta, y se puede instalar en el celular como app.

## Cómo publicarla en GitHub Pages (5 minutos)

1. Crea un repo en GitHub, por ejemplo `aula`.
2. Sube **todo el contenido de esta carpeta** (index.html, seed.js, sw.js, manifest.webmanifest, `vendor/` e `icons/`).
3. En el repo: *Settings → Pages → Source: Deploy from a branch → main / root*.
4. Abre `https://lordfullstack.github.io/aula/` en el Xiaomi y en Chrome toca **⋮ → Agregar a la pantalla principal**.

> Si abres `index.html` con doble clic funciona, pero no se puede instalar ni trabaja sin internet. Para eso tiene que estar publicada (https).

## El flujo de cada semana

1. Abres Aula y haces la lección de la semana.
2. Al terminar, en **Inicio → Copiar resumen para Claude**, y lo pegas en el chat del proyecto "auto aprendizaje".
3. Claude revisa tus respuestas, actualiza la memoria y te entrega la **lección de la semana siguiente** en JSON.
4. La pegas en **Más → Importar**. Lista.

## Seguridad de esta v0 (léelo)

- Los datos viven **solo en el navegador de ese dispositivo** (localStorage). No hay cuentas ni servidor.
- Si borras los datos del navegador, se pierden: **descarga un respaldo cada semana** (Más → Descargar respaldo) y guárdalo en Drive.
- No guardes aquí contraseñas, llaves ni datos de otras personas.
- Los cursos importados se muestran como texto: el HTML que traigan **no se ejecuta** (protección contra XSS).
- Las librerías están **incluidas en `vendor/`**, no se cargan de un CDN. Así funciona sin internet y nadie puede cambiarte el código desde afuera.
- Esta v0 la construyó Claude y es solo para tu uso personal. Antes de que la use otra persona, pasa por la v1 del curso.

## Si cambias archivos

- Cambiaste `index.html`, `seed.js` u otro archivo: sube el número de `VERSION` en `sw.js` para que el celular reciba la actualización.
- Cambiaste el curso en `seed.js`: sube también su campo `version`.
