# DIN semipresencial 2023-24 - Proyecto 2ª Evaluación

- [Introducción](#introducción)
- [Entrega](#entrega)
- [Enunciado](#enunciado)
    - [Vista principal](#vista-principal)
    - [Vista de detalle de evento](#vista-de-detalle-de-evento)
    - [Vista de creación de evento](#vista-de-creación-de-evento)
    - [Vista de edición](#vista-de-edición)
- [Documentación](#documentación)
- [Rúbrica de evaluación:](#rúbrica-de-evaluación)
- [Crear el servicio local con `json-server`](#crear-el-servicio-local-con-json-server)

## Introducción

El objetivo es crear una aplicación de escritorio con _Flutter_ que permitirá gestionar distintos tipos de eventos (_conciertos, obras de teatro, conferencias, actividades deportivas, etc._). Se podrán listar, ordenar, filtrar, crear, editar, borrar y marcar como favoritos. Tendrá comunicación con un servicio API REST que almacenará y proporcionará los datos de los eventos.

En caso de obtener una calificación superior a cinco puntos el proyecto, no será necesario presentarse a la convocatoria de examen de la segunda evaluación. Los resultados se publicarán con, al menos, dos días de antelación a la fecha de examen.

## Entrega

En repositorio de _**GitHub Classroom**_ donde se debe realizar el proyecto es el siguiente:

[**https://classroom.github.com/a/VuKBU2DS**](https://classroom.github.com/a/VuKBU2DS)

**Fecha límite** de presentación del proyecto **16/02/2024** a las _23:59_.

Una vez terminado el proyecto, indicarlo marcando la actividad de _Aules_ cómo terminada.

En caso de no presentar o no obtener el aprobado en el proyecto, se realizará el examen de la segunda evaluación en la fecha establecida. _Lunes 19/02/2024_

## Enunciado

Crear una aplicación en _Flutter_ y documentar el proyecto.

Se creará una aplicación de escritorio que permita una gestión eventos, con las siguientes características:

### Vista principal

- Título de la vista: "_**Listado de eventos**_".
- Muestra un **listado tipo rejilla** (_grid_) de eventos. Por defecto, no se mostrarán eventos pasados, anteriores a la fecha actual.
- Cada elemento de la lista mostrará la siguiente información:
    - **Título**.
    - **Descripción**.
    - **Fecha**.
    - **Precio**.
    - **Imagen**.
    - **Botón** que permite marcar el evento como **favorito**. Almacena el `id` del evento en el **almacenamiento local**.
- Al pulsar sobre un elemento de la lista, abrirá una nueva página con el detalle del evento seleccionado.
- Controles de la lista:
    - Elemento para **filtrar** los elementos del listado por "**favoritos**".
    - Elemento para **ordenar** los elementos del listado por "**fecha**".
    - Elemento para **ordenar** los elementos del listado por "**precio**".
    - Elemento que permita **mostrar/ocultar eventos pasados**, anteriores a la fecha actual.
- En la **barra superior**:
    - Elemento que permite crear un **nuevo evento**.

### Vista de detalle de evento

- **Título** de la ventana: _**`{título del evento}`**_, donde `{título del evento}` es el título que tiene el evento que se está mostrando.
- Muestra la siguiente información:
    - **Título**.
    - **Descripción**.
    - **Fecha**.
    - **Precio**.
    - **Imagen**.
    - **Botón** que permite marcar el evento como **favorito**. Almacena el `id` del evento en el **almacenamiento local**.
- En la **barra superior**:
    - Elemento que permite **volver** al listado de eventos.
    - Elemento que permite **editar** el evento.
    - Elemento que permite **borrar** el evento, pidiendo **confirmación** mediante un diálogo.
    - Elemento que permite **guardar** el evento como **favorito**.

### Vista de creación de evento

- **Título** de la ventana: "_**Nuevo evento**_".
- Muestra un **formulario** que permite crear un nuevo evento. El formulario
tendrá los siguientes elementos:
    - Entrada de texto **Título**: Requerido. Entre 5 y 50 caracteres.
    - Entrada de texto **Descripción**: Opcional. Entre 5 y 255 caracteres.
    - Selector de **Fecha**: Requerido. Debe ser la fecha actual o posterior. Se mostrará un calendario (_datepicker_) para seleccionar la fecha.
    - Entra da numérica **Precio**: Requerido. Por defecto, 0. No debe ser negativo.
    - Selector de **Imagen**: Opcional. Se mostrara un selector de archivos tipo imagen (_imagepicker_).
    - **Vista previa** de la imagen seleccionada, en caso de haberla.
    - Botón **Crear**. Almacena el evento y vuelve al listado.
    - Botón **Descartar**. Muestra un dialogo de confirmación, en caso afirmativo, vuelve al listado sin guardar cambios.
- En la **barra superior**:
    - Elemento que permite **volver** al listado de eventos. Muestra un dialogo de **confirmación**, en caso afirmativo, vuelve al listado sin guardar cambios.

### Vista de edición

- **Título** de la ventana: "_**Edición de `{título del evento}`**_, donde `{título del evento}` es el título del evento que se está editando.
- Muestra un **formulario** similar a la vista de creación, con los datos rellenados.
    - Tendrá las mismas **validaciones** que la vista de creación.
    - Botón **Eliminar imagen** que elimina la imagen seleccionada.
    - Botón **Guardar**. Se activa si se han hecho cambios. Guarda los cambios y vuelve al listado.
    - Botón **Volver**. Si hay cambios sin guardar, mostrará un dialogo de confirmación.
    - El **diálogo de confirmación** tendrá las siguientes opciones:
        - **Mensaje** indicando que hay cambios sin guardar.
        - Botón **Guardar**, guarda cambios y vuelve al listado.
        - Botón **Descartar**, no guarda cambios y vuelve al listado.
        - Botón **Cancelar**. Cierra el dialogo y continua en la vista de edición.

## Documentación

Se creará un fichero de texto **`Readme.md`** en la raíz del proyecto documentando los detalles de implementación de la aplicación, estructura del proyecto, decisiones de diseño para cada una de las vistas, y las dificultades encontradas durante el desarrollo.

## Rúbrica de evaluación:

- **Diseño** de las vistas **`2 puntos`**:
    - Se diseñan todas las vistas.
    - Se incluyen todos los elementos.
    - Se seleccionan elementos apropiados.
    - El diseño es coherente y tiene un estilo uniforme.
    - Se utilizan colores con contrastes adecuados que permiten leer los textos.
    - Se presenta feedback en elementos necesarios.
- **Widgets** **`2 puntos`**:
    - Se crean _widgets_, en archivos separados, para cada vista.
    - Se reutilizan los _widgets_ creados.
- **Funcionalidad** **`4 puntos`**:
    - Se gestiona el estado de la aplicación y las diferentes vistas.
    - Se implementan las funcionalidades.
    - Se implementa la navegación entre vistas.
    - Se validan las distintas entradas de los formularios.
    - Se implementa la gestión de errores.
    - Se implementa la comunicación con el servidor.****
- **Implementación** **`2 puntos`**:
    - El código está bien estructurado, tiene buena legibilidad y los archivos del proyecto están muy bien organizados.
    - Se han hecho al menos 10 commits, en el repositorio que demuestren la progresión del proyecto.
    - Se indican mensajes claros y concisos de los commits realizados.
    - Se aporta una buena documentación. El `Readme.md` está muy completo, muy bien formateado, incluye imágenes, junto con la estructura y decisiones de diseño para cada una de las vistas, y las dificultades encontradas durante el desarrollo.
    - Se han cuidado mucho los detalles en diferentes aspectos de la aplicación, como la coherencia en el diseño de interfaces y ausencia de bugs.

En caso de detectar alguna irregularidad, se deberá defender el proyecto de manera presencial.

## Crear el servicio local con `json-server`

Para simular el servicio web, vamos a utilizar `json-server`. Este es un paquete de `Node.js` que permite crear un servicio API REST que sirve datos a partir de un archivo `JSON` definido.

Para instalarlo, crea una nueva carpeta en el directorio raíz del proyecto llamada `server/` y dentro de ella ejecuta:

```bash
npm init -y
npm install json-server@0
```

Crea un archivo `db.json` con el siguiente contenido:

```json title="server/db.json"
{
  "eventos": [
    {
      "id": "1",
      "title": "Evento 1",
      "image": "https://picsum.photos/200/300",
      "date": "2024-02-10",
      "description": "Descripción del primer evento",
      "price": 20.0
    },
    {
      "id": "2",
      "title": "Evento 2",
      "image": "https://picsum.photos/200/300",
      "date": "2024-05-20",
      "description": "Descripción del segundo evento",
      "price": 40.0
    }
  ]
}
```

Para arrancar el servidor, ejecuta:

```bash
npx json-server --watch db.json
```

Alternativamente, se puede editar el archivo `package.json` y añadir el siguiente _script_:

```json title="server/package.json"
{
  ...
  "scripts": {
    "server": "json-server --watch db.json"
  },
  ...
}
```

Y ejecutar el servidor con:

```bash
npm run server
```

!!!note "Importante"
    Recordar ejecutar siempre el servicio desde la carpeta `server/`.

Si todo va bien, se puede acceder a la URL `http://localhost:3000/eventos`. Para ver los eventos creados en el archivo `db.json`, se accede a la URL `http://localhost:3000/eventos`.

!!!note "Otras opciones de configuración"
    Se puede cambiar el puerto por defecto (`3000`) con el parámetro `--port`, o también, simular un retardo en las respuestas con `--delay`.

    ```bash
    npx json-server --watch db.json --port 3001 --delay 500
    ```

En la corrección del proyecto, se utilizará el servicio local en el puerto `3000` con un retardo de `500ms`. Por lo tanto, se recomienda utilizar la misma configuración para evitar problemas. También se harán pruebas con el servicio desactivado para comprobar que no se producen errores en la aplicación al perder la conexión con el servicio.
