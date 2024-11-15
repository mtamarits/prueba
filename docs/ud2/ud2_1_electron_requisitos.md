# UD2 - 2.1. Introducción a Electron. Requisitos

- [Conocimientos previos](#conocimientos-previos)
- [Herramientas necesarias](#herramientas-necesarias)
    - [Editor de código](#editor-de-código)
    - [Línea de comandos](#línea-de-comandos)
    - [Git y GitHub](#git-y-github)
- [Node.js y npm](#nodejs-y-npm)


_**Electron**_ es un _framework_ para crear aplicaciones de escritorio usando ***JavaScript***, ***HTML*** y ***CSS***. Incorpora [_Chromium_](https://www.chromium.org/chromium-projects/) y [_Node.js_](https://nodejs.org/es) en un único archivo binario. Permite crear aplicaciones multiplataforma que funcionan en *Windows*, *macOS* y *Linux* con una única base común de código *JavaScript*.

## Conocimientos previos

*Electron* es una capa de envoltorio nativa para aplicaciones web y se ejecuta en un entorno Node.js. Por lo tanto, se asume que generalmente estás familiarizado con *Node* y los conceptos básicos de desarrollo web del *front-end* vistos en el módulo de primer curso de DAM "_Lenguajes de marcas y sistemas de gestión de información_" (LMSGI). Como apoyo se recomendan los siguientes recursos:

* [Aprende desarrollo web (MDN Web Docs)](https://developer.mozilla.org/es/docs/Learn)
* [Introducción a Node.js](https://nodejs.dev/en/learn/)

## Herramientas necesarias

### Editor de código

Necesitarás un editor de texto para escribir el código. Se recomienda usar [_Visual Studio Code_](https://code.visualstudio.com/), al ser uno de los más utilizados en el mundo del desarrollo y la integración de distintas herramientas que permiten agilizar el trabajo, como el control de versiones git, el terminal integrado de línea de comandos o el depurador, entre muchas otras.

### Línea de comandos

A lo largo del curso se requerirá el uso de varias interfaces de línea de comandos (CLIs). Se pueden teclear estos comandos en la terminal predeterminada del sistema:

* _**Windows**_: _Command Prompt_, _PowerShell_, _Terminal_
* _**macOS**_: _Terminal_
* _**Linux**_: varía dependiendo de la distribución (_ej: Terminal GNOME, Konsole_)

La mayoría de los editores de código también vienen con una terminal integrada, que también se puede utilizar.

### Git y GitHub

Git es un sistema de control de versiones usado comúnmente para código fuente, y GitHub es una plataforma de desarrollo colaborativa construida además de ella. Aunque ninguno de los dos es estrictamente necesario para construir una aplicación Electron usaremos GitHub para realizar las entregas. Por lo tanto será necesario:

* [Crear una cuenta de GitHub](https://github.com/) utilizando la cuenta de correo corporativa de la GVA (**_usuario_@alu.edu.gva**). Utiliza el mismo nombre de usuario para la cuenta *GitHub*.

    !!! note ""
        _**Ejemplo**: Para la cuenta corporativa es `jacsanvil@alu.edu.gva` el usuario de GitHub debe ser `jacsanvil`_

* [Instalar Git](https://github.com/git-guides/install-git)

    Si no estás familiarizado en como funciona *git*, se recomienda leer la [Guía de Git](https://github.com/git-guides/). También se puede usar la aplicación [GitHub Desktop](https://desktop.github.com/) si se prefiere usar una interfaz visual en lugar de la línea de comandos.

## Node.js y npm

Para comenzar a desarrollar una aplicación *Electron* es necesario instalar [Node.js](https://nodejs.org/en/download) y el gestor de paquetes ***npm***. Es recomendable utilizar la última versión con soporte a largo plazo (**_LTS_**).

Para comprobar que *Node.js* se ha instalado correctamente, se puede usar la opción `-v` cuando en los comandos `node` y `npm`. Estos deben imprimir las versiones instaladas.

```bash hl_lines="1 3"
$ node -v
v16.20.2
$ npm -v
8.19.4
```

!!! note "NOTA"
    Aunque es necesario tener *Node.js* instalado localmente para desarrollar un proyecto en *Electron*, el ejecutable final, viene empaquetado con su propio *Node.js*. Esto significa que **los usuarios finales no necesitan instalar *Node.js*** como requisito para ejecutar la aplicación.
