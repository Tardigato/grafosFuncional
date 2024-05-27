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
    const opciones = {
      physics: {
        enabled: false,
      },
      edges: {
        smooth: false,
      },
      nodes: {
        shape: 'image', // Configuración global para los nodos
        image: 'images/persona_png.png' // URL de la imagen predeterminada
      }
    };
    grafo = new vis.Network(lienzo, data, opciones);
  
    // Eventos del grafo
    grafo.on('click', clicEnNodo);
    grafo.on('doubleClick', dobleClicEnArista);
    grafo.on('click', eliminarAristaSeleccionada);
  }
  

// Función para manejar el clic en un nodo
function clicEnNodo(propiedades) {
  const { nodes } = propiedades;
  if (nodes.length > 0) {
    if (seleccionado === undefined) {
      seleccionado = nodes[0];
    } else {
      if (seleccionado !== nodes[0]) {
        // Se agrega una nueva arista sin flechas
        aristasDataSet.add({ from: seleccionado, to: nodes[0], arrows: undefined });
        seleccionado = undefined;
      } else {
        // Conexión manual del nodo consigo mismo sin flechas
        aristasDataSet.add({ from: seleccionado, to: seleccionado, arrows: undefined });
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
      // Se actualiza la arista con el valor ingresado, sin flechas
      aristasDataSet.update({ id: edges[0], label: valor, arrows: undefined });
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
      // Eliminar la arisata seleccionada
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
        const imageSelector = document.getElementById('imageSelector');
        const selectedImage = imageSelector.value;
        nodosDataSet.add({
          id: nuevoId,
          label: 'Nodo ' + nuevoId,
          x: position.x,
          y: position.y,
          shape: 'image', // Especifica que este nodo usará una imagen
          image: selectedImage // URL de la imagen del nodo
        });
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

    // Reset edge colors
    aristasDataSet.forEach(edge => {
        aristasDataSet.update({ id: edge.id, color: { color: 'blue', highlight: 'blue' } });
    });

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


// Kruskal's algorithm function.
function kruskal() {
  const edges = [];
  // Generate the list of edges
  aristasDataSet.forEach(arista => {
      const { from, to } = arista;
      const weight = parseInt(arista.label || 1);
      edges.push([from, to, weight]);
  });
  
  // Sort the edges by weight (in ascending order).
  edges.sort((a, b) => a[2] - b[2]);

  const unionFind = new UnionFind(nodosDataSet.length);
  const mst = []; // This will hold the edges of our minimum spanning tree.
  let sumaAristasResaltadas = 0; // Variable para almacenar la suma de los pesos de las aristas resaltadas

  // For every edge, in increasing order of their weight.
  for (const [u, v, weight] of edges) {
      // If the two vertices of the edge are in different subsets, add the edge to the MST.
      if (unionFind.find(u) !== unionFind.find(v)) {
          mst.push([u, v, weight]);
          unionFind.union(u, v); // Merge the two subsets.
          sumaAristasResaltadas += weight; // Agregar el peso de la arista al total
      }
  }

  // Highlight the edges in the MST
  aristasDataSet.forEach(arista => {
      const { from, to } = arista;
      if (mst.some(edge => (edge[0] === from && edge[1] === to) || (edge[0] === to && edge[1] === from))) {
          aristasDataSet.update({ id: arista.id, color: { color: 'red', highlight: 'red' } });
      } else {
          aristasDataSet.update({ id: arista.id, color: { color: 'blue', highlight: 'blue' } });
      }
  });

  // Actualizar el contenido del elemento HTML con la suma de los pesos de las aristas resaltadas
  document.getElementById("sumaAristas").innerHTML = `Suma de las Aristas: ${sumaAristasResaltadas}`;
}

// Función para ejecutar Kruskal y resaltar las aristas resultantes
function ejecutarKruskal() {
  kruskal();
}

class UnionFind {
    constructor(size) {
        // The parent array contains the representative element (or the root) for each subset.
        // Initially, every element is its own parent (its own subset).
        this.parent = Array.from({ length: size }, (_, idx) => idx);
        
        // The rank array is used to keep the tree flat during union operations.
        this.rank = Array(size).fill(0);
    }

    // Find method with path compression.
    // It returns the root (representative element) of the subset that 'x' belongs to.
    find(x) {
        if (this.parent[x] !== x) {
            // Path compression: directly connect 'x' to its root.
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    // Union method unites two subsets.
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return; // They are already in the same subset.

        // The element with the smaller rank should point to the element with the larger rank.
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++; // Increase the rank of rootX by 1.
        }
    }
}

/*----------------------------------------*/
function kruskalWithHighestWeight() {
  const edges = [];
  // Generate the list of edges
  aristasDataSet.forEach(arista => {
      const { from, to } = arista;
      const weight = parseInt(arista.label || 1);
      edges.push([from, to, weight]);
  });
  
  // Sort the edges by weight (in descending order).
  edges.sort((a, b) => b[2] - a[2]); // Sort in descending order.

  const unionFind = new UnionFind(nodosDataSet.length);
  const mst = []; // This will hold the edges of our minimum spanning tree.
  let sumaAristasResaltadas = 0; // Variable para almacenar la suma de los pesos de las aristas resaltadas

  // For every edge, in decreasing order of their weight (highest weight first).
  for (const [u, v, weight] of edges) {
      // If the two vertices of the edge are in different subsets, add the edge to the MST.
      if (unionFind.find(u) !== unionFind.find(v)) {
          mst.push([u, v, weight]);
          unionFind.union(u, v); // Merge the two subsets.
          sumaAristasResaltadas += weight; // Agregar el peso de la arista al total
      }
  }

  // Highlight the edges in the MST
  aristasDataSet.forEach(arista => {
      const { from, to } = arista;
      if (mst.some(edge => (edge[0] === from && edge[1] === to) || (edge[0] === to && edge[1] === from))) {
          aristasDataSet.update({ id: arista.id, color: { color: 'red', highlight: 'red' } });
      } else {
          aristasDataSet.update({ id: arista.id, color: { color: 'blue', highlight: 'blue' } });
      }
  });

  // Actualizar el contenido del elemento HTML con la suma de los pesos de las aristas resaltadas
  document.getElementById("sumaAristas").innerHTML = `Suma de las Aristas: ${sumaAristasResaltadas}`;
}

// Function to execute Kruskal with highest weight and highlight the resulting edges
function executeKruskalWithHighestWeight() {
  kruskalWithHighestWeight();
}