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
      nodosDataSet.add({ id: nuevoId, label: `O${contadorOrigen}: ${ofertaNodo}`, nombre: `O${contadorOrigen}`, x: position.x, y: position.y, oferta: ofertaNodo }); //label se muestra en el lienzo y nombre es para generar la tabla de northwest
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
      nodosDataSet.add({ id: nuevoId, label: `D${contadorDestino}: ${demandaNodo}`, nombre: `D${contadorDestino}`, x: position.x, y: position.y, demanda: demandaNodo });
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

/// DESDE AQUÍ TODO LO PROPIO DE NORTHWEST
let eleccion = 0;
let matriz_1ra_iteracion;
let matriz_optima;
let cont_it = 0;

function mostrarSeleccion() { //solo para ver si está o no seleccionado
  if (eleccion == 1)
    console.log("MÁXIMO");
  else
    console.log("MÍNIMO");
}

function cambiarSeleccion(valor) {
  eleccion = valor;
  mostrarSeleccion(); // Llama a esta función para mostrar la selección actual
}

// Función para clonar una matriz
function clonarMatriz(matriz) {
  return matriz.map(fila => fila.slice());
}

function noroeste() {
  generarTablaNorthwest();
  generarNorthwestSolucion();
  optimizarTransporte();
  console.log("Total iteraciones: " + cont_it)
}

function generarTablaNorthwest() {  //Esto es para que el usuario vea su tabla de costos
  const nodos = nodosDataSet.get();
  const origenes = nodos.filter(nodo => nodo.label.startsWith('O'));
  const destinos = nodos.filter(nodo => nodo.label.startsWith('D'));

  // Crear la tabla
  let tablaHTML = '<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">';

  // Crear la fila de encabezado
  tablaHTML += '<tr><th></th>';
  destinos.forEach(destino => {
    tablaHTML += `<th>${destino.nombre}</th>`;
  });
  tablaHTML += '<th>Oferta</th></tr>';

  // Crear las filas de origen
  origenes.forEach(origen => {
    tablaHTML += `<tr><th>${origen.nombre}</th>`;
    destinos.forEach(destino => {
      const arista = aristasDataSet.get({
        filter: edge => edge.from === origen.id && edge.to === destino.id
      });
      let valor = '0';
      if (arista.length > 0) {
        valor = arista[0].label || '0';
      }
      tablaHTML += `<td contenteditable="true">${valor}</td>`;
    });
    tablaHTML += `<td>${origen.oferta}</td></tr>`;
  });

  // Crear la fila de demanda
  tablaHTML += '<tr><th>Demanda</th>';
  destinos.forEach(destino => {
    tablaHTML += `<td>${destino.demanda}</td>`;
  });
  tablaHTML += '<td></td></tr>';

  tablaHTML += '</table>';

  // Mostrar la tabla en el contenedor
  document.getElementById('northwest_usuario').innerHTML = tablaHTML;
}

function generarNorthwestSolucion() {
  const nodos = nodosDataSet.get();
  const origenes = nodos.filter(nodo => nodo.label.startsWith('O'));
  const destinos = nodos.filter(nodo => nodo.label.startsWith('D'));

  // Crear una matriz de costos y obtener las ofertas y demandas
  let costos = [];
  let ofertas = [];
  let demandas = [];

  origenes.forEach(origen => {
    let filaCostos = [];
    destinos.forEach(destino => {
      const arista = aristasDataSet.get({
        filter: edge => edge.from === origen.id && edge.to === destino.id
      });
      let valor = 0;
      if (arista.length > 0) {
        valor = parseInt(arista[0].label || '0');
      }
      filaCostos.push(valor);
    });
    costos.push(filaCostos);
    ofertas.push(parseInt(origen.oferta));
  });

  destinos.forEach(destino => {
    demandas.push(parseInt(destino.demanda));
  });

  // Matriz de solución inicializada en ceros
  let solucion = Array(origenes.length).fill().map(() => Array(destinos.length).fill(0));

  // Aplicar el método de la Esquina Noroeste
  let i = 0;
  let j = 0;
  while (i < ofertas.length && j < demandas.length) {
    if (ofertas[i] < demandas[j]) {
      solucion[i][j] = ofertas[i];
      demandas[j] -= ofertas[i];
      ofertas[i] = 0;
      i++;
    } else {
      solucion[i][j] = demandas[j];
      ofertas[i] -= demandas[j];
      demandas[j] = 0;
      j++;
    }
  }

  // Mostrar la solución inicial
  mostrarSolucionInicial(solucion, origenes, destinos);

  // Almacenar la solución y costos para la optimización
  window.solucionInicial = solucion;
  window.costos = costos;
  window.origenes = origenes;
  window.destinos = destinos;
}

function mostrarSolucionInicial(solucion, origenes, destinos) {
  // Crear la tabla para mostrar la solución inicial
  let tablaHTML = '<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">';

  // Crear la fila de encabezado
  tablaHTML += '<tr><th></th>';
  destinos.forEach(destino => {
    tablaHTML += `<th>${destino.nombre}</th>`;
  });
  tablaHTML += '<th>Oferta</th></tr>';

  // Crear las filas de solución
  origenes.forEach((origen, i) => {
    tablaHTML += `<tr><th>${origen.nombre}</th>`;
    destinos.forEach((destino, j) => {
      tablaHTML += `<td>${solucion[i][j]}</td>`;
    });
    tablaHTML += `<td>${origen.oferta}</td></tr>`;
  });

  // Crear la fila de demanda
  tablaHTML += '<tr><th>Demanda</th>';
  destinos.forEach(destino => {
    tablaHTML += `<td>${destino.demanda}</td>`;
  });
  tablaHTML += '<td></td></tr>';

  tablaHTML += '</table>';

  // Mostrar la tabla en el contenedor
  document.getElementById('northwest_solucion').innerHTML = tablaHTML;
}

function mostrarSolucionOptima(solucion, origenes, destinos) {
  // Crear la tabla para mostrar la solución optimizada
  let tablaHTML = '<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">';

  // Crear la fila de encabezado
  tablaHTML += '<tr><th></th>';
  destinos.forEach(destino => {
    tablaHTML += `<th>${destino.nombre}</th>`;
  });
  tablaHTML += '<th>Oferta</th></tr>';

  // Crear las filas de solución
  origenes.forEach((origen, i) => {
    tablaHTML += `<tr><th>${origen.nombre}</th>`;
    destinos.forEach((destino, j) => {
      tablaHTML += `<td>${solucion[i][j]}</td>`;
    });
    tablaHTML += `<td>${origen.oferta}</td></tr>`;
  });

  // Crear la fila de demanda
  tablaHTML += '<tr><th>Demanda</th>';
  destinos.forEach(destino => {
    tablaHTML += `<td>${destino.demanda}</td>`;
  });
  tablaHTML += '<td></td></tr>';

  tablaHTML += '</table>';

  // Mostrar la tabla en el contenedor
  document.getElementById('northwest_final').innerHTML = tablaHTML;
}

function optimizarTransporte() {
  let solucion = window.solucionInicial;
  let costos = window.costos;
  let origenes = window.origenes;
  let destinos = window.destinos;

  let u = new Array(origenes.length).fill(null);
  let v = new Array(destinos.length).fill(null);
  u[0] = 0;

  // Método MODI para calcular u y v
  while (true) {
    let cambios = false;

    for (let i = 0; i < origenes.length; i++) {
      for (let j = 0; j < destinos.length; j++) {
        if (solucion[i][j] !== 0) {
          if (u[i] !== null && v[j] === null) {
            v[j] = costos[i][j] - u[i];
            cambios = true;
          } else if (u[i] === null && v[j] !== null) {
            u[i] = costos[i][j] - v[j];
            cambios = true;
          }
        }
      }
    }

    console.log("u:", u);
    console.log("v:", v);

    if (!cambios) {
      break;
    }
  }

  // Calcular las diferencias
  let difs = Array.from(Array(origenes.length), () => new Array(destinos.length).fill(null));
  for (let i = 0; i < origenes.length; i++) {
    for (let j = 0; j < destinos.length; j++) {
      if (solucion[i][j] === 0) {
        difs[i][j] = costos[i][j] - (u[i] + v[j]);
      }
    }
  }

  console.log("Diferencias:", difs);

  // Encontrar el máximo o mínimo de las diferencias
  let optimo = eleccion === 1 ? -Infinity : Infinity;
  let coord = [-1, -1];
  for (let i = 0; i < origenes.length; i++) {
    for (let j = 0; j < destinos.length; j++) {
      if (difs[i][j] !== null) {
        if ((eleccion === 1 && difs[i][j] > optimo) || (eleccion === 0 && difs[i][j] < optimo)) {
          optimo = difs[i][j];
          coord = [i, j];
        }
      }
    }
  }

  console.log("Óptimo encontrado:", optimo, "en coordenadas:", coord);

  // Si todas las diferencias son positivas, la solución es óptima
  if ((eleccion === 1 && optimo <= 0) || (eleccion === 0 && optimo >= 0)) {
    mostrarSolucionOptima(solucion, origenes, destinos);
    return;
  }

  // Realizar la mejora en el ciclo cerrado
  const [ii, jj] = coord;
  let camino = [[ii, jj]];
  let buscando = 'fila';

  while (true) {
    if (buscando === 'fila') {
      let siguiente = camino[camino.length - 1][1];
      for (let i = 0; i < origenes.length; i++) {
        if (i !== camino[camino.length - 1][0] && solucion[i][siguiente] !== 0) {
          camino.push([i, siguiente]);
          buscando = 'columna';
          break;
        }
      }
    } else {
      let siguiente = camino[camino.length - 1][0];
      for (let j = 0; j < destinos.length; j++) {
        if (j !== camino[camino.length - 1][1] && solucion[siguiente][j] !== 0) {
          camino.push([siguiente, j]);
          buscando = 'fila';
          break;
        }
      }
    }

    if (camino[camino.length - 1][0] === ii && camino[camino.length - 1][1] === jj) {
      break;
    }
  }

  console.log("Camino cerrado:", camino);

  let delta = Infinity;
  for (let k = 1; k < camino.length; k += 2) {
    const [i, j] = camino[k];
    delta = Math.min(delta, solucion[i][j]);
  }

  console.log("Delta para el ajuste:", delta);

  for (let k = 0; k < camino.length; k++) {
    const [i, j] = camino[k];
    if (k % 2 === 0) {
      solucion[i][j] += delta;
    } else {
      solucion[i][j] -= delta;
    }
  }

  // Actualizar la solución inicial con la optimizada para la siguiente iteración
  window.solucionInicial = clonarMatriz(solucion);

  console.log("Solución después del ajuste:", solucion);
  cont_it++;

  // Continuar la optimización
  optimizarTransporte();
}
