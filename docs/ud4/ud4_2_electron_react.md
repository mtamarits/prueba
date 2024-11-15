# UD4 - 4.2 Integración de _React_ en _Electron_

## Introducción

En este apartado veremos cómo integrar _React_ en una aplicación _Electron_ mediante [electron-vite](https://electron-vite.org/).

## Integración de React en Electron

[electron-vite](https://electron-vite.org/) proporciona una plantilla de proyecto con todo lo necesario para empezar a trabajar.

En este caso, crearemos un proyecto con **_React_** y **_JavaScript_** (no _TypeScript_):

```bash
$ npm create @quick-start/electron electron-react-app -- --template react
```

Donde:

- `npm create @quick-start/electron`: crea un proyecto _Electron_ con _electron-vite_
- `electron-react-app`: es nombre que queramos darle al proyecto
- `--template react`: indica que utilice plantilla de proyecto con _React_

Hará una serie de preguntas, a las que responderemos `No`:

```text
✔ Add TypeScript? … No
✔ Add Electron updater plugin? … No
✔ Enable Electron download mirror proxy? … No

Scaffolding project in electron-react-app...

Done. Now run:

  cd electron-react-app
  npm install
  npm run dev
```

!!! note "Nota"
    No vamos a utilizar _TypeScript_, ni el _plugin_ de actualización de _Electron_, ni el _proxy_ de descarga de _Electron_.

    - _Typescript_ es un lenguaje de programación que es una extensión de _JavaScript_ que añade tipos de datos. Es muy utilizado en proyectos de _JavaScript_ de gran tamaño, pero no es necesario para proyectos pequeños.

    - El _plugin_ de actualización de _Electron_ permite actualizar la aplicación automáticamente cuando hay una nueva versión disponible.

    - El _proxy_ de descarga de _Electron_ permite descargar _Electron_ desde un servidor local, en lugar de desde los servidores oficiales.

Una vez terminado, nos situamos en el directorio del proyecto, instalamos las dependencias, abrimos el proyecto en _vscode_ e iniciamos la aplicación:

```bash
$ cd electron-react-app
$ npm install
$ code .
$ npm run dev
```

## Estructura de archivos

La estructura de archivos que nos proporciona _electron-vite_ es la siguiente:

```text hl_lines="4 11-16"
.
├── build/
├── resources/
├── src
│   ├── main
│   │   └── index.js
│   ├── preload
│   │   └── index.js
│   └── renderer
│       ├── index.html
│       └── src
│           ├── App.jsx
│           ├── assets
│           ├── components
│           │   └── Versions.jsx
│           └── main.jsx
├── electron-builder.yml
├── electron.vite.config.js
├── package.json
├── package-lock.json
└── README.md
```

La aplicación electron se sitúa en `src/`, y está dividida en tres partes:

- `src/main/`: código de electron
- `src/preload/`: código que precarga
- `src/renderer/src/`: código de la aplicación _React_

Como vemos, se ha movido el código de la aplicación _React_ a `src/renderer/src/`.

## Código de la aplicación

El **proceso principal** de _Electron_ se encuentra en `src/main/index.js`.

El **proceso de renderizado** de _Electron_ se encuentra en `src/renderer/main.html` que es la página que cargará la ventana principal de la aplicación. `src/renderer/main.html` carga el módulo `src/renderer/src/main.jsx`, y este, carga el componente `src/renderer/src/App.jsx` que contiene la aplicación _React_.

El **script de precarga** se encuentra en `src/preload/index.js`. Como vimos, este script se ejecuta en el proceso de renderizado antes de cargar el código de la aplicación _React_, y tiene la siguiente estructura:

```js title="src/preload/index.js" linenums="1" hl_lines="5 12-13"
import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
```

expone dos objetos en el contexto global del proceso de renderizado:

- `electron`: utiliza el módulo `@electron-toolkit/preload` que expone las API de _Electron_ en el proceso de renderizado.

    _Por ejemplo_, para enviar un mensaje al proceso principal: `window.electron.ipcRenderer.send('setWindowTitle', 'Mi aplicación')` desde el proceso de renderizado, sin tener que declarar el módulo `ipcRenderer` en el script de precarga.

- `api`: podemos definir aquí nuestras propias funciones que queramos exponer en el proceso de renderizado, de la forma que vimos en [3.2 Comunicación entre procesos](../ud3/ud3_2_electron_procesos.md).


