async function obtenerProductos() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const productos = await response.json();
      return productos;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return [];
    }
  }
  
  function filtrarPorCategoria(productos, categoria) {
    return productos.filter(producto => producto.category === categoria);
  }
  
  function ordenarPorPrecio(productos, orden = 'ascendente') {
    return [...productos].sort((a, b) => {
      const precioA = a.price;
      const precioB = b.price;
      return orden === 'ascendente' ? precioA - precioB : precioB - precioA;
    });
  }
  
  function calcularPrecioPromedioPorCategoria(productos) {
    const preciosPorCategoria = {};
    const conteoPorCategoria = {};
  
    productos.forEach(producto => {
      const categoria = producto.category;
      if (preciosPorCategoria[categoria]) {
        preciosPorCategoria[categoria] += producto.price;
        conteoPorCategoria[categoria]++;
      } else {
        preciosPorCategoria[categoria] = producto.price;
        conteoPorCategoria[categoria] = 1;
      }
    });
  
    const promedioPorCategoria = {};
    for (const categoria in preciosPorCategoria) {
      promedioPorCategoria[categoria] = preciosPorCategoria[categoria] / conteoPorCategoria[categoria];
    }
    return promedioPorCategoria;
  }
  
  function buscarPorNombre(productos, nombre) {
    const nombreLower = nombre.toLowerCase();
    return productos.filter(producto =>
      producto.title.toLowerCase().includes(nombreLower)
    );
  }
  
  function agruparPorCategoria(productos) {
    return productos.reduce((acumulador, producto) => {
      const categoria = producto.category;
      if (!acumulador[categoria]) {
        acumulador[categoria] = [];
      }
      acumulador[categoria].push(producto);
      return acumulador;
    }, {});
  }
  
  function encontrarMinMaxPorCategoria(productosAgrupados) {
    const resultado = {};
    for (const categoria in productosAgrupados) {
      const productosDeCategoria = productosAgrupados[categoria];
      if (productosDeCategoria.length > 0) {
        const masCaro = [...productosDeCategoria].sort((a, b) => b.price - a.price)[0];
        const masBarato = [...productosDeCategoria].sort((a, b) => a.price - b.price)[0];
        resultado[categoria] = { masCaro, masBarato };
      }
    }
    return resultado;
  }
  
  async function main() {
    const productos = await obtenerProductos();
  
    if (productos.length > 0) {
      console.log('Productos obtenidos:', productos.length);
  
    
      const electronicos = filtrarPorCategoria(productos, "electronics");
      console.log('\nProductos de la categoría "electronics":', electronicos.slice(0, 3));
  
    
      const ordenadosAscendente = ordenarPorPrecio(productos, 'ascendente');
      console.log('\nProductos ordenados por precio (ascendente):', ordenadosAscendente.slice(0, 3)); 
  
      const ordenadosDescendente = ordenarPorPrecio(productos, 'descendente');
      console.log('\nProductos ordenados por precio (descendente):', ordenadosDescendente.slice(0, 3)); 
     
      const promedioPrecios = calcularPrecioPromedioPorCategoria(productos);
      console.log('\nPrecio promedio por categoría:', promedioPrecios);
  
   
      const encontrados = buscarPorNombre(productos, "jacket");
      console.log('\nProductos que contienen "jacket" en el nombre:', encontrados.slice(0, 3)); 
  
    
      const agrupados = agruparPorCategoria(productos);
      console.log('\nProductos agrupados por categoría:', Object.keys(agrupados));
   
     
      const minMaxPorCategoria = encontrarMinMaxPorCategoria(agrupados);
      console.log('\nProducto más caro y más barato por categoría:', minMaxPorCategoria);
  
    } else {
      console.log('No se pudieron obtener los productos.');
    }
  }
  
  main();