# Grupo 33 — Trabajo Práctico N.º 1 | Frontend

**Segunda versión — mejoras fundamentadas a partir de la devolución docente**  
**Integrantes actuales:** Jonatan Emanuel Uribio, Gonzalo Moretti y Gabriel Zarza.  
**Nota de la primera entrega:** **5,75/10** (rúbrica del segundo cuatrimestre de 2026).

> **Alcance de este documento:** se describen cambios observables en el código de la versión reconstruida y se distinguen de las pruebas y publicaciones que aún faltan. No se solicita una calificación automática de 10/10: se presenta evidencia para una nueva evaluación docente.

## 1. Propósito

El sitio presenta al Grupo 33 mediante una portada, tres perfiles personales y una bitácora de desarrollo. Después de recibir la devolución, se reconstruyó la interfaz para mejorar la navegación, la uniformidad de los perfiles, el diseño adaptable, las interacciones y la documentación. La versión vigente **incluye a Jonatan, Gonzalo y Gabriel**.

## 2. Resumen de la rúbrica y mejoras

| N.º | Criterio docente | Puntaje anterior | Mejora en la versión reconstruida | Evidencia / estado |
|---|---|---:|---|---|
| 1 | Gestión de repositorio y publicación | 1,00 | Código organizado y preparado para repositorio propio. | **Pendiente:** subir a GitHub, registrar commits reales de cada integrante y publicar en Vercel. |
| 2 | Estructura de navegación y enlaces | 0,25 | Enlaces internos entre portada, perfiles y bitácora; se busca evitar depender del botón Atrás. | `index.html`, `perfiles/*.html`, `bitacora.html`. **Pendiente:** prueba manual de todos los enlaces. |
| 3 | Portada principal y listado | 0,50 | Portada con identidad visual común, propósito del sitio y listado actualizado de tres integrantes. | `index.html`. |
| 4 | Tarjetas de presentación individual | 0,50 | Tres páginas con estructura visual compartida, imágenes y secciones de información personal. | `perfiles/jonatan.html`, `perfiles/gonzalo.html`, `perfiles/gabriel.html`. **Pendiente:** confirmar exactitud de todos los datos personales e intereses. |
| 5 | Diseño adaptativo y breakpoints | 0,75 | CSS responsive con estrategia móvil y ajustes a 600 y 900 px. | `css/styles.css`. **Pendiente:** capturas y pruebas a 400, 900 y 1200 px. |
| 6 | Estética, estilos CSS y tipografía | 0,50 | Estilos centralizados, componentes reutilizables, paleta consistente, tipografías Google Fonts y jerarquía visual común. | `css/styles.css` y páginas HTML. |
| 7 | Interactividad dinámica con JavaScript | 0,50 | Portada con respuesta al movimiento del puntero; cada perfil incorpora un botón con resultado dinámico. | `js/main.js`, `js/profile.js`. **Pendiente:** demostrar ejecución sin errores en consola. |
| 8 | Bitácora de desarrollo | 0,50 | Línea de tiempo que explica análisis, reorganización, rediseño, JavaScript, responsive y controles finales. | `bitacora.html`. **Pendiente:** completar con fechas, responsables y dificultades efectivamente verificadas. |
| 9 | Documentación obligatoria (README.md) | 0,50 | Instrucciones, estructura, funciones, justificación criterio por criterio y plan de evidencias. | Este documento. **Pendiente:** capturas y URL definitiva. |
| 10 | Uso de IA y criterio de privacidad | 0,75 | Declaración explícita de asistencia de IA, alcance de su contribución y necesidad de revisión humana. | Sección 9 de este README. |
| | **Total primera entrega** | **5,75/10** | **Nueva nota: a determinar por el profesor.** | |

## 3. Explicación técnica de los cambios más relevantes

### 3.1 Navegación (criterio 2: 0,25)

Se incorporó una estructura de navegación que enlaza la portada, los tres perfiles y la bitácora. Esto atiende directamente la observación de la primera entrega sobre enlaces faltantes y necesidad de recurrir al botón Atrás. **Verificación requerida:** ingresar desde `index.html` a cada sección y regresar usando enlaces visibles, tanto en escritorio como en móvil.

### 3.2 Portada y perfiles (criterios 3 y 4: 0,50 cada uno)

La portada se actualizó para presentar únicamente a los tres integrantes vigentes. Los perfiles usan una maquetación y estilos compartidos para evitar diferencias visuales entre integrantes. Cada perfil tiene una imagen local: `imgs/jonatan.jpeg`, `imgs/gonzalo.jpg` e `imgs/gabriel.jpg`. La imagen de Gonzalo fue actualizada con el recurso proporcionado por el equipo. **Verificación requerida:** revisar edades, localidades, habilidades, películas y discos en los tres perfiles antes de entregar.

### 3.3 Adaptabilidad y estética (criterios 5 y 6: 0,75 y 0,50)

La hoja `css/styles.css` concentra el sistema visual y contiene ajustes de diseño para distintos anchos. Se emplean técnicas de Flexbox/Grid y reglas responsive. La existencia de estas reglas **no demuestra por sí sola** que no haya desbordes; es necesario inspeccionar a **400 px, 900 px y 1200 px**, tal como pide la rúbrica, y adjuntar capturas.

### 3.4 JavaScript (criterio 7: 0,50)

- **Portada — `js/main.js`:** escucha `pointermove` y `pointerleave` sobre el elemento gráfico principal para modificar suavemente la posición de una tarjeta; respeta `prefers-reduced-motion`.
- **Jonatan — `js/profile.js`:** un botón muestra desafíos aleatorios relacionados con desarrollo y resolución de problemas.
- **Gonzalo — `js/profile.js`:** un botón muestra frases aleatorias y evita repetir la misma opción inmediatamente.
- **Gabriel — `js/profile.js`:** un botón muestra desafíos aleatorios y evita repetir inmediatamente el resultado anterior.

Los resultados se insertan con `textContent` y se anuncian mediante una región `aria-live`. **Verificación requerida:** hacer clic varias veces en cada perfil y revisar la consola del navegador.

### 3.5 Bitácora y documentación (criterios 8 y 9: 0,50 cada uno)

`bitacora.html` presenta las etapas de trabajo y sus decisiones técnicas. Este README documenta estructura, ejecución, funcionalidades y diferencias frente a la entrega anterior. Para una justificación sólida deben agregarse capturas reales y un registro verificable de participación del equipo.

## 4. Tecnologías

- **HTML5:** estructura semántica y enlaces.
- **CSS3:** variables, Flexbox, Grid, media queries y estilos adaptativos.
- **JavaScript sin frameworks:** eventos, generación aleatoria y actualización del DOM.
- **Google Fonts:** tipografías de la interfaz.
- **Git/GitHub y Vercel:** previstos para versionado y despliegue de la nueva entrega; **la publicación nueva aún no está acreditada**.

## 5. Estructura de carpetas

```text
frontend_grupo33_nuevo/
├── index.html
├── bitacora.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── profile.js
├── imgs/
│   ├── jonatan.jpeg
│   ├── gonzalo.jpg
│   └── gabriel.jpg
├── perfiles/
│   ├── jonatan.html
│   ├── gonzalo.html
│   └── gabriel.html
└── docs/
    └── capturas/
```

## 6. Cómo ejecutar el proyecto

1. Descargar y descomprimir el ZIP.
2. Abrir `frontend_grupo33_nuevo` en **Visual Studio Code**.
3. Abrir `index.html` con **Live Server** (recomendado) o directamente en un navegador.
4. Recorrer los tres perfiles y la bitácora.

**No se requiere Node.js, npm ni instalar dependencias.**

## 7. Plan de pruebas y evidencias

Antes de enviar el formulario de reconsideración, completar esta lista con resultados reales:

- [ ] Enlaces de portada, perfiles y bitácora: funcionan sin usar Atrás.
- [ ] Perfil de Jonatan: botón y contenido correctos.
- [ ] Perfil de Gonzalo: nueva imagen visible y botón funcional.
- [ ] Perfil de Gabriel: botón y contenido correctos.
- [ ] 400 px: sin desbordes ni superposiciones.
- [ ] 900 px: sin desbordes ni superposiciones.
- [ ] 1200 px: sin desbordes ni superposiciones.
- [ ] Consola del navegador: sin errores JavaScript.
- [ ] Datos personales e intereses confirmados por cada integrante.
- [ ] Capturas reales incorporadas en `docs/capturas/`.
- [ ] Repositorio nuevo con commits atribuibles a los tres integrantes.
- [ ] Sitio publicado y URL verificada.

**Capturas sugeridas:** `portada-escritorio.png`, `portada-movil-400.png`, `perfil-jonatan.png`, `perfil-gonzalo.png`, `perfil-gabriel.png`, `bitacora.png`, `responsive-900.png`, `responsive-1200.png`.

> No se incluyen capturas ficticias: deben tomarse del proyecto ejecutándose realmente.

## 8. Enlaces de entrega

- **Repositorio de la primera entrega (referencia histórica):** `https://github.com/julietanatbravo/team-profile.git`
- **Sitio de la primera entrega (referencia histórica):** `https://team-profile-one.vercel.app/`
- **Repositorio de la versión corregida:** PENDIENTE.
- **Sitio publicado de la versión corregida:** PENDIENTE.

Los enlaces históricos **no deben presentarse como prueba de la nueva versión**.

## 9. Uso de IA, autoría y privacidad

Se utilizó **ChatGPT (OpenAI)** como asistente técnico para analizar la rúbrica, proponer una reorganización del sitio y generar una primera versión del código HTML, CSS, JavaScript y de la documentación. La participación de la herramienta debe declararse de forma transparente: el equipo es responsable de revisar, comprender, corregir, probar y presentar el trabajo. La asistencia de IA no equivale a afirmar que cada integrante escribió manualmente cada línea.

Las imágenes de los perfiles proceden de materiales aportados para el proyecto; la imagen actualizada de Gonzalo fue proporcionada para esta revisión. No se deben publicar datos personales no autorizados, claves, tokens ni información sensible. Antes del despliegue, cada integrante debe validar su información y autorizar el uso de su imagen.

## 10. Texto orientativo para el formulario de revisión

> A partir de la devolución del TP1, cuya calificación fue 5,75/10, reconstruimos la presentación del Grupo 33 para atender los criterios con menor puntaje. Actualizamos la portada y los tres perfiles vigentes (Jonatan Emanuel Uribio, Gonzalo Moretti y Gabriel Zarza), unificamos la estética mediante CSS centralizado, incorporamos navegación interna entre secciones y añadimos funciones JavaScript tanto en la portada como en cada perfil. También ampliamos la bitácora y el README para documentar decisiones, tecnologías y el uso responsable de IA. Solicitamos que se reevalúen especialmente los criterios 2, 3, 4, 6, 7, 8 y 9 con base en el código actualizado y las evidencias que adjuntemos. Las pruebas responsive, los enlaces de despliegue y las capturas se completarán antes de presentar la solicitud definitiva.

**Importante:** actualizar el último párrafo cuando estén disponibles las pruebas y el sitio publicado; no afirmar que se adjuntaron evidencias que aún no existen.
