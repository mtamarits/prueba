# Entorno de trabajo

## Visual Studio Code

Descargar el paquete de instalación que corresponda al sistema operativo de la página de [Visual Studio Code](https://code.visualstudio.com/Download) y realizar la instalación típica.

### Instalación en los ordenadores del aula

Los equipos del aulas de tutoría colectiva semipresencial, no tienen *VSCode* instalado. Para usarlo deberemos usar una versión portable.

En la [página oficial de descargas](https://code.visualstudio.com/#alt-downloads) disponemos de empaquetados `.zip` para _Windows_ y `.tar.gz` para _Linux_.

Sólo hay que descargar el archivo, descomprimir y ejecutar el archivo `code`.

## npm

Es el gestor de paquetes de **Node.js**. Si no lo tenemos instalaremos *Node.js* tal y como se indica en la página de [nodejs.org](https://nodejs.org/es/download/package-manager/).

### Instalación en el perfil local de usuario del aula

Las aulas de informática no tienen ***npm*** instalado de manera global, necesitaremos instalarlo en el perfil local del usuario, para ello utilizaremos ***nvm*** que es un gestor de versiones de *node* que nos permitirá utilizar la versión que escojamos [nvm-sh](https://github.com/nvm-sh/nvm#installation-and-update)

Para instalar ***nvm*** necesitamos ejecutar el siguiente comando, aunque es recomendable consultar la documentación de *nvm* para comprobar que no haya cambiado:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Cuando termine la instalación de *nvm*, tendremos que **abrir un nuevo terminal** para que reconozca la ruta del ejecutable y proceder a instalar la **versión 16 de *Node.js*** de la siguiente forma:

```bash
$ nvm install 16
```

## Ordenadores del aula de tutoría colectiva

Los ordenadores portátiles del aula de tutoría colectiva no permiten la instalación de software. Se utilizan principalmente para consulta y tienen un usuario común.

!!! warning "RECUERDA"
    Borra tus datos de navegación, incluyendo sesiones abiertas, para que la persona que utilice el equipo el próximo día no pueda acceder a tus recursos.

    Alternativamente, se puede trabajar con la opción incógnito de los navegadores, que no guarda datos de navegación.

## Electron reloader

Para que los cambios en el código se reflejen en la aplicación, se puede utilizar el paquete [electron-reloader](https://www.npmjs.com/package/electron-reloader) que se instala como dependencia de desarrollo.

```bash title="Terminal"
$ npm install --save-dev electron-reloader
```

Después, en el archivo `main.js` se añade el siguiente código:

```js title="main.js" linenums="1"
const { app, BrowserWindow } = require('electron')

try {
    require('electron-reloader')(module, {
        debug: true,
        watchRenderer: true
    })
} catch(_) {}

// ...
```

Ahora, cuando lancemos la aplicación con `npm start` se recargará automáticamente cuando se guarden los cambios en el código.
