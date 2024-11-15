# UD5 - 5.1 Usabilidad y experiencia de usuario

## Introducción

La **usabilidad** es la facilidad con la que un usuario puede utilizar una aplicación para realizar una tarea concreta.

Según la organización internacional W3C (_World Wide Web Consortium_), la usabilidad se define como:

> La **usabilidad** trata de **diseñar productos para que sean efectivos, eficientes y satisfactorios**. La usabilidad incluye el diseño de la **experiencia del usuario**. Esto puede incluir aspectos generales que impacten a todos y no afecten de manera desproporcionada a las personas con discapacidad.

## Porqué es importante la usabilidad

La usabilidad es una **condición necesaria para la supervivencia de un sistema**. Si una aplicación es **difícil** de usar, la gente la abandonará. Si los usuarios **se pierden** en la interfaz, se marcharán. Si la información es **difícil** de leer o no responde a las preguntas clave de los usuarios, estos lo abandonan. No existe un usuario que lea el **manual** o que pase mucho tiempo tratando de descubrir una interfaz. Hay muchas otras alternativas disponibles; **salir es la primera línea de defensa cuando los usuarios encuentran una dificultad**.

> _La primera ley del comercio electrónico es que si los usuarios no encuentran el producto, tampoco pueden comprarlo._

Las buenas prácticas aconsejan gastar alrededor del **10% del presupuesto** de un proyecto de diseño en usabilidad. En promedio, esto duplicará con creces las métricas de calidad. Las mejoras suelen ser sustanciales cuando se enfatiza la usabilidad en el proceso de diseño.

Para **proyectos internos**, mejorar la usabilidad reduce el presupuesto de **capacitación** del personal y aumenta la cantidad de **transacciones** que realizan los empleados por hora. Para **diseños externos**, aumenta las **ventas**, el número de **usuarios** registrados o clientes potenciales, o cualquier otro indicador clave de rendimiento (KPI).

## Las 10 heurísticas de _Nielsen_ para el diseño de interfaces de usuario

En 1994, _Jakob Nielsen_ publicó **10 heurísticas para el diseño de interfaces de usuario**, que se han convertido en un **estándar** para evaluar la usabilidad de una aplicación. Estas heurísticas se pueden aplicar a cualquier tipo de interfaz de usuario, incluidas las aplicaciones de **escritorio**, **web** y **móviles**.

A continuación, se describen las 10 heurísticas de _Nielsen_, actualizadas en 2020, extraídas del artículo [_10 Usability Heuristics for User Interface Design_](https://www.nngroup.com/articles/ten-usability-heuristics/), y se proporcionan enlaces a artículos y recursos adicionales.

### #1. Visibilidad del estado del sistema

<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><g><rect fill="none" height="24" width="24"/></g><g><path d="M17,5v16c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h2V2h4v2h2C16.55,4,17,4.45,17,5z M15,6H9v8h6V6z"/></g></svg>

El diseño **siempre debe mantener informados a los usuarios** sobre lo que está sucediendo, a través de comentarios adecuados dentro de un período de tiempo razonable.

Cuando los usuarios conocen el estado actual del sistema, conocen el resultado de sus interacciones anteriores y determinan los próximos pasos. Las interacciones predecibles crean confianza tanto en el producto como en la marca.

- **Comunicar** claramente a los usuarios cuál es el **estado** del sistema; no se debe realizar ninguna acción con consecuencias para los usuarios sin informarles.
- Presentar comentarios al usuario lo más **rápido** posible (idealmente, inmediatamente).
- Generar confianza a través de una **comunicación abierta y continua**.

Artículo: [Visibility of System Status (Usability Heuristic #1)](https://www.nngroup.com/articles/visibility-system-status/)

Infografía: [Heuristic 1 - Visibility of System Status (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%201.pdf)

### #2. Relación entre el sistema y el mundo real

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>

El diseño debe hablar el idioma de los usuarios. Utiliza palabras, frases y conceptos **familiares para el usuario**, en lugar de jerga interna. Sigue las **convenciones del mundo real**, haciendo que la información aparezca en un orden natural y lógico.

- Asegurarse de que los usuarios puedan **comprender** el significado sin tener que buscar la definición de una palabra.
- **No asumir** nunca que la comprensión de palabras o conceptos coincidirá con la de sus usuarios.
- **Analizar la audiencia** descubrirá la terminología familiar, así como sus modelos mentales en torno a conceptos importantes.

Artículo: [Match Between System and the Real World (Usability Heuristic #2)](https://www.nngroup.com/articles/match-system-real-world/)

Infografía: [Heuristic 2 - Match Between System and the Real World (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%202.pdf)

### #3. Control y libertad del usuario

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>

Los usuarios suelen realizar acciones por error o cambian de opinión. **Necesitan una "salida de emergencia" claramente marcada** para abandonar la acción no deseada sin tener que pasar por un proceso extenso.

- Permitir **`Deshacer`** y **`Rehacer**`.
- Mostrar una forma clara de salir de la interacción actual, como un botón **`Cancelar`**.
- Asegurarse de que la salida esté claramente **etiquetada** y sea **visible**.

Artículo: [User Control and Freedom (Usability Heuristic #3)](https://www.nngroup.com/articles/user-control-and-freedom/)

Infografía: [Heuristic 3 - User Control and Freedom (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%203.pdf)

### #4. Consistencia y estándares

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>

Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. **Sigue las convenciones de la industria y la plataforma**.

Según la **Ley de _Jakob_** establece que las personas pasan la mayor parte de su tiempo utilizando productos digitales distintos al nuestro. Las experiencias de los usuarios con esos otros productos establecen sus expectativas. No mantener la coherencia puede aumentar la carga cognitiva de los usuarios al obligarlos a aprender algo nuevo.

- Mejorar la **capacidad de aprendizaje** manteniendo ambos tipos de coherencia: interna y externa.
- **Consistencia interna**: Mantener la **coherencia** dentro de un solo producto o una familia de productos.
- **Consistencia externa**: Seguir las **convenciones** establecidas de la industria.

Artículo: [Maintain Consistency and Adhere to Standards (Usability Heuristic #4)](https://www.nngroup.com/articles/consistency-and-standards/)

Infografía: [Heuristic 4 - Consistency and Standards (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%204.pdf)

### #5. Prevención de errores

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>

Los buenos mensajes de error son importantes, pero los mejores diseños deben **evitar cuidadosamente los errores**. Eliminar las condiciones propensas a errores o presentar a los usuarios una opción de confirmación antes de comprometerse con la acción.

Hay dos tipos de errores: descuidos y equivocaciones. Los descuidos son **errores inconscientes** causados por falta de atención. Las equivocaciones son **errores conscientes** basados en un desajuste entre el modelo mental del usuario y el diseño.

- **Priorizar el esfuerzo**: evita primero los errores con alto coste y luego las pequeñas frustraciones.
- Evitar **descuidos** proporcionando **restricciones** útiles y buenos **valores predeterminados**.
- Evitar **equivocaciones** eliminando cargas de **memoria**, permitiendo **deshacer** y **advirtiendo** a sus usuarios.

Artículo: [Preventing User Errors: Avoiding Unconscious Slips](https://www.nngroup.com/articles/slips/)

Infografía: [Heuristic 5 - Error Prevention (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%205.pdf)

### #6. Reconocer en lugar de recordar

<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13,8.57c-0.79,0-1.43,0.64-1.43,1.43s0.64,1.43,1.43,1.43s1.43-0.64,1.43-1.43S13.79,8.57,13,8.57z"/><path d="M13,3C9.25,3,6.2,5.94,6.02,9.64L4.1,12.2C3.85,12.53,4.09,13,4.5,13H6v3c0,1.1,0.9,2,2,2h1v3h7v-4.68 c2.36-1.12,4-3.53,4-6.32C20,6.13,16.87,3,13,3z M16,10c0,0.13-0.01,0.26-0.02,0.39l0.83,0.66c0.08,0.06,0.1,0.16,0.05,0.25 l-0.8,1.39c-0.05,0.09-0.16,0.12-0.24,0.09l-0.99-0.4c-0.21,0.16-0.43,0.29-0.67,0.39L14,13.83c-0.01,0.1-0.1,0.17-0.2,0.17h-1.6 c-0.1,0-0.18-0.07-0.2-0.17l-0.15-1.06c-0.25-0.1-0.47-0.23-0.68-0.39l-0.99,0.4c-0.09,0.03-0.2,0-0.25-0.09l-0.8-1.39 c-0.05-0.08-0.03-0.19,0.05-0.25l0.84-0.66C10.01,10.26,10,10.13,10,10c0-0.13,0.02-0.27,0.04-0.39L9.19,8.95 c-0.08-0.06-0.1-0.16-0.05-0.26l0.8-1.38c0.05-0.09,0.15-0.12,0.24-0.09l1,0.4c0.2-0.15,0.43-0.29,0.67-0.39l0.15-1.06 C12.02,6.07,12.1,6,12.2,6h1.6c0.1,0,0.18,0.07,0.2,0.17l0.15,1.06c0.24,0.1,0.46,0.23,0.67,0.39l1-0.4c0.09-0.03,0.2,0,0.24,0.09 l0.8,1.38c0.05,0.09,0.03,0.2-0.05,0.26l-0.85,0.66C15.99,9.73,16,9.86,16,10z"/></g></g></svg>

Minimizar la carga de memoria del usuario haciendo visibles elementos, acciones y opciones. El usuario **no debería tener que recordar información** de una parte de la interfaz a otra. La información necesaria para utilizar el diseño (por ejemplo, etiquetas de campos de entrada o elementos de menú) debe ser visible o fácilmente recuperable cuando sea necesario.

Los humanos tienen memorias limitadas a corto plazo. Las interfaces que promueven el reconocimiento reducen la cantidad de esfuerzo cognitivo requerido por parte de los usuarios.

- Permitir que las personas **reconozcan** la información en la interfaz, en lugar de obligarlas a recordarla.
- Ofrecer **ayuda de contexto**, en lugar de presentar un largo tutorial para memorizar.
- **Reducir la información** que los usuarios tienen que recordar.

Artículo: [Memory Recognition and Recall in User Interfaces](https://www.nngroup.com/articles/recognition-and-recall/)

Infografía: [Heuristic 6 - Recognition Rather Than Recall (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%206.pdf)

### #7. Flexibilidad y eficiencia de uso

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>

Los atajos, ocultos para los usuarios novatos, pueden acelerar la interacción del usuario experto, de modo que el diseño pueda **atender tanto a usuarios experimentados como a inexpertos**. Permitir a los usuarios personalizar las acciones frecuentes.

Los procesos flexibles se pueden llevar a cabo de diferentes maneras, de modo que las personas puedan elegir el método que más les convenga.

- Proporcionar **aceleradores** como atajos de teclado y gestos táctiles.
- Crear diseños adaptando el contenido y la funcionalidad al **rol** de cada usuario.
- Permitir la **personalización**, para que los usuarios puedan elegir cómo quieren que funcione el producto.

Artículo: [Flexibility and Efficiency of Use (Usability Heuristic #7)](https://www.nngroup.com/articles/flexibility-efficiency-heuristic/)

Infografía: [Heuristic 7 - Flexibility and Efficiency of Use (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%207.pdf)

### #8. Estética y diseño minimalista

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>

Las interfaces **no deben contener información irrelevante** o que rara vez se necesite. Cada unidad adicional de información en una interfaz compite con las unidades de información relevantes y disminuye su visibilidad relativa.

Esta heurística no significa tener que usar un diseño plano; se trata de asegurarse de mantener el contenido y el diseño visual enfocados en lo esencial. Asegurarse de que los elementos visuales de la interfaz respalden los objetivos principales del usuario.

- Mantener el contenido y el diseño visual de la interfaz de usuario **centrados en lo esencial**.
- No permitir que **elementos innecesario**s distraigan a los usuarios de la información que realmente necesitan.
- **Priorizar** el contenido y las funciones para mantener los **objetivos principales**.

Artículo: [Aesthetic and Minimalist Design (Usability Heuristic #8)](https://www.nngroup.com/articles/aesthetic-minimalist-design/)

Infografía: [Heuristic 8 - Aesthetic and Minimalist Design (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%208.pdf)

### #9. Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de los errores

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>

Los mensajes de error deben expresarse en un **lenguaje sencillo** (sin códigos de error), indicar con precisión el problema y sugerir una solución de manera constructiva.

Estos mensajes de error también deben presentarse con tratamientos visuales que ayuden a los usuarios a notarlos y reconocerlos.

- Utilizar **elementos visuales** tradicionales para mensajes de error, como texto en negrita y rojo.
- Informar a los usuarios qué salió mal en un lenguaje que puedan entender; **evitar la lenguaje técnico**.
- Ofrecer a los usuarios una **solución o alternativa**, como un acceso directo que pueda resolver el error de inmediato.

Artículo: [Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/)

Infografía: [Heuristic 9 - Help Users Recognize, Diagnose, and Recover from Errors (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%209.pdf)

### #10. Ayuda y documentación

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>

Es mejor si el sistema no necesita ninguna explicación adicional. Sin embargo, puede ser necesario proporcionar documentación para **ayudar a los usuarios a comprender** cómo completar sus tareas.

El contenido de la ayuda y documentación debe ser fácil de encontrar y estar centrado en la tarea del usuario. Debe ser conciso y enumerar los pasos concretos que deben llevarse a cabo.

- Asegurarse que la documentación de ayuda sea **fácil de encontrar**.
- Siempre que sea posible, presentar la documentación en el **contexto** justo en el momento que el usuario lo requiera.
- Enumerar los **pasos concretos** a llevar a cabo.

Artículo: [Help and Documentation (Usability Heuristic #10)](https://www.nngroup.com/articles/help-and-documentation/)

Infografía: [Heuristic 10 - Help and Documentation (PDF)](./assets/pdf/NNg%20Jakob's%20Usability%20Heuristic%2010.pdf)

## Experiencia de usuario UX

La **experiencia de usuario** es el proceso de diseño de productos que sean útiles, fáciles de usar y agradables de interactuar.

Existen una serie de Leyes de la UX que nos ayudan a diseñar productos que cumplan con estos requisitos, a continuación se describen algunas de las más importantes:

### Ley de _Hick_

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg> La **Ley de _Hick_** establece que el **tiempo que se tarda en tomar una decisión** aumenta con el **número opciones**.

### Ley de _Fitts_


<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><g><rect fill="none" height="24" width="24"/></g><g><path d="M13.92,8C13.44,5.16,10.97,3,8,3C4.69,3,2,5.69,2,9c0,2.97,2.16,5.44,5,5.92L7,21h2l0-6.09c0-0.98-0.71-1.8-1.67-1.97 C5.44,12.63,4,10.98,4,9c0-2.21,1.79-4,4-4c1.98,0,3.63,1.44,3.94,3.33C12.11,9.29,12.93,10,13.91,10l4.26,0l-1.59,1.59L18,13l4-4 l-4-4l-1.41,1.41L18.17,8L13.92,8z"/></g></svg> La **Ley de _Fitts_** establece que el **tiempo que se tarda en moverse** a un objetivo depende de dos factores: la **distancia** al objetivo y el **tamaño** del objetivo.

### Ley de _Miller_

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2l-5.5 9h11z"/><circle cx="17.5" cy="17.5" r="4.5"/><path d="M3 13.5h8v8H3z"/></svg> La **Ley de _Miller_** establece que el **número de elementos** que una persona puede retener en su **memoria a corto plazo** es de **7 a 2**.

### Ley de proximidad

<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M19.5,9.5c-1.03,0-1.9,0.62-2.29,1.5h-2.92C13.9,10.12,13.03,9.5,12,9.5s-1.9,0.62-2.29,1.5H6.79 C6.4,10.12,5.53,9.5,4.5,9.5C3.12,9.5,2,10.62,2,12s1.12,2.5,2.5,2.5c1.03,0,1.9-0.62,2.29-1.5h2.92c0.39,0.88,1.26,1.5,2.29,1.5 s1.9-0.62,2.29-1.5h2.92c0.39,0.88,1.26,1.5,2.29,1.5c1.38,0,2.5-1.12,2.5-2.5S20.88,9.5,19.5,9.5z"/></g></g></g></svg> La **Ley de proximidad** establece que los elementos que están **cerca** entre sí se perciben como **relacionados**.

### Efecto de Usabilidad Estética

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg> El **Efecto de Usabilidad Estética** establece que las personas perciben los **diseños estéticos** como más **fáciles** de usar que los diseños menos estéticos.

### Ley de Pregnancia

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><circle cx="14.5" cy="10.5" r="1.25"/><circle cx="9.5" cy="10.5" r="1.25"/><path d="M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"/></svg> La **Ley de Pregnancia** establece que las personas perciben los **diseños más simples** como más **intuitivos** que los diseños más complejos.

### Ley de Similitud o Semejanza

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg> La **Ley de Similitud o Semeljanza** establece que los elementos que comparten atributos visuales como forma, tamaño, color, textura o valor se perciben como más **relacionados** que los elementos que no comparten atributos visuales.

### Efecto de Posicionamiento en Serie

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg> El **Efecto de Posicionamiento en Serie** establece que las personas recuerdan mejor los elementos al **principio** y al **final** de una lista.

### Efecto de Von Restorff

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/></svg> El **Efecto de Von Restorff** establece que los elementos que se destacan de su entorno se **recuerdan** mejor que los elementos que se mezclan con su entorno.

### Ley de _Tesler_

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4l16-.02V7z"/></svg> La **Ley de _Tesler_**, principio de Conservación de la Complejidad, establece que cada aplicación tiene una cantidad fija de complejidad que no se puede eliminar o reducir. La única opción es mover la complejidad de un lugar a otro.

## Referencias

- [_Nielsen Norman Group_ - _10 Usability Heuristics for User Interface Design_](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Leyes de la UX](https://lawsofux.com/es/)
- [Wikipedia - Experiencia de usuario](https://es.wikipedia.org/wiki/Experiencia_de_usuario)
