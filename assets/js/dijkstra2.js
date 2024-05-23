// Función para encontrar el camino más corto usando el algoritmo de Dijkstra
function dijkstra(inicio, fin) {
  const nodos = nodosDataSet.get();
  const distancias = {};
  const previos = {};
  const visitados = new Set();

  // Inicializar las distancias y los nodos previos
  nodos.forEach(nodo => {
    distancias[nodo.id] = Infinity;
    previos[nodo.id] = null;
  });
  distancias[inicio] = 0;

  while (visitados.size < nodos.length) {
    // Encontrar el nodo no visitado con la distancia más corta
    let nodoMinimo = null;
    nodos.forEach(nodo => {
      if (!visitados.has(nodo.id)) {
        if (nodoMinimo === null || distancias[nodo.id] < distancias[nodoMinimo]) {
          nodoMinimo = nodo.id;
        }
      }
    });

    if (distancias[nodoMinimo] === Infinity) {
      break; // No hay más nodos accesibles
    }

    visitados.add(nodoMinimo);

    // Actualizar las distancias de los nodos vecinos
    const vecinos = aristasDataSet.get({
      filter: edge => edge.from === nodoMinimo
    });
    vecinos.forEach(arista => {
      const distancia = distancias[nodoMinimo] + parseInt(arista.label || 1);
      if (distancia < distancias[arista.to]) {
        distancias[arista.to] = distancia;
        previos[arista.to] = nodoMinimo;
      }
    });
  }

  // Construir el camino más corto
  const camino = [];
  let nodoActual = fin;
  while (nodoActual !== null) {
    camino.unshift(nodoActual);
    nodoActual = previos[nodoActual];
  }

  // Mostrar el camino más corto
  if (distancias[fin] === Infinity) {
    alert('No se encontró un camino desde el nodo de inicio al nodo destino.');
  } else {
    alert(`El camino más corto desde ${inicio} a ${fin} es: ${camino.join(' -> ')} con una distancia de ${distancias[fin]}`);
  }

  return { camino, distancia: distancias[fin] };
}

// Función para seleccionar los nodos de inicio y fin para Dijkstra
function seleccionarNodosDijkstra() {
  const inicio = parseInt(prompt('Ingrese el ID del nodo de inicio:', '1'));
  const fin = parseInt(prompt('Ingrese el ID del nodo de fin:', '2'));

  if (!isNaN(inicio) && !isNaN(fin)) {
    dijkstra(inicio, fin);
  } else {
    alert('IDs de nodos no válidos.');
  }
}
