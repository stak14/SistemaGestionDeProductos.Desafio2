# Sistema de Gestión de Productos

Este script de JavaScript interactúa con la API de [Fake Store API](https://fakestoreapi.com/) para obtener, procesar y mostrar información sobre productos. Permite realizar diversas operaciones como filtrar por categoría, ordenar por precio, calcular precios promedio, buscar por nombre, agrupar por categoría y encontrar los productos más caros y baratos dentro de cada una.

## Funcionalidades Principales

El script `productos.js` contiene las siguientes funciones:

* **`obtenerProductos()`**: Realiza una solicitud asíncrona a `https://fakestoreapi.com/products` para obtener un listado de productos. Maneja posibles errores durante la obtención de datos.
* **`filtrarPorCategoria(productos, categoria)`**: Recibe un array de productos y una categoría, y devuelve un nuevo array con los productos que pertenecen a esa categoría específica.
* **`ordenarPorPrecio(productos, orden = 'ascendente')`**: Ordena los productos según su precio. El parámetro `orden` puede ser `'ascendente'` o `'descendente'`. Devuelve un nuevo array con los productos ordenados.
* **`calcularPrecioPromedioPorCategoria(productos)`**: Calcula el precio promedio de los productos para cada categoría. Devuelve un objeto donde las claves son las categorías y los valores son sus respectivos precios promedio.
* **`buscarPorNombre(productos, nombre)`**: Filtra los productos cuyo título (nombre) contenga la cadena de texto especificada en el parámetro `nombre` (sin distinguir mayúsculas de minúsculas).
* **`agruparPorCategoria(productos)`**: Agrupa los productos por su categoría. Devuelve un objeto donde cada clave es una categoría y su valor es un array de productos pertenecientes a ella.
* **`encontrarMinMaxPorCategoria(productosAgrupados)`**: A partir de un objeto de productos agrupados por categoría (como el que devuelve `agruparPorCategoria`), encuentra el producto más caro y el más barato dentro de cada categoría. Devuelve un objeto donde cada clave es una categoría y su valor es un objeto con las propiedades `masCaro` y `masBarato`.
* **`main()`**: Función asíncrona principal que orquesta la ejecución de las demás funciones. Obtiene los productos, realiza diversas operaciones de procesamiento y muestra los resultados en la consola.

## Cómo Ejecutar el Script

1.  Asegúrate de tener un entorno de ejecución de JavaScript (como Node.js o un navegador web con herramientas de desarrollo).
2.  Guarda el código como un archivo con extensión `.js` (por ejemplo, `productos.js`).
3.  Si usas Node.js, ejecuta el script desde tu terminal con el comando:
    ```bash
    node productos.js
    ```
4.  Si usas un navegador:
    * Puedes enlazar el archivo `.js` en un archivo HTML.
    * Abre el archivo HTML en tu navegador.
    * Abre la consola de desarrollador (usualmente presionando F12) para ver los `console.log` generados por la función `main()`.

## Ejemplo de Salida en Consola

Al ejecutar la función `main()`, se mostrarán en la consola:

* El número total de productos obtenidos.
* Una muestra de los primeros 3 productos de la categoría "electronics".
* Una muestra de los primeros 3 productos ordenados por precio de forma ascendente y descendente.
* El precio promedio por cada categoría.
* Una muestra de los primeros 3 productos que contienen "jacket" en su nombre.
* Las claves (nombres de categorías) de los productos agrupados por categoría.
* El producto más caro y más barato para cada categoría.
