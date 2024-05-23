let grafo;
let nodosDataSet;
let aristasDataSet;
let seleccionado;
let modoEliminarArista = false;
let modoAgregarNodo = false;
let tipoNodo = ''; // Variable para distinguir entre origen y destino
let contadorOrigen = 0; // Contador para nodos de origen
let contadorDestino = 0; // Contador para nodos de destino

// Función para inicializar el grafo
function inicializarGrafo() {
    const lienzo = document.getElementById('lienzo');
    nodosDataSet = new vis.DataSet();
    aristasDataSet = new vis.DataSet();
    const data = { nodes: nodosDataSet, edges: aristasDataSet };

    const opciones = {
        physics: { enabled: false },
        edges: {
            smooth: true,
            arrows: { to: { enabled: true, scaleFactor: 1 } },
            color: {},
            width: 2
        },
        nodes: {
            color: {},
            font: {},
            borderWidth: 2
        }
    };

    grafo = new vis.Network(lienzo, data, opciones);

    grafo.on('click', clicEnNodo);
    grafo.on('doubleClick', dobleClicEnArista);
    grafo.on('click', eliminarAristaSeleccionada);
}

function clicEnNodo(propiedades) {
  const { nodes } = propiedades;
  if (nodes.length > 0) {
    if (seleccionado === undefined) {
      seleccionado = nodes[0];
    } else {
      if (seleccionado !== nodes[0]) {
        aristasDataSet.add({ from: seleccionado, to: nodes[0], arrows: 'to' });
        seleccionado = undefined;
      } else {
        aristasDataSet.add({ from: seleccionado, to: seleccionado, arrows: 'to' });
        seleccionado = undefined;
      }
    }
  }
}

function dobleClicEnArista(propiedades) {
  const { edges } = propiedades;
  if (edges.length > 0) {
    const valor = prompt('Ingrese el valor para la conexión:', '');
    if (valor !== null) {
      aristasDataSet.update({ id: edges[0], label: valor });
    }
  }
}

function eliminarAristaSeleccionada(propiedades) {
  if (modoEliminarArista) {
    const aristaId = propiedades.edges[0];
    if (aristaId !== undefined) {
      eliminarArista(aristaId);
      modoEliminarArista = false;
    }
  }
}

function activarModoEliminarArista() {
  modoEliminarArista = true;
  alert('Haz clic en la arista que deseas eliminar.');
}

function eliminarArista(aristaId) {
  aristasDataSet.remove({ id: aristaId });
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Delete' || event.key === 'Backspace') {
    const seleccion = grafo.getSelection();
    if (seleccion.edges.length > 0) {
      eliminarArista(seleccion.edges[0]);
    }
  }
});

function agregarNodo() {
  modoAgregarNodo = true;
  grafo.off('click');
  grafo.on('click', function(event) {
    if (modoAgregarNodo) {
      const position = event.pointer.canvas;
      const nuevoId = nodosDataSet.length + 1;
      nodosDataSet.add({ id: nuevoId, label: 'Nodo ' + nuevoId, x: position.x, y: position.y });
      grafo.off('click');
      grafo.on('click', clicEnNodo);
      modoAgregarNodo = false;
    }
  });
}

function agregarOrigen() {
  modoAgregarNodo = true;
  tipoNodo = 'origen';
  grafo.off('click');
  grafo.on('click', function(event) {
    if (modoAgregarNodo) {
      contadorOrigen++;
      const ofertaNodo = prompt('Ingrese la oferta:');
      const position = event.pointer.canvas;
      const nuevoId = nodosDataSet.length + 1;
      nodosDataSet.add({ id: nuevoId, label: `O${contadorOrigen}: ${ofertaNodo}`, x: position.x, y: position.y, oferta: ofertaNodo });
      grafo.off('click');
      grafo.on('click', clicEnNodo);
      modoAgregarNodo = false;
    }
  });
}

function agregarDestino() {
  modoAgregarNodo = true;
  tipoNodo = 'destino';
  grafo.off('click');
  grafo.on('click', function(event) {
    if (modoAgregarNodo) {
      contadorDestino++;
      const demandaNodo = prompt('Ingrese la demanda:');
      const position = event.pointer.canvas;
      const nuevoId = nodosDataSet.length + 1;
      nodosDataSet.add({ id: nuevoId, label: `D${contadorDestino}: ${demandaNodo}`, x: position.x, y: position.y, demanda: demandaNodo });
      grafo.off('click');
      grafo.on('click', clicEnNodo);
      modoAgregarNodo = false;
    }
  });
}

function cambiarNombre() {
  if (seleccionado !== undefined) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre para el nodo:', seleccionado.label);
    if (nuevoNombre !== null) {
      nodosDataSet.update({ id: seleccionado, label: nuevoNombre });
    }
    seleccionado = undefined;
  } else {
    alert('Por favor, seleccione un nodo primero.');
  }
}

function eliminarNodo() {
  if (seleccionado !== undefined) {
    nodosDataSet.remove({ id: seleccionado });
    const aristas = aristasDataSet.get({ filter: function (item) { return item.from === seleccionado || item.to === seleccionado; } });
    aristas.forEach(function (arista) {
      aristasDataSet.remove({ id: arista.id });
    });
  } else {
    alert('Por favor, seleccione un nodo primero.');
  }
}

function generarMatriz() {
  const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
  const matriz = [];
  const sumasFilas = [];
  const sumasColumnas = new Array(nodos.length).fill(0);
  
  nodos.forEach((nodo, rowIndex) => {
    const fila = [];
    let sumaFila = 0;
    nodos.forEach((otroNodo, columnIndex) => {
      const conexion = aristasDataSet.get({
        filter: edge => (edge.from === nodo.id && edge.to === otroNodo.id)
      });
      if (conexion.length > 0) {
        const valor = parseInt(conexion[0].label || 1);
        fila.push(valor);
        sumaFila += valor;
        sumasColumnas[columnIndex] += valor;
      } else {
        fila.push(0);
      }
    });
    matriz.push(fila);
    sumasFilas.push(sumaFila);
  });

  mostrarMatriz(nodos, matriz, sumasFilas, sumasColumnas);
}

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
    // Limpiar los conjuntos de datos actuales
    nodosDataSet.clear();
    aristasDataSet.clear();
    // Agregar los nodos y aristas del archivo JSON al grafo
    nodosDataSet.add(datos.nodos);
    aristasDataSet.add(datos.aristas);
  };
  reader.readAsText(file);
}