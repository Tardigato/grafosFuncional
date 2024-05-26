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
  generarTablaCostos();
  generarNorthwestSolucion();
}

function generarTablaCostos() {  //Esto es para que el usuario vea su tabla de costos
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
  document.getElementById('matriz_costos').innerHTML = tablaHTML;
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

  // Crear la tabla para mostrar la solución
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
  document.getElementById('northwest').innerHTML = tablaHTML;
}

function voguel_max(){
  generarTablaCostos();
  generarVoguelMax();
}

function voguel_min(){
  generarTablaCostos();
  generarVoguelMin();
}


function generarVoguelMin() {
  console.log("Voguel Minimo seleccionado");
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

  // Aplicar el método de Voguel para minimización
  while (ofertas.some(oferta => oferta > 0) && demandas.some(demanda => demanda > 0)) {
    // Calcular penalizaciones
    let penalizacionesFilas = ofertas.map((_, i) => calcularPenalizacion(costos[i]));
    let penalizacionesColumnas = demandas.map((_, j) => calcularPenalizacion(costos.map(fila => fila[j])));

    // Encontrar la mayor penalización
    let maxPenalizacion = Math.max(...penalizacionesFilas, ...penalizacionesColumnas);
    let maxIndice;
    let esFila = false;

    if (penalizacionesFilas.includes(maxPenalizacion)) {
      esFila = true;
      maxIndice = penalizacionesFilas.indexOf(maxPenalizacion);
    } else {
      maxIndice = penalizacionesColumnas.indexOf(maxPenalizacion);
    }

    // Asignar demanda y oferta
    if (esFila) {
      let j = costos[maxIndice].indexOf(Math.min(...costos[maxIndice]));
      if (ofertas[maxIndice] <= demandas[j]) {
        solucion[maxIndice][j] = ofertas[maxIndice];
        demandas[j] -= ofertas[maxIndice];
        ofertas[maxIndice] = 0;
      } else {
        solucion[maxIndice][j] = demandas[j];
        ofertas[maxIndice] -= demandas[j];
        demandas[j] = 0;
      }
    } else {
      let i = costos.map(fila => fila[maxIndice]).indexOf(Math.min(...costos.map(fila => fila[maxIndice])));
      if (ofertas[i] <= demandas[maxIndice]) {
        solucion[i][maxIndice] = ofertas[i];
        demandas[maxIndice] -= ofertas[i];
        ofertas[i] = 0;
      } else {
        solucion[i][maxIndice] = demandas[maxIndice];
        ofertas[i] -= demandas[maxIndice];
        demandas[maxIndice] = 0;
      }
    }
  }

  // Crear la tabla para mostrar la solución
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
  document.getElementById('voguel_min').innerHTML = tablaHTML;
}

function calcularPenalizacion(costos) {
  let min1 = Infinity, min2 = Infinity;
  for (let costo of costos) {
    if (costo < min1) {
      min2 = min1;
      min1 = costo;
    } else if (costo < min2) {
      min2 = costo;
    }
  }
  return min2 - min1;
}

function generarVoguelMax() {
  console.log("Voguel Maximo seleccionado");
  const nodos = nodosDataSet.get();
  const origenes = nodos.filter(nodo => nodo.label.startsWith('O'));
  const destinos = nodos.filter(nodo => nodo.label.startsWith('D'));

  // Crear una matriz de costos y obtener las ofertas y demandas
  let costos = [];
  let ofertas = [];
  let demandas = [];
  console.log("Mensaje2 para comprobar donde falla");

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

  console.log("Mensaje fuera del 1er bucle para comprobar donde falla (bucle de origenes)");


  destinos.forEach(destino => {
    demandas.push(parseInt(destino.demanda));
  });
  console.log("Mensaje fuera del 2er bucle para comprobar donde falla (bucle de destinos)");


  // Matriz de solución inicializada en ceros
  let solucion = Array(origenes.length).fill().map(() => Array(destinos.length).fill(0));

  // Aplicar el método de Voguel para maximización
  while (ofertas.some(oferta => oferta > 0) && demandas.some(demanda => demanda > 0)) {
    // Calcular penalizaciones
    let penalizacionesFilas = ofertas.map((_, i) => calcularPenalizacionMax(costos[i]));
    let penalizacionesColumnas = demandas.map((_, j) => calcularPenalizacionMax(costos.map(fila => fila[j])));

    // Encontrar la mayor penalización
    let maxPenalizacion = Math.max(...penalizacionesFilas, ...penalizacionesColumnas);
    let maxIndice;
    let esFila = false;

    if (penalizacionesFilas.includes(maxPenalizacion)) {
      esFila = true;
      maxIndice = penalizacionesFilas.indexOf(maxPenalizacion);
    } else {
      maxIndice = penalizacionesColumnas.indexOf(maxPenalizacion);
    }

    // Asignar demanda y oferta
    if (esFila) {
      let j = costos[maxIndice].indexOf(Math.max(...costos[maxIndice]));
      if (ofertas[maxIndice] <= demandas[j]) {
        solucion[maxIndice][j] = ofertas[maxIndice];
        demandas[j] -= ofertas[maxIndice];
        ofertas[maxIndice] = 0;
      } else {
        solucion[maxIndice][j] = demandas[j];
        ofertas[maxIndice] -= demandas[j];
        demandas[j] = 0;
      }
    } else {
      let i = costos.map(fila => fila[maxIndice]).indexOf(Math.max(...costos.map(fila => fila[maxIndice])));
      if (ofertas[i] <= demandas[maxIndice]) {
        solucion[i][maxIndice] = ofertas[i];
        demandas[maxIndice] -= ofertas[i];
        ofertas[i] = 0;
      } else {
        solucion[i][maxIndice] = demandas[maxIndice];
        ofertas[i] -= demandas[maxIndice];
        demandas[maxIndice] = 0;
      }
    }
  }

  // Crear la tabla para mostrar la solución
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
  document.getElementById('voguel_max').innerHTML = tablaHTML;
}

function calcularPenalizacionMax(costos) {
  let max1 = -Infinity, max2 = -Infinity;
  for (let costo of costos) {
    if (costo > max1) {
      max2 = max1;
      max1 = costo;
    } else if (costo > max2) {
      max2 = costo;
    }
  }
  return max1 - max2;
}
