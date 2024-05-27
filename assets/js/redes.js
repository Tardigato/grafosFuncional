let grafo;
let nodosDataSet;
let aristasDataSet;
let seleccionado;
let modoEliminarArista = false;
let modoAgregarNodo = false; // Variable para controlar el modo de la aplicación

// Función para inicializar el grafo
function inicializarGrafo() {
  const lienzo = document.getElementById('lienzo');
  nodosDataSet = new vis.DataSet();
  aristasDataSet = new vis.DataSet();
  const data = { nodes: nodosDataSet, edges: aristasDataSet };
  const opciones = {
    physics: {
      enabled: true,
    },
    edges: {
      smooth: false,
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

// Función para generar la matriz de adyacencia
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
  const nombreGrafo = prompt('Ingrese el nombre para guardar el grafo:');
  if (nombreGrafo) {
    const grafoJSON = JSON.stringify({
      nodos: nodosDataSet.get(),
      aristas: aristasDataSet.get(),
    });
    localStorage.setItem(nombreGrafo, grafoJSON);
    alert(`Grafo guardado como "${nombreGrafo}"`);
  }
}

// Función para cargar un grafo guardado por su nombre
function cargarGrafo() {
  const nombreGrafo = prompt('Ingrese el nombre del grafo para cargar:');
  const grafoJSON = localStorage.getItem(nombreGrafo);
  if (grafoJSON) {
    const grafo = JSON.parse(grafoJSON);
    nodosDataSet.clear();
    aristasDataSet.clear();
    nodosDataSet.add(grafo.nodos);
    aristasDataSet.add(grafo.aristas);
    alert(`Grafo "${nombreGrafo}" cargado`);
  } else {
    alert(`No se encontró un grafo guardado con el nombre "${nombreGrafo}"`);
  }
}

// Función para generar y mostrar la matriz de adyacencia y las sumatorias
function generarYMostrarMatriz() {
  const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
  const matriz = generarMatriz();
  const sumasFilas = matriz.map(fila => fila.reduce((a, b) => a + b, 0));
  const sumasColumnas = matriz[0].map((_, colIndex) => matriz.reduce((a, b) => a + b[colIndex], 0));
  mostrarMatriz(nodos, matriz, sumasFilas, sumasColumnas);
}
