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

function agregarNodo() {
  modoAgregarNodo = true;
  grafo.off('click', clicEnNodo);
  grafo.on('click', function(event) {
    if (modoAgregarNodo) {
      const position = event.pointer.canvas;
      const nuevoId = nodosDataSet.length + 1;
      nodosDataSet.add({ id: nuevoId, label: `Nodo ${nuevoId}`, x: position.x, y: position.y, physics: false });
      grafo.off('click');
      grafo.on('click', clicEnNodo);
      modoAgregarNodo = false;
    }
  });
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
  

function cambiarNombre() {
  if (seleccionado !== undefined) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre para el nodo:', nodosDataSet.get(seleccionado).label);
    if (nuevoNombre) {
      nodosDataSet.update({ id: seleccionado, label: nuevoNombre });
    }
  }
}

function calcularBaricentro() {
    let nodos = nodosDataSet.get();
    let posiciones = nodos.map(nodo => grafo.getPositions([nodo.id])[nodo.id]);
    let n = posiciones.length;
    if (n === 0) return;

    // Encontrar las coordenadas mínimas y máximas para obtener el área del rectángulo
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let maxY = Number.MIN_VALUE;
    for (let i = 0; i < n; i++) {
        minX = Math.min(minX, posiciones[i].x);
        minY = Math.min(minY, posiciones[i].y);
        maxX = Math.max(maxX, posiciones[i].x);
        maxY = Math.max(maxY, posiciones[i].y);
    }

    // Calcular el centro del rectángulo
    let centroX = (minX + maxX) / 2;
    let centroY = (minY + maxY) / 2;

    if (nodoCentralId) {
        // Actualizar la posición del nodo central
        nodosDataSet.update({ id: nodoCentralId, x: centroX, y: centroY });
    } else {
        // Agregar el nodo central si no existe
        nodoCentralId = nodosDataSet.length + 1;
        nodosDataSet.add({
            id: nodoCentralId,
            label: 'centro',
            x: centroX,
            y: centroY,
            color: 'green',
            physics: false
        });
    }
    

}




function guardarGrafo() {
  const nombreArchivo = prompt('Ingrese el nombre del archivo:', 'grafo.json');
  if (nombreArchivo) {
    const nodos = nodosDataSet.get();
    const aristas = aristasDataSet.get();
    const grafo = { nodos, aristas };
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(grafo))}`;
    const elementoDescarga = document.createElement('a');
    elementoDescarga.setAttribute('href', dataStr);
    elementoDescarga.setAttribute('download', nombreArchivo);
    elementoDescarga.click();
  }
}

function cargarGrafo() {
  const archivo = document.getElementById('inputArchivo').files[0];
  if (!archivo) {
    alert('Por favor selecciona un archivo JSON');
    return;
  }
  const lector = new FileReader();
  lector.onload = function(evento) {
    const contenido = JSON.parse(evento.target.result);
    nodosDataSet.clear();
    aristasDataSet.clear();
    contenido.nodos.forEach(nodo => nodosDataSet.add(nodo));
    contenido.aristas.forEach(arista => aristasDataSet.add(arista));
  };
  lector.readAsText(archivo);
}

function mostrarPosiciones() {
  const nodos = nodosDataSet.get();
  const posiciones = nodos.map(nodo => {
    const posicion = grafo.getPositions([nodo.id])[nodo.id];
    return `Nodo ${nodo.label}: (${posicion.x}, ${posicion.y})`;
  }).join('\n');
  document.getElementById('textoPosiciones').innerText = `Posiciones de los nodos:\n${posiciones}`;
  document.getElementById('contenedorPosiciones').style.display = 'block';
}

function mostrarFormularioPosicionIndividual() {
    const formulario = document.getElementById('formPosicionIndividual');
    const selectNodo = document.getElementById('nodoSelect');
    
    // Limpiar las opciones existentes
    selectNodo.innerHTML = '';

    // Obtener todos los nodos y agregar opciones al select
    const nodos = nodosDataSet.get();
    nodos.forEach(nodo => {
        const option = document.createElement('option');
        option.value = nodo.id;
        option.text = nodo.label || `Nodo ${nodo.id}`;
        selectNodo.appendChild(option);
    });

    formulario.style.display = 'block';
}

function guardarPosicionIndividual() {
    const id = parseInt(document.getElementById('nodoSelect').value);
    const x = parseFloat(document.getElementById('posX').value);
    const y = parseFloat(document.getElementById('posY').value);
    /*Nodo Nodo 1: (600, 300)
    Nodo Nodo 2: (600, -230)
    Nodo Nodo 3: (-400, -230)
    Nodo Nodo 4: (-400, 300)*/ 
    if((x<600 && x>-400)&& (y<300 && y>-230)){
        if (!isNaN(id) && !isNaN(x) && !isNaN(y)) {
            nodosDataSet.update({ id: id, x: x, y: y });
            calcularBaricentro(); 
        }
    }else{
        alert('Los valores ingresados superan el lienzo');
    }
 

    document.getElementById('formPosicionIndividual').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', inicializarGrafo);
