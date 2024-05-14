let grafo;
let nodosDataSet;
let aristasDataSet;
let seleccionado;
let modoEliminarArista = false;
let modoAgregarNodo = false;
let nodoCentralId = null;

function inicializarGrafo() {
  const lienzo = document.getElementById('lienzo');
  nodosDataSet = new vis.DataSet();
  aristasDataSet = new vis.DataSet();
  const data = { nodes: nodosDataSet, edges: aristasDataSet };
  const opciones = { physics: { enabled: false } };
  grafo = new vis.Network(lienzo, data, opciones);

  grafo.on('click', clicEnNodo);
  grafo.on('doubleClick', dobleClicEnArista);
  grafo.on('click', eliminarAristaSeleccionada);
}

function clicEnNodo(propiedades) {
  if (modoEliminarArista) return;
  seleccionado = propiedades.nodes[0];
  if (seleccionado) {
    const posicion = grafo.getPositions([seleccionado]);
    const mensaje = `Nodo seleccionado: ${seleccionado}\nPosición - x: ${posicion[seleccionado].x}, y: ${posicion[seleccionado].y}`;
    alert(mensaje);
  }
}

function dobleClicEnArista(propiedades) {
  if (!modoEliminarArista) return;
  const aristaSeleccionada = propiedades.edges[0];
  if (aristaSeleccionada) {
    aristasDataSet.remove(aristaSeleccionada);
  }
}

function eliminarAristaSeleccionada() {
  if (!modoEliminarArista) return;
  const seleccion = grafo.getSelection();
  seleccion.edges.forEach(arista => aristasDataSet.remove(arista));
}

function agregarNodo() {
  const nuevoId = nodosDataSet.length + 1;
  const nuevoNodo = { id: nuevoId, label: `Nodo ${nuevoId}` };
  nodosDataSet.add(nuevoNodo);
}

function eliminarNodo() {
  if (seleccionado) {
    nodosDataSet.remove(seleccionado);
    seleccionado = null;
  } else {
    alert('Seleccione un nodo para eliminar.');
  }
}

function cambiarNombre() {
  if (!seleccionado) {
    alert('Seleccione un nodo primero.');
    return;
  }
  const nuevoNombre = prompt('Ingrese el nuevo nombre para el nodo:');
  if (nuevoNombre) {
    nodosDataSet.update({ id: seleccionado, label: nuevoNombre });
  }
}

function guardarGrafo() {
  const nodos = nodosDataSet.get();
  const aristas = aristasDataSet.get();
  const grafo = { nodos, aristas };
  const blob = new Blob([JSON.stringify(grafo)], { type: 'application/json' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = 'grafo.json';
  enlace.click();
}

function cargarGrafo() {
  const inputArchivo = document.getElementById('inputArchivo');
  if (!inputArchivo.files.length) return;

  const archivo = inputArchivo.files[0];
  const lector = new FileReader();

  lector.onload = function (evento) {
    const contenido = JSON.parse(evento.target.result);
    nodosDataSet.clear();
    aristasDataSet.clear();
    nodosDataSet.add(contenido.nodos);
    aristasDataSet.add(contenido.aristas);
    calcularBaricentro();
  };

  lector.readAsText(archivo);
}

function calcularBaricentro() {
  const nodos = nodosDataSet.get();
  if (nodos.length === 0) {
    alert('No hay nodos en el grafo.');
    return;
  }

  let sumaX = 0, sumaY = 0;
  nodos.forEach(nodo => {
    const posicion = grafo.getPositions([nodo.id]);
    sumaX += posicion[nodo.id].x;
    sumaY += posicion[nodo.id].y;
  });

  const baricentroX = sumaX / nodos.length;
  const baricentroY = sumaY / nodos.length;

  alert(`Baricentro calculado:\nX: ${baricentroX}, Y: ${baricentroY}`);
}

function mostrarPosiciones() {
  const nodos = nodosDataSet.get();
  let mensaje = 'Posiciones de los nodos:\n';
  nodos.forEach(nodo => {
    const posicion = grafo.getPositions([nodo.id]);
    mensaje += `Nodo ${nodo.label}: x=${posicion[nodo.id].x}, y=${posicion[nodo.id].y}\n`;
  });
  alert(mensaje);
}

function mostrarFormularioPosiciones() {
  const formulario = document.getElementById('formPosiciones');
  const inputsContainer = document.getElementById('inputsPosiciones');
  inputsContainer.innerHTML = '';

  nodosDataSet.get().forEach(nodo => {
    const div = document.createElement('div');
    div.innerHTML = `
      <label for="posX${nodo.id}">Nodo ${nodo.label} - x:</label>
      <input type="number" id="posX${nodo.id}" name="posX${nodo.id}">
      <label for="posY${nodo.id}">y:</label>
      <input type="number" id="posY${nodo.id}" name="posY${nodo.id}">
    `;
    inputsContainer.appendChild(div);
  });

  document.getElementById('posiciones').style.display = 'block';
}

function guardarPosiciones() {
  nodosDataSet.get().forEach(nodo => {
    const x = parseFloat(document.getElementById(`posX${nodo.id}`).value);
    const y = parseFloat(document.getElementById(`posY${nodo.id}`).value);
    if (!isNaN(x) && !isNaN(y)) {
      grafo.moveNode(nodo.id, x, y);
    }
  });

  document.getElementById('posiciones').style.display = 'none';
  calcularBaricentro();
}

inicializarGrafo();
