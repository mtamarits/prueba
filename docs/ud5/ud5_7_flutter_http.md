# UD5 - 5.7 Flutter: Comunicación con el servidor

## Métodos HTTP

Las aplicaciones suelen utilizar servicios para obtener y gestionar datos, actuando como clientes HTTP en los que se realizan llamadas a los distintos _endpoints_ (rutas del servicio).

Existen múltiples tipos de petición que pueden enviarse al servidor. Los **métodos más comunes** son:

- `GET`: Obtener registros del servidor. Equivaldría a las `SELECT` de SQL.
- `POST`: Crear un nuevo registro. Equivaldría a las `INSERT` de SQL.
- `PUT`: Actualizar un registro. Sustituye todos los datos del recurso. Equivaldría a las `UPDATE` de SQL.
- `PATCH`: Actualizar parcialmente un registro. Sólo actualiza los datos que se envían en la petición. Equivaldría a las `UPDATE` de SQL, pero sólo con los campos que se envían.
- `DELETE`: Elimina un registro. Equivaldría a las `DELETE` de SQL.

## Servicio API REST

Un servicio API REST es un servicio web que utiliza el protocolo HTTP para realizar peticiones y obtener respuestas. Los datos se envían en formato JSON.

Para crear un servicio API REST de prueba, se puede utilizar la librería `json-server`. Esta librería permite crear un servicio API REST a partir de un archivo JSON.

Se puede crear un pequeño proyecto de _Node.js_ para instalar la librería `json-server` y crear un archivo `db.json` con los datos que se quieren servir. Para ello, dentro de una nueva carpeta llamada, por ejemplo, `server/`, ejecutaremos los siguientes comandos:

```bash
npm init -y
npm install json-server@0
```

!!! note
    Se utiliza la versión `0` de la librería, dado que actualmente la versión `1` está en fase alpha y no es estable.

Una vez instalada la librería, se puede crear un archivo `db.json` con los datos que se quieren servir. Por ejemplo:
    
```json title="server/db.json"
{
  "products": [
    {
      "id": "1",
      "description": "WD BLACK SN770 2TB NVMe SSD",
      "price": 120,
      "available": "2023-10-03T00:00:00.000",
      "imageUrl": "http://placehold.it/200x100",
      "rating": 4
    },
    {
      "id": "3",
      "description": "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
      "price": 54.95,
      "available": "2023-01-03T00:00:00.000",
      "imageUrl": "http://placehold.it/200x100",
      "rating": 3
    }
  ],
    "users": [
      {
        "id": "1",
        "name": "User 1",
        "email": "user1@test.com",
      },
      {
        "id": "2",
        "name": "User 2",
        "email": "user2@test.com",
      }
    ]
}
```

Para iniciar el servicio, se ejecuta el siguiente comando:

```bash
npx json-server --watch db.json
```

De esta forma se crea un servicio API REST que sirve los datos del archivo `db.json` en la URL `http://localhost:3000`. En este caso, se sirven los datos de los _endpoints_ `/products` y `/users`.

- `http://localhost:3000/products`
- `http://localhost:3000/users`

Para obtener un registro en concreto, se puede utilizar la URL `http://localhost:3000/products/1` para obtener el producto con `id=1`.

Para el ejemplo expone las siguientes rutas:

```
GET    /products
GET    /products/:id
POST   /products
PUT    /products/:id
PATCH  /products/:id
DELETE /products/:id

# igual para /users
```

En la documentación se indica el su uso [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

Ejemplos de uso:

```text
# Obtener todos los productos ordenados por rating de forma ascendente
http://localhost:3000/products?_sort=rating

# Obtener todos los productos ordenados por precio de forma descendente
http://localhost:3000/products?_sort=-price

# Obtener todos los productos con rating igual a 3
http://localhost:3000/products?rating=3

# Obtener todos los productos con precio mayor que 100
http://localhost:3000/products?price_gt=100

# Obtener todos los productos con precio mayor que 100 y rating igual a 3 ordenados por precio de forma descendente
http://localhost:3000/products?price_gt=100&rating=3&_sort=-price
```

Alternativamente, para iniciar el servicio, se puede editar el archivo `package.json` y añadir el siguiente _script_:

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
    Debemos recordar ejecutar siempre el servicio desde la carpeta `server/`.


!!!note "Otras opciones de configuración"
    Se puede cambiar el puerto por defecto (`3000`) con el parámetro `--port`, o también, simular un retardo en las respuestas con `--delay`. (_la opción `--delay` ya no está disponible en la versión `1-alpha`_)

    ```bash
    npx json-server --watch db.json --port 3001 --delay 500
    ```


## Petición HTTP en _Flutter_

Para realizar una petición HTTP, se utiliza la clase `HttpClient` de la librería `dart:io`. En el siguiente ejemplo, se muestra una implementación para una petición `GET` a la URL `http://localhost:3000/products`:

```dart
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

class ProductsService {

  static const int timeout = 3;
  List<Product> products = [];

  static final HttpClient client = HttpClient();

  static const String HOST = 'localhost';
  static const int PORT = 3000;
  static const String PATH = '/products';

  Future<List<Product>> getProducts() async {
    try {
      // Petición GET
      HttpClientRequest request = await client
          .get(HOST, PORT, PATH)
          .timeout(const Duration(seconds: timeout));

      // Respuesta
      HttpClientResponse response = await request.close();

      // Comprobar el estado de la respuesta
      if (response.statusCode >= 200 && response.statusCode < 300) {

        // Leer el contenido de la respuesta
        String jsonString = await response.transform(utf8.decoder).join();

        // Decodificar el JSON
        List jsonList = jsonDecode(jsonString);
        List<Product> products = [];
        for (var item in jsonList) {
          Product product = Product.fromJson(item);
          products.add(product);
        }

        return products;

      } else {
        debugPrint('Error: ${response.statusCode}');
        return [];
      }
    } catch (e) {
      debugPrint('Error: $e');
    }
  }
}
```

Para consumir el servicio, se utiliza el método `get` de la clase `HttpClient`. Este método devuelve un objeto de tipo `HttpClientRequest` que se utiliza para configurar la petición. En este caso, se utiliza el método `timeout` para establecer un tiempo máximo de espera de 3 segundos.

Una vez configurada la petición, se utiliza el método `close` para enviarla al servidor. Este método devuelve un objeto de tipo `HttpClientResponse` que contiene la respuesta del servidor.

Para leer el contenido de la respuesta, se utiliza el método `transform` para decodificar el contenido de la respuesta. En este caso, se utiliza el método `join` para unir todos los datos de la respuesta en un único `String`.

Finalmente, se utiliza el método `jsonDecode` para decodificar el contenido de la respuesta y convertirlo en un objeto de tipo `List`. En este caso, se recorre la lista y se convierte cada elemento en un objeto de tipo `Product`. Tal como vimos en el apartado anterior.

Para utilizar el servicio, se puede crear un objeto de tipo `ProductsService` y llamar al método `getProducts`, que devuelve un `Future` de tipo `List<Product>`. Para obtener el resultado de la petición, se utiliza el método `then`:

```dart
  // Crear el servicio
  ProductsService service = ProductsService();

  // Lista de productos vacía
  List<Product> products = [];

  updateProducts() {
    // Llamar al servicio
    service.getProducts().then((response) {
      // Actualizar la lista de productos
      products = response;
    });
  }
```

### Método DELETE

Para realizar una petición `DELETE`, se utiliza el método `delete` de la clase `HttpClient`. En el siguiente ejemplo, se muestra una implementación para una petición `DELETE`:

```dart
  Future<Product?> deleteProduct(String id) async {
    try {
      // Petición DELETE
      HttpClientRequest request = await client
          .delete(HOST, PORT, '$PATH/$id')
          .timeout(const Duration(seconds: timeout));

      // Respuesta
      HttpClientResponse response = await request.close();

      // Comprobar el estado de la respuesta
      if (response.statusCode >= 200 && response.statusCode < 300) {
       ... 
      }
      ...
  }
```

### Método POST

Se utiliza el método POST para crear un nuevo registro. La principal diferencia con GET y DELETE, es que se deben pasar los datos del nuevo registro en el cuerpo de la petición en formato JSON, e indicar el formato en las cabeceras de la petición. **MUY IMPORTANTE: NO ENVIAR EL `ID` DEL REGISTRO**, ya que el servidor lo asignará automáticamente, nos devolverá el registro con el `id` asignado.

Para realizar una petición `POST`, se utiliza el método `post` de la clase `HttpClient`. En el siguiente ejemplo, se muestra una implementación para una petición `POST`:

```dart
  Future<Product?> createProduct(Product product) async {
    try {
      // Petición POST
      HttpClientRequest request = await client
          .post(HOST, PORT, PATH)
          .timeout(const Duration(seconds: timeout));

      // Cabeceras
      request.headers.contentType = ContentType.json;

      // Cuerpo de la petición
      request.write(jsonEncode(product));

      // Respuesta
      HttpClientResponse response = await request.close();

      // Comprobar el estado de la respuesta
      if (response.statusCode >= 200 && response.statusCode < 300) {
       ... 
      }
      ...
  }
```

### Método PUT

Para realizar una petición `PUT`, se utiliza el método `put` de la clase `HttpClient`. En el siguiente ejemplo, se muestra una implementación para una petición `PUT`:

```dart
  Future<Product?> updateProduct(Product product) async {
    try {
      // Petición PUT
      HttpClientRequest request = await client
          .put(HOST, PORT, '$PATH/${product.id}')
          .timeout(const Duration(seconds: timeout));

      // Cabeceras
      request.headers.contentType = ContentType.json;

      // Cuerpo de la petición
      request.write(jsonEncode(product));

      // Respuesta
      HttpClientResponse response = await request.close();

      // Comprobar el estado de la respuesta
      if (response.statusCode >= 200 && response.statusCode < 300) {
       ... 
      }
      ...
  }
```

## Método PUT

Cuando se utiliza el método `PUT`, se actualiza el registro completo. Es decir, se sustituyen todos los datos del registro por los que se envían en la petición.

```dart
  Future<Product?> updateProduct(Product product) async {
    try {
      HttpClientRequest request = await client
          .put(host, port, '$path/${product.id}')
          .timeout(const Duration(seconds: timeout));

      request.headers.contentType = ContentType.json;

      request.write(jsonEncode(product));

      HttpClientResponse response = await request.close();

      if (response.statusCode >= 200 && response.statusCode < 300) {
        ...
      }
      ...
```

## Aplicación de ejemplo

Se puede descargar el código de la aplicación de ejemplo en el siguiente repositorio de _GitHub_:

- [https://github.com/jsanvil/angular-products](https://github.com/jsanvil/angular-products)

