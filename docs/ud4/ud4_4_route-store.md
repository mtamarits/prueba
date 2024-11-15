# UD4 - 4.4 Navegación y persistencia de datos

## Introducción

En apartado vamos a ver dos librerías que nos van a ayudar a crear aplicaciones de una sola página con [react-router-dom](https://reactrouter.com/en/main) y almacenar los datos en disco mediante [electron-store](https://github.com/sindresorhus/electron-store).

## Navegación con `react-router-dom`

[react-router-dom](https://reactrouter.com/en/main) es una librería para crear aplicaciones de una sola página (_SPA_) con _React_. Permite definir rutas para mostrar diferentes componentes y navegar entre ellos.

Esto evita depender del proceso principal de _Electron_ para navegar entre páginas.

### Instalación

Para instalar la librería, ejecutamos el siguiente comando:

```bash
npm install react-router-dom
```

### Uso de **HashRouter**

El componente `**HashRouter**` debe envolver a todos los componentes que utilicen rutas.

!!! note "HashRouter vs BrowserRouter"
    En un proyecto web, normalmente, se utiliza `BrowserRouter`, pero _Electron_, al pasar la aplicación a producción, por seguridad tiene desactivado el historial de navegación, por lo que no funciona correctamente.

```js title="src/renderer/src/App.jsx" linenums="1"
import { HashRouter, Route, Routes } from 'react-router-dom'

import AppList from './AppList'
import AppEditItem from './AppEditItem'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppList />} />
        <Route path="/:itemId" element={<AppEditItem />} />
      </Routes>
    </HashRouter>
  )
}
```

En el ejemplo, el componente `HashRouter` envuelve a los componentes `AppList` y `AppEditItem`.

El componente `Routes` que contiene las rutas de la aplicación.

Cada ruta se define con el componente `Route`, que tiene dos propiedades: `path` y `element`.

La propiedad `path` define la ruta, y la propiedad `element` define el componente que se mostrará cuando se acceda a la ruta.

Desde un componente se puede navegar a una ruta con el componente `Link` o `useNavigate`:

```js title="src/renderer/src/components/Item.jsx" linenums="1"
import { Link, useNavigate } from 'react-router-dom'

export default function Item({item}) {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(`./${item.id}`)}>Editar</button>
            <Link to={`./${item.id}`}>Editar</Link>
        </div>
    )
}
```

Desde el componente que recibe la ruta, se puede obtener el parámetro con el componente `useParams`:

```js title="src/renderer/src/components/Item.jsx" linenums="1"
import { useParams } from 'react-router-dom'

export default function Item() {
    const { itemId } = useParams()
    return (
        <div>
            <h1>Item {itemId}</h1>
        </div>
    )
}
```

## Persistencia de datos con `electron-store`

Para persistir los datos de una aplicación de escritorio en _Electron_ podemos utilizar varios métodos:

- **HTML5 localStorage**

    La forma más sencilla de almacenar datos es dentro del mismo navegador, utilizando el objeto `localStorage` de _HTML5_, aunque para bases de datos más complejas no es recomendable. Las llamadas se hacen de manera síncrona y en la mayoría de casos, tiene una limitación de 5MB a 10MB.

- **HTML5 IndexedDB**

    Es una base de datos de objetos que permite almacenar datos de manera estructurada. Las llamadas se hacen de manera asíncrona.

- **Node FileSystem API**

    Es una API de node que permite acceder al sistema de archivos del usuario.

- **Base de datos embebida**
    
    Podemos utilizar bases de datos como _SQLite_ o _MongoDB_.

- **Almacenamiento en la nube**

    Por último, podríamos utilizar bases de datos en la nube como _Firebase_ o _MongoDB Atlas_, o crear nuestro propio servidor.

En el ejemplo se utiliza la librería [**`electron-store`**](https://github.com/sindresorhus/electron-store) para almacenar datos en disco de forma sencilla, utilizando la api _FileSystem_ de _node_.

### Instalación

Para instalar la librería, ejecutamos el siguiente comando:

```bash
npm install electron-store
```

### Uso

_**electron-store**_ utiliza el directorio de usuario para almacenar los datos.

- `%APPDATA%` en **Windows**
- `$XDG_CONFIG_HOME` o `~/.config` en **Linux**
- `~/Library/Application Support` en **macOS**

Para utilizar la librería es recomendable crear una clase que gestione las peticiones:

```js title="src/main/StoreManager.class.js" linenums="1"
import Store from 'electron-store'

export class StoreManager extends Store {
  constructor(options) {
    super(options)
    this.list = this.get('item-list') || []
  }

  saveList() {
    this.set('item-list', this.list)
    return this.list
  }

  getList() {
    this.list = this.get('item-list') || []
    return this.list
  }

  getItem(itemId) {
    return this.list.find((i) => i.id == itemId)
  }

  addItem(item) {
    this.list = [...this.list, item]
    return this.saveList()
  }

  deleteItem(item) {
    this.list = this.list.filter((i) => i.id !== item.id)
    return this.saveList()
  }

  updateItem(item) {
    this.list = this.list.map((i) => (i.id === item.id ? item : i))
    return this.saveList()
  }
}
```

En el ejemplo, la clase `StoreManager` extiende de la clase `Store` de _electron-store_.

En el constructor se inicializa la lista de elementos con el método `get` de la clase `Store`.

Los métodos `saveList` y `getList` se encargan de guardar y obtener la lista de elementos.

Los métodos `addItem`, `deleteItem` y `updateItem` se encargan de añadir, eliminar y actualizar un elemento de la lista.

Para utilizar la clase, se crea una instancia en el proceso principal:

```js title="src/main/index.js"
import { StoreManager } from './StoreManager.js'

const store = new StoreManager({ name: 'main' })
```

Mediante la instancia `store` se pueden utilizar los métodos de la clase `StoreManager`.
