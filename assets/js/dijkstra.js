let grafo;
let nodosDataSet;
let aristasDataSet;
let seleccionado;
let modoEliminarArista = false;
// Variable para controlar el modo de la aplicación
let modoAgregarNodo = false;


// Función para inicializar el grafo
function inicializarGrafo() {
  const lienzo = document.getElementById('lienzo');
  nodosDataSet = new vis.DataSet();
  aristasDataSet = new vis.DataSet();
  const data = { nodes: nodosDataSet, edges: aristasDataSet };
  const opciones = {};
  grafo = new vis.Network(lienzo, data, opciones);

  // Eventos del grafo
  grafo.on('click', clicEnNodo);
  grafo.on('doubleClick', dobleClicEnArista);
  grafo.on('click', eliminarAristaSeleccionada);
}

var options = {
  physics: {
    enabled: false
  }
};


// Función para manejar el clic en un nodo
function clicEnNodo(propiedades) {
  const { nodes } = propiedades;
  if (nodes.length > 0) {
    if (seleccionado === undefined) {
      seleccionado = nodes[0];
    } else {
      if (seleccionado !== nodes[0]) {
        // Se agrega una nueva arista
        aristasDataSet.add({ from: seleccionado, to: nodes[0], arrows: 'to' });
        seleccionado = undefined;
      } else {
        // Conexión manual del nodo consigo mismo
        aristasDataSet.add({ from: seleccionado, to: seleccionado, arrows: 'to' });
        seleccionado = undefined;
      }
    }
  }
}

// Función para manejar el doble clic en una arista
function dobleClicEnArista(propiedades) {
  const { edges } = propiedades;
  if (edges.length > 0) {
    // Se pide al usuario que ingrese un valor para la arista
    const valor = prompt('Ingrese el valor para la conexión:', '');
    if (valor !== null) {
      // Se actualiza la arista con el valor ingresado
      aristasDataSet.update({ id: edges[0], label: valor });
    }
  }
}

// Función para manejar el clic en una arista y eliminarla si estamos en modo de eliminación
function eliminarAristaSeleccionada(propiedades) {
  if (modoEliminarArista) {
    const aristaId = propiedades.edges[0];
    if (aristaId !== undefined) {
      eliminarArista(aristaId);
      modoEliminarArista = false; // Desactivar el modo de eliminación después de eliminar la arista
    }
  }
}

// Función para activar el modo de eliminación de arista
function activarModoEliminarArista() {
  modoEliminarArista = true;
  alert('Haz clic en la arista que deseas eliminar.');
}

// Función para eliminar una arista dado su ID
function eliminarArista(aristaId) {
  aristasDataSet.remove({ id: aristaId });
}

// Agregar un evento de teclado al documento para detectar la eliminación de aristas
document.addEventListener('keydown', function(event) {
  // Verificar si la tecla presionada es la tecla "Delete" o "Backspace"
  if (event.key === 'Delete' || event.key === 'Backspace') {
    // Verificar si hay una arista seleccionada
    const seleccion = grafo.getSelection();
    if (seleccion.edges.length > 0) {
      // Eliminar la arista seleccionada
      eliminarArista(seleccion.edges[0]);
    }
  }
});

// Función para agregar un nodo al grafo en la posición donde se hizo clic
function agregarNodo() {
  // Activamos el modo de agregar nodo
  modoAgregarNodo = true;

  // Desactivamos los eventos de clic en el grafo mientras agregamos nodos
  grafo.off('click');

  // Agregamos un evento de clic al lienzo para capturar las coordenadas del clic
  grafo.on('click', function(event) {
    // Verificamos si estamos en el modo de agregar nodo
    if (modoAgregarNodo) {
      const position = event.pointer.canvas; // Obtiene las coordenadas del clic
      const nuevoId = nodosDataSet.length + 1; // Genera un nuevo ID único para el nodo
      nodosDataSet.add({ id: nuevoId, label: 'Nodo ' + nuevoId, x: position.x, y: position.y }); // Agrega el nodo en la posición del clic
      // Removemos el evento después de agregar el nodo para evitar agregar nodos adicionales con clics posteriores
      grafo.off('click');
      // Reactivamos los eventos de clic en el grafo
      grafo.on('click', clicEnNodo);
      modoAgregarNodo = false; // Desactivamos el modo de agregar nodo
    }
  });
}


// Función para cambiar el nombre de un nodo seleccionado
function cambiarNombre() {
  if (seleccionado !== undefined) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre para el nodo:', seleccionado.label);
    if (nuevoNombre !== null) {
      nodosDataSet.update({ id: seleccionado, label: nuevoNombre });
    }
    seleccionado = undefined; // Esta línea establece que no hay ningún nodo seleccionado después de cambiar el nombre
  } else {
    alert('Por favor, seleccione un nodo primero.');
  }
}

// Función para eliminar el nodo seleccionado
function eliminarNodo() {
  if (seleccionado !== undefined) {
    nodosDataSet.remove({ id: seleccionado });
    // Eliminar aristas relacionadas al nodo seleccionado
    const aristas = aristasDataSet.get({ filter: function (item) { return item.from === seleccionado || item.to === seleccionado; } });
    aristas.forEach(function (arista) {
      aristasDataSet.remove({ id: arista.id });
    });
  } else {
    alert('Por favor, seleccione un nodo primero.');
  }
}





// Call this function when you want to find the shortest path



// Function to generate the adjacency matrix
function generarMatriz() {
    const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
    const matriz = [];
    nodos.forEach((nodo, rowIndex) => {
        const fila = [];
        nodos.forEach((otroNodo, columnIndex) => {
            const conexion = aristasDataSet.get({
                filter: edge => (edge.from === nodo.id && edge.to === otroNodo.id)
            });
            if (conexion.length > 0) {
                const valor = parseInt(conexion[0].label || 1);
                fila.push(valor);
            } else {
                fila.push(0);
            }
        });
        matriz.push(fila);
    });
    return matriz;
}





// Función para mostrar la matriz de adyacencia y las sumatorias por filas y por columnas en el DOM 
function mostrarMatriz(nodos, matriz, sumasFilas, sumasColumnas) {
  const contenedorMatriz = document.getElementById('matriz');
  let html = '<h2>Matriz de Adyacencia</h2>';
  html += '<table style="padding: 10px;border: 2px solid black;">';
  // Encabezados de columna
  html += '<tr><th style="padding: 10px;border: 2px solid black;background-color: green;"></th>';
  nodos.forEach((nodo, index) => {
    html += `<th style="padding: 10px;border: 2px solid black;background-color: green;">${nodo.label}</th>`;
  });
  html += '<th style="padding: 10px;border: 2px solid black;background-color: green;">Suma por Fila</th>'; // Encabezado para la sumatoria por filas
  html += '</tr>';
  // Contenido de la matriz
  matriz.forEach((fila, index) => {
    html += `<tr><th style="padding: 10px;border: 2px solid black;background-color: red;">${nodos[index].label}</th>`;
    fila.forEach(valor => {
      html += `<td style="padding: 10px;border: 2px solid black;">${valor}</td>`;
    });
    html += `<td style="padding: 10px;border: 2px solid black;">${sumasFilas[index]}</td>`; // Mostrar la sumatoria por fila
    html += '</tr>';
  });
  // Agregar la fila de sumatorias por columnas al final de la tabla
  html += '<tr><th style="padding: 10px;border: 2px solid black;background-color: red;">Suma por Columna</th>';
  sumasColumnas.forEach(suma => {
    html += `<td style="padding: 10px;border: 2px solid black;">${suma}</td>`;
  });
  html += '<td></td></tr>'; // Celda vacía para alinear con el encabezado de sumatorias por filas
  html += '</table>';
  contenedorMatriz.innerHTML = html;
}


// Inicializar el grafo cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  inicializarGrafo();
});

// Función para guardar el grafo con un nombre proporcionado por el usuario
function guardarGrafo() {
    const nombreArchivo = prompt('Por favor, ingresa un nombre para guardar el grafo:', 'grafo');
    if (nombreArchivo !== null) {
      const grafoJSON = JSON.stringify({ nodos: nodosDataSet.get(), aristas: aristasDataSet.get() });
      const blob = new Blob([grafoJSON], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = nombreArchivo + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

// Función para cargar un grafo desde un archivo JSON seleccionado por el usuario
function cargarGrafo() {
    const inputArchivo = document.getElementById('inputArchivo');
    const file = inputArchivo.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const contenido = event.target.result;
      const datos = JSON.parse(contenido);
  
      // Reset node labels to their original values
      nodosDataSet.forEach(node => {
          nodosDataSet.update({ id: node.id, label: node.originalLabel });
      });
  
      // Clear highlighted edges
      aristasDataSet.forEach(edge => {
          aristasDataSet.update({ id: edge.id, color: { color: 'blue', highlight: 'blue' } });
      });
  
      // Clear current graph data
      nodosDataSet.clear();
      aristasDataSet.clear();
  
      // Add the nodes and edges from the JSON file to the graph
      nodosDataSet.add(datos.nodos);
      aristasDataSet.add(datos.aristas);
    };
    reader.readAsText(file);
  }
  
  

// Función Jhonson para calcular los valores Xi y Yi de los nodos del grafo
function Jhonson(sumasColumnas, sumasFilas) {
  const nodos = nodosDataSet.get({ fields: ['id', 'label'] });

  // Calcular valores Xi de izquierda a derecha
  let valoresXi = new Array(nodos.length).fill(0);
  for (let i = 0; i < nodos.length; i++) {
    const conexiones = aristasDataSet.get({ filter: edge => edge.from === nodos[i].id });
    conexiones.forEach(conexion => {
      const valorArista = parseInt(conexion.label || 0);
      const nodoDestino = nodos.find(nodo => nodo.id === conexion.to);
      const valorXi = valoresXi[i] + valorArista;
      if (valorXi > valoresXi[nodoDestino.id - 1]) {
        valoresXi[nodoDestino.id - 1] = valorXi;
      }
    });
  }
  
  // Calcular valores Yi de derecha a izquierda
  let valoresYi = new Array(nodos.length).fill(Number.POSITIVE_INFINITY); // Inicializar valores Yi con infinito positivo
  valoresYi[nodos.length - 1] = valoresXi[nodos.length - 1]; // Valor Yi del nodo final es igual a su Xi
  for (let i = nodos.length - 1; i >= 0; i--) {
    const conexiones = aristasDataSet.get({ filter: edge => edge.to === nodos[i].id });
    conexiones.forEach(conexion => {
      const valorArista = parseInt(conexion.label || 0);
      const nodoOrigen = nodos.find(nodo => nodo.id === conexion.from);
      const valorYi = valoresYi[i] - valorArista; // Restar el valor del arista al valor Yi actual
      if (valorYi < valoresYi[nodoOrigen.id - 1]) {
        valoresYi[nodoOrigen.id - 1] = valorYi;
      }
    });
  }

  // Actualizar el título y la etiqueta de cada nodo con los valores Xi y Yi
  nodos.forEach((nodo, index) => {
    const valorXi = valoresXi[index];
    const valorYi = valoresYi[index];
    const nuevaEtiqueta = `${nodo.label}\n ${valorXi} || ${valorYi}`;
    nodosDataSet.update({ id: nodo.id, label: nuevaEtiqueta, title: nuevaEtiqueta });
  });

  // Llamar a la función para calcular las holguras
  holgura(nodos, valoresXi, valoresYi);
}


// Función para calcular las holguras entre cada par de nodos
function holgura(nodos, valoresXi, valoresYi) {
  const aristas = aristasDataSet.get({ fields: ['id', 'from', 'to', 'label'] });
  let listaHolgurasHTML = ''; // Variable para almacenar el HTML de la lista de holguras

  // Eliminar las aristas con holgura igual a 0 y cambiar su color
  aristas.forEach(arista => {
    const nodoOrigen = nodos.find(nodo => nodo.id === arista.from);
    const nodoDestino = nodos.find(nodo => nodo.id === arista.to);
    const valorXiOrigen = valoresXi[arista.from - 1];
    const valorYiDestino = valoresYi[arista.to - 1];
    const valorArista = parseInt(arista.label || 0);
    const holgura = valorYiDestino - valorXiOrigen - valorArista;

    if (holgura === 0) {
      // Eliminar arista existente
      aristasDataSet.remove(arista.id);

      // Agregar nueva arista con color modificado
      const nuevaArista = {
        id: arista.id,
        from: arista.from,
        to: arista.to,
        label: arista.label,
        color: { color: '#00ff00', highlight: '#00ff00' },
        width: 1
      };
      aristasDataSet.add(nuevaArista);

    }
  });

  // Calcular las holguras y almacenarlas en el HTML de la lista de holguras
  for (let i = 0; i < nodos.length; i++) {
    for (let j = 0; j < aristas.length; j++) {
      const arista = aristas[j];
      if (arista.from === nodos[i].id) {
        const nodoDestino = nodos.find(nodo => nodo.id === arista.to);
        const valorXiOrigen = valoresXi[nodos[i].id - 1];
        const valorYiDestino = valoresYi[nodoDestino.id - 1];
        const valorArista = parseInt(arista.label || 0);
        const holgura = valorYiDestino - valorXiOrigen - valorArista;
        let color = 'black'; // Color predeterminado para la holgura
      
        if (holgura === 0) {
          color = 'green';
        }
        listaHolgurasHTML += `<li style="color: ${color};">${nodos[i].label} con ${nodoDestino.label} holgura = ${holgura}</li>`;
      }
    }
  }
  let listaHolgurasConTituloHTML = `<h3>Holgura / Ruta Crítica</h3><ul>${listaHolgurasHTML}</ul>`;

  // Mostrar la lista de holguras en el elemento con id "listaHolguras"
  document.getElementById('listaHolguras').innerHTML = listaHolgurasConTituloHTML;
}


// Function to generate the adjacency list from the adjacency matrix
function generarListaAdyacencia() {
    const nodos = nodosDataSet.get({ fields: ['id'] });
    const listaAdyacencia = {};

    nodos.forEach((nodo) => {
        listaAdyacencia[nodo.id] = {};
        nodos.forEach((otroNodo) => {
            const conexion = aristasDataSet.get({
                filter: edge => (edge.from === nodo.id && edge.to === otroNodo.id)
            });
            if (conexion.length > 0) {
                const valor = parseInt(conexion[0].label || 1);
                listaAdyacencia[nodo.id][otroNodo.id] = valor;
            }
        });
    });

    return listaAdyacencia;
}


function dijkstra(aristas, nodos, startNodeId) {
    let distances = {}; // Store the shortest distance from the start node to every other node
    let visited = new Set(); // Keep track of visited nodes
    let unvisited = new Set(); // Keep track of unvisited nodes

    // Initialize distances with Infinity for all nodes except the start node
    for (let nodo of nodos) {
        distances[nodo.id] = nodo.id === startNodeId ? 0 : Infinity;
        unvisited.add(nodo.id);
    }

    while (unvisited.size > 0) {
        // Find the node with the smallest distance among unvisited nodes
        let closestNode = null;
        for (let nodeId of unvisited) {
            if (!closestNode || distances[nodeId] < distances[closestNode]) {
                closestNode = nodeId;
            }
        }

        // Remove the closest node from the set of unvisited nodes
        unvisited.delete(closestNode);

        // If the closestNode is still Infinity, then remaining nodes are unreachable and we can break
        if (distances[closestNode] === Infinity) break;

        // For each neighboring node of the current node
        for (let arista of aristas) {
            if (arista.from === closestNode) {
                let distanceToNeighbor = distances[closestNode] + parseInt(arista.label);
                // If the new distance is shorter, update the distance
                if (distanceToNeighbor < distances[arista.to]) {
                    distances[arista.to] = distanceToNeighbor;
                }
            }
        }
    }

    return distances;
}

function resetNodeLabels() {
    const nodos = nodosDataSet.get({ fields: ['id'] });
    nodos.forEach(node => {
        const nodeId = node.id;
        nodosDataSet.update({ id: nodeId, label: `Node ${nodeId}` });
    });
}










// Function to run Dijkstra's algorithm and return the shortest path edges
// Function to run Dijkstra's algorithm and return the shortest path edges
function runDijkstra() {
    resetNodeLabels();

    const startNodeId = nodosDataSet.get()[0].id; // Assuming the first node is the start node
    const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
    const aristas = aristasDataSet.get({ fields: ['id', 'from', 'to', 'label'] });
    const distances = dijkstra(aristas, nodos, startNodeId);

    // Store original labels before updating
    nodos.forEach(node => {
        nodosDataSet.update({ id: node.id, originalLabel: node.label });
    });

    // Update node labels with shortest distances
    // Update node labels with shortest distances

    // Update node labels with shortest distances
nodos.forEach(node => {
    const nodeId = node.id;
    const originalLabel = nodosDataSet.get(nodeId).originalLabel || ''; // Access originalLabel from the DataSet
    console.log("Original Label for Node", nodeId, ":", originalLabel); // Log original label
    const shortestDistance = distances[nodeId];
    const shortestDistanceLabel = shortestDistance !== undefined ? 'Valor: ' + shortestDistance : 'Unreachable';
    // Reset the label to just the original label before appending the new value
    const newNodeLabel = originalLabel + '\n' + shortestDistanceLabel;
    nodosDataSet.update({ id: nodeId, label: newNodeLabel });
});



    
    // Initialize an empty set to store visited nodes
    const visitedNodes = new Set();

    // Initialize an empty array to store the shortest path edges
    let shortestPathEdges = [];

    // Set the current node as the destination node
    let currentNodeId = nodos[nodos.length - 1].id;

    // Trace back from the destination node to the start node along the shortest path
    while (currentNodeId !== startNodeId) {
        // Mark the current node as visited
        visitedNodes.add(currentNodeId);

        // Find the incoming edge with the shortest distance to the current node
        let minDistance = Infinity;
        let minDistanceEdge = null;
        aristas.forEach(edge => {
            if (edge.to === currentNodeId && distances[edge.from] + parseInt(edge.label) === distances[currentNodeId]) {
                if (!visitedNodes.has(edge.from) && distances[edge.from] < minDistance) {
                    minDistance = distances[edge.from];
                    minDistanceEdge = edge;
                }
            }
        });

        // Add the incoming edge to the shortest path edges array
        shortestPathEdges.unshift(minDistanceEdge);

        // Update the current node to the source node of the incoming edge
        currentNodeId = minDistanceEdge.from;
    }

    console.log("Shortest Path Edges:", shortestPathEdges.map(edge => edge.id)); // Log shortest path edges

    // Log the values of the edges being highlighted
    console.log("Values of Edges Being Highlighted:");
    shortestPathEdges.forEach(edge => {
        console.log(`Edge ${edge.id}: ${edge.label}`);
    });

    // Update the visualization to highlight the shortest path edges in red
    aristas.forEach(edge => {
        if (shortestPathEdges.some(shortestEdge => shortestEdge.id === edge.id)) {
            aristasDataSet.update({ id: edge.id, color: { color: 'red', highlight: 'red' } });
        } else {
            aristasDataSet.update({ id: edge.id, color: { color: 'blue', highlight: 'blue' } });
        }
    });
}



// Function to run Dijkstra's algorithm and return the longest path edges
function runLongestPath() {
    resetNodeLabels();

    const startNodeId = nodosDataSet.get()[0].id; // Assuming the first node is the start node
    const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
    const aristas = aristasDataSet.get({ fields: ['id', 'from', 'to', 'label'] });

    // Modify Dijkstra's algorithm to find the longest distances
    const distances = longestPathDijkstra(aristas, nodos, startNodeId);

    // Store original labels before updating
    nodos.forEach(node => {
        nodosDataSet.update({ id: node.id, originalLabel: node.label });
    });

    // Update node labels with longest distances
    nodos.forEach(node => {
    const nodeId = node.id;
    const originalLabel = nodosDataSet.get(nodeId).originalLabel || ''; // Access originalLabel from the DataSet
    console.log("Original Label for Node", nodeId, ":", originalLabel); // Log original label
    const longestDistance = distances[nodeId];
    const longestDistanceLabel = longestDistance !== -Infinity ? 'Valor: ' + longestDistance : 'Unreachable';
    const newNodeLabel = originalLabel + '\n' + longestDistanceLabel;
    nodosDataSet.update({ id: nodeId, label: newNodeLabel });
});

    // Initialize an empty set to store visited nodes
    const visitedNodes = new Set();

    // Initialize an empty array to store the longest path edges
    let longestPathEdges = [];

    // Set the current node as the destination node
    let currentNodeId = nodos[nodos.length - 1].id;

    // Trace back from the destination node to the start node along the longest path
    while (currentNodeId !== startNodeId) {
        // Mark the current node as visited
        visitedNodes.add(currentNodeId);

        // Find the incoming edge with the longest distance to the current node
        let maxDistance = -Infinity;
        let maxDistanceEdge = null;
        aristas.forEach(edge => {
            if (edge.to === currentNodeId && distances[edge.from] + parseInt(edge.label) === distances[currentNodeId]) {
                if (!visitedNodes.has(edge.from) && distances[edge.from] > maxDistance) {
                    maxDistance = distances[edge.from];
                    maxDistanceEdge = edge;
                }
            }
        });

        // Add the incoming edge to the longest path edges array
        longestPathEdges.unshift(maxDistanceEdge);

        // Update the current node to the source node of the incoming edge
        currentNodeId = maxDistanceEdge.from;
    }

    console.log("Longest Path Edges:", longestPathEdges.map(edge => edge.id)); // Log longest path edges

    // Log the values of the edges being highlighted
    console.log("Values of Edges Being Highlighted:");
    longestPathEdges.forEach(edge => {
        console.log(`Edge ${edge.id}: ${edge.label}`);
    });

    // Update the visualization to highlight the longest path edges in red
    aristas.forEach(edge => {
        if (longestPathEdges.some(longestEdge => longestEdge.id === edge.id)) {
            aristasDataSet.update({ id: edge.id, color: { color: 'red', highlight: 'red' } });
        } else {
            aristasDataSet.update({ id: edge.id, color: { color: 'blue', highlight: 'blue' } });
        }
    });
}

// Function to modify Dijkstra's algorithm to find the longest distances
function longestPathDijkstra(aristas, nodos, startNodeId) {
    let distances = {}; // Store the longest distance from the start node to every other node
    let visited = new Set(); // Keep track of visited nodes
    let unvisited = new Set(); // Keep track of unvisited nodes

    // Initialize distances with -Infinity for all nodes except the start node
    for (let nodo of nodos) {
        distances[nodo.id] = nodo.id === startNodeId ? 0 : -Infinity;
        unvisited.add(nodo.id);
    }

    while (unvisited.size > 0) {
        // Find the node with the largest distance among unvisited nodes
        let farthestNode = null;
        for (let nodeId of unvisited) {
            if (!farthestNode || distances[nodeId] > distances[farthestNode]) {
                farthestNode = nodeId;
            }
        }

        // Remove the farthest node from the set of unvisited nodes
        unvisited.delete(farthestNode);

        // If the farthestNode is still -Infinity, then remaining nodes are unreachable and we can break
        if (distances[farthestNode] === -Infinity) break;

        // For each neighboring node of the current node
        for (let arista of aristas) {
            if (arista.from === farthestNode) {
                let distanceToNeighbor = distances[farthestNode] + parseInt(arista.label);
                // If the new distance is larger, update the distance
                if (distanceToNeighbor > distances[arista.to]) {
                    distances[arista.to] = distanceToNeighbor;
                }
            }
        }
    }

    return distances;
}


