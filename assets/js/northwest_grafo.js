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
//matriz_costos_auxiliar = [];

function noroeste_max() {
  generarTablaCostos();
  //generarNorthwestSolucionMax();
  //doAlgorithm();
}

function noroeste_min() {
  generarTablaCostos();
  //generarNorthwestSolucionMin();
  //doAlgorithm();
}

function generarTablaCostos() {
  matriz_costos_auxiliar = [];
  
  const nodos = nodosDataSet.get();
  const origenes = nodos.filter(nodo => nodo.label.startsWith('O'));
  const destinos = nodos.filter(nodo => nodo.label.startsWith('D'));

  // Crear la tabla HTML
  let tablaHTML = '<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">';

  // Crear la fila de encabezado
  tablaHTML += '<tr><th></th>';
  destinos.forEach(destino => {
    tablaHTML += `<th>${destino.nombre}</th>`;
  });
  tablaHTML += '<th>Oferta</th></tr>';

  // Crear las filas de origen
  origenes.forEach((origen, i) => {
    tablaHTML += `<tr><th>${origen.nombre}</th>`;
    let fila_costos = [];
    destinos.forEach((destino, j) => {
      const arista = aristasDataSet.get({
        filter: edge => edge.from === origen.id && edge.to === destino.id
      });
      let valor = '0';
      if (arista.length > 0) {
        valor = arista[0].label || '0';
      }
      tablaHTML += `<td contenteditable="true">${valor}</td>`;
      fila_costos.push(parseInt(valor, 10));
    });
    fila_costos.push(parseInt(origen.oferta, 10)); // Agregar la oferta al final de la fila
    matriz_costos_auxiliar.push(fila_costos);
    tablaHTML += `<td>${origen.oferta}</td></tr>`;
  });

  // Crear la fila de demanda
  let fila_demanda = [];
  tablaHTML += '<tr><th>Demanda</th>';
  destinos.forEach(destino => {
    tablaHTML += `<td>${destino.demanda}</td>`;
    fila_demanda.push(parseInt(destino.demanda, 10));
  });
  fila_demanda.push(0); // Agregar un 0 al final para ajustar la matriz
  matriz_costos_auxiliar.push(fila_demanda);
  tablaHTML += '<td></td></tr>';

  tablaHTML += '</table>';

  // Mostrar la tabla en el contenedor
  document.getElementById('matriz_costos').innerHTML = tablaHTML;

  console.log("Matriz de costos auxiliar:", matriz_costos_auxiliar);
  doAlgorithm(matriz_costos_auxiliar);
}


function generarNorthwestSolucion1() { //Este sólo es una iteración, aún no es la respuesta final
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
  document.getElementById('northwest1').innerHTML = tablaHTML;
}

function generarNorthwestSolucionMin() {
  const nodos = nodosDataSet.get();
  const origenes = nodos.filter(nodo => nodo.label.startsWith('O'));
  const destinos = nodos.filter(nodo => nodo.label.startsWith('D'));

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

  let solucion = Array(origenes.length).fill().map(() => Array(destinos.length).fill(0));

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

  mostrarSolucion(solucion, origenes, destinos, 'northwest1');
}

function generarNorthwestSolucionMax() {
  const nodos = nodosDataSet.get();
  const origenes = nodos.filter(nodo => nodo.label.startsWith('O'));
  const destinos = nodos.filter(nodo => nodo.label.startsWith('D'));

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

  let solucion = Array(origenes.length).fill().map(() => Array(destinos.length).fill(0));

  let i = 0;
  let j = 0;
  while (i < ofertas.length && j < demandas.length) {
    if (ofertas[i] > demandas[j]) {
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

  mostrarSolucion(solucion, origenes, destinos, 'northwest1');
}

function mostrarSolucion(solucion, origenes, destinos, elementoId) {
  let tablaHTML = '<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">';

  tablaHTML += '<tr><th></th>';
  destinos.forEach(destino => {
      tablaHTML += `<th>${destino.nombre}</th>`;
  });
  tablaHTML += '<th>Oferta</th></tr>';

  let costoTotal = 0;

  origenes.forEach((origen, i) => {
      tablaHTML += `<tr><th>${origen.nombre}</th>`;
      destinos.forEach((destino, j) => {
          tablaHTML += `<td>${solucion[i][j]}</td>`;
          costoTotal += solucion[i][j] * parseInt(aristasDataSet.get({
            filter: edge => edge.from === origen.id && edge.to === destino.id
          })[0].label);
      });
      tablaHTML += `<td>${origen.oferta}</td></tr>`;
  });

  tablaHTML += '<tr><th>Demanda</th>';
  destinos.forEach(destino => {
      tablaHTML += `<td>${destino.demanda}</td>`;
  });
  tablaHTML += '<td></td></tr>';

  tablaHTML += '</table>';

  document.getElementById(elementoId).innerHTML = tablaHTML + `<p>Costo Total: ${costoTotal}</p>`;
}



//VOGEL, por si acaso, no funcione :(
function voguel_max(){
  generarTablaCostos();
  generarVoguelMax();
}

function voguel_min(){
  generarTablaCostos();
  generarVoguelMin();
}


//CODIGO AYANA
// Define the Matrix object
let savedMatrix;

// Modify the Matrix constructor to initialize rows and cols
function Matrix(rows, cols) {
    this.r = rows;
    this.c = cols;
    // Initialize other properties as needed
    this.cost = [];
    this.units = [];
    this.imp = [];
    this.stones = [];
    this.s = [];
    this.d = [];
    this.shadowD = [];
    this.shadowS = [];

    // Initialize matrix arrays
    for (var i = 0; i < rows; i++) {
        this.cost[i] = [];
        this.units[i] = [];
        this.imp[i] = [];
        this.stones[i] = [];
        for (var j = 0; j < cols; j++) {
            this.cost[i][j] = 0;
            this.units[i][j] = 'X';
            this.imp[i][j] = 'X';
            this.stones[i][j] = 'X';
        }
    }
    // Initialize supply and demand arrays
    for (var i = 0; i < rows; i++) {
        this.s[i] = 0;
        this.shadowS[i] = 'X';
    }
    for (var j = 0; j < cols; j++) {
        this.d[j] = 0;
        this.shadowD[j] = 'X';
    }
}

// Modify the extractMatrixDataFromForm function to pass rows and cols to the Matrix constructor
function extractMatrixDataFromForm() {
    // Extract data from the form inputs
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);

    // Initialize a new Matrix object with rows and cols
    var matrix = new Matrix(rows, cols);

    // Populate the matrix with data from the form inputs
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cellValue = parseInt(document.getElementById("cell_" + i + "_" + j).value);
            matrix.cost[i][j] = cellValue; // Use matrix.cost instead of direct assignment
        }
    }

    // Return the populated matrix
    return matrix;
}


// Function to save the graph
function guardarGrafo(matrix) {
    // Prompt user for file name
    const nombreArchivo = prompt('Por favor, ingresa un nombre para guardar el grafo:', 'grafo');

    // Check if user canceled prompt
    if (nombreArchivo !== null) {
        // Log the matrix data before conversion to JSON
        console.log('Matrix data before conversion to JSON:', matrix);

        // Extract relevant matrix data
        const matrixData = {
            rows: matrix.r,
            cols: matrix.c,
            cost: matrix.cost,
            units: matrix.units,
            imp: matrix.imp,
            stones: matrix.stones,
            s: matrix.s,
            d: matrix.d,
            shadowD: matrix.shadowD,
            shadowS: matrix.shadowS
        };

        // Log the extracted matrix data
        console.log('Extracted matrix data:', matrixData);

        // Convert matrix data to JSON
        const grafoJSON = JSON.stringify({ matrix: matrixData });

        // Log the JSON data before creating Blob
        console.log('JSON data:', grafoJSON);

        // Create Blob from JSON data
        const blob = new Blob([grafoJSON], { type: 'application/json' });

        // Create object URL from Blob
        const url = URL.createObjectURL(blob);

        // Create a link element to trigger download
        const a = document.createElement('a');
        a.href = url;
        a.download = nombreArchivo + '.json';

        // Append link element to document body
        document.body.appendChild(a);

        // Trigger download by clicking the link
        a.click();

        // Remove link element from document body
        document.body.removeChild(a);

        // Revoke object URL to release resources
        URL.revokeObjectURL(url);
    }
}




// Define cols in a scope accessible to both the event listeners and the functions
let cols = 0; // Default value, can be overridden later

// Add event listener to doAlgorithm button
document.getElementById('doAlgorithm2').addEventListener('click', function() {
    console.log("Minimizar button clicked.");
    console.log("Data sent to doAlgorithm2:", savedMatrix);
    // Call the doAlgorithm2 function with savedMatrix as a parameter
    doAlgorithm2(savedMatrix);
});


document.getElementById('moAlgorithm2').addEventListener('click', function() {
    console.log("Maximizar button clicked.");
    console.log("Data sent to moAlgorithm2:", matrix);
    // Call the moAlgorithm2 function
    moAlgorithm2(matrix);
});

function setColsValue(value) {
    cols = value;
}

function makeForm2(matrix) {
    // Log that the function is being called
    console.log("makeForm function is being called");
    console.log("makeForm2 function is being called");
    console.log("Data received in makeForm2:", matrix);
    
    if (!matrix || !matrix.cost || !matrix.s || !matrix.d) {
        console.error("Invalid matrix data:", matrix);
        return;
    }

    // Clear divs from any previous call
    document.getElementById('findOptimal').innerHTML = '';
    
    // Extracting rows and cols from the matrix object
    var rows = matrix.rows;
    setColsValue(matrix.cols); // Set the value of cols using the function

    // Log the received matrix data to the console
    console.log("Data received in makeForm:", matrix);
    
  
    var savedMatrix = new Matrix(rows, cols); // Use cols instead of matrix.cols
savedMatrix.cols = cols; // Set the cols property in savedMatrix

    
    // Populate the Matrix object with data from the matrix parameter
    savedMatrix.cost = matrix.cost;
    savedMatrix.s = matrix.s;
    savedMatrix.d = matrix.d;
    console.log("Data to send:", savedMatrix);

    // Log the form HTML that will be added to formSpace
    var formString = '<p>Ingrese los costos, las demandas y las ofertas en la matriz. (Nota tiene que estar balanciado para poder continuar.)</p>';
    formString += '<form name="networkForm" onsubmit="return false">';
    formString += '<table class="other">';
    formString += '<tr><td></td>'; // Blank first cell
    for(var j = 0; j < cols; j++){ // Use cols instead of matrix.cols
        formString += '<td>' + String.fromCharCode(j + 16 + 64) + '</td>';
    }
    formString += '<td>Oferta</td>';
    formString += '</tr>';
    for(var i = 0; i < rows; i++){
        formString += '<tr>';
        formString += '<td>' + String.fromCharCode(i + 1 + 64) + '</td>';
        for(var j = 0; j < cols; j++){ // Use cols instead of matrix.cols
            formString += '<td><input type="text" style="width:30px;" id="cell_' + i + '_' + j + '" value="' + savedMatrix.cost[i][j] + '"></td>';
        }
        // Add input field for oferta in each row
        formString += '<td><input type="text" style="width:30px;" id="oferta_' + i + '" value="' + savedMatrix.s[i] + '"></td>';
        formString += '</tr>';
    }
    formString += '<tr><td>Demanda</td>';
    for(var j = 0; j < cols; j++){ // Use cols instead of matrix.cols
        formString += '<td><input type="text" style="width:30px;" id="demand_' + j + '" value="' + savedMatrix.d[j] + '"></td>';
    }
    formString += '</tr></table></form>';
    formString += '<button type="button" id="doAlgorithm2" onclick="doAlgorithm2(savedMatrix)">Minimizar</button>';
    formString += '<button type="button" id="moAlgorithm2" onclick="moAlgorithm2(matrix)">Maximizar</button>';
    formString += '</div>';

    // Log the form HTML that will be added to formSpace
    console.log("Form HTML to be added to formSpace:", formString);

    // Add the generated form HTML to formSpace
    document.getElementById('formSpace').innerHTML = formString;

    // Add event listener to the guardarGrafoBtn
    document.getElementById('guardarGrafoBtn').addEventListener('click', function() {
        // Retrieve and save the cost values
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) { // Use cols instead of matrix.cols
                var cellValue = parseInt(document.getElementById("cell_" + i + "_" + j).value);
                savedMatrix.cost[i][j] = cellValue;
            }
            // Retrieve and save the oferta values
            var ofertaValue = parseInt(document.getElementById("oferta_" + i).value);
            savedMatrix.s[i] = ofertaValue;
        }
        
        // Retrieve and save the demand values
        for(var j = 0; j < cols; j++){ // Use cols instead of matrix.cols
            var demandValue = parseInt(document.getElementById("demand_" + j).value);
            savedMatrix.d[j] = demandValue;
        }
        
        // Call the guardarGrafo function
        guardarGrafo(savedMatrix);
    });
}

function getValuesFromMatrix2(matrix) {
    try {
        // Ensure proper scoping of variables
        let rows = matrix.rows;
        let cols = matrix.cols;
        let m = new Matrix(rows, cols); // Assuming Matrix is a constructor function

        // Loop through each cell in the matrix
        for (let i = 0; i < m.r; i++) {
            for (let j = 0; j < m.c; j++) {
                // Parse cell value and handle empty values
                let cellValue = parseFloat(matrix.cost[i][j]) || 0;
                m.cost[i][j] = Math.abs(cellValue);
            }
            // Parse supply values and handle empty values
            let supplyValue = parseFloat(matrix.s[i]) || 0;
            m.s[i] = Math.abs(supplyValue);
        }

        // Handle demand values
        for (let j = 0; j < m.c; j++) {
            // Parse demand value and handle empty values
            let demandValue = parseFloat(matrix.d[j]) || 0;
            m.d[j] = Math.abs(demandValue);
        }

        // Validate entries and balance supply and demand
        let checkTot = 0;
        for (let i = 0; i < m.r; i++) {
            checkTot += m.s[i];
        }
        for (let j = 0; j < m.c; j++) {
            checkTot -= m.d[j];
        }
        if (checkTot !== 0) {
            // Provide a clearer error message
            document.getElementById('findOptimal').innerHTML = 'La oferta y la demanda deben estar balanceadas; por favor, ingrese de nuevo.';
            return [false, m];
        } else {
            return [true, m];
        }
    } catch (error) {
        console.error("Error in getValuesFromMatrix2:", error);
    }
}

function doAlgorithm2(matrix) {
    try {
        // Ensure matrix is defined and has the required properties
        if (!matrix || !matrix.cols) {
            console.error("Invalid matrix data:", matrix);
            return;
        }
        
        // Extracting 'cols' from the matrix object
        var cols = matrix.cols;
        console.log("Cols:", cols); // Log cols value
        // Clear output div when button is re-pressed
        document.getElementById('findOptimal').innerHTML = '';
        var matrixData = getValuesFromMatrix2(matrix);
        console.log("Matrix Data:", matrixData); // Log matrix data
        if (matrixData[0]) {
            var m = matrixData[1]; // Changed from 'm' to 'var m'
        } else {
            return; // In case matrix was not balanced
        }
        console.log("Initial Matrix:", m); // Log initial matrix
        m = northWest2(m);
        console.log("Matrix after Northwest Step:", m); // Log matrix after northwest step
        var optimal = false;
        var steppingStones = [];
        var cycleNumber = 1;
        var cycleString = '';
        var steppingStonesOKFlag = true;
        while (cycleNumber < 30 && !optimal && steppingStonesOKFlag) {
            // Clear shadow costs and improvement indices
            clearShadows(m);
            clearImps(m);
            if (cycleNumber === 1) {
                document.getElementById('findOptimal').innerHTML = ''; // Clearing previous iterations
            }
            cycleString = '';
            cycleString += '<div id="cycle' + cycleNumber + '">';

            cycleString += showMatrixUnits(m);
            console.log("Matrix after Show Matrix Units:", m); // Log matrix after show matrix units
            m.enteringCell = ['X', 'X'];
            shadowCosts(m);
            console.log("Matrix after Shadow Costs:", m); // Log matrix after shadow costs
            improvementIndices(m);
            console.log("Matrix after Improvement Indices:", m); // Log matrix after improvement indices
            if (m.enteringCell[0] != 'X') {
                cycleString += '<p>Esta solución no es óptima</p></div>';
            } else {
                cycleString += '<p>Tomó ' + cycleNumber + ' iteraciones para llegar al mínimo óptimo.</p></div>';
            }

            if (m.enteringCell[0] == 'X') {
                optimal = true;
            } else {
                steppingStones = findClosedPath(m);
                var counter = 0;
                while (!steppingStones[0] && counter < 200) {
                    steppingStones = findClosedPath(m);
                    counter++;
                }
                if (counter == 200 || !steppingStones[0]) {
                    steppingStonesOKFlag = false;
                    cycleString += '<p>No se encontró ninguna solución óptima en ' + cycleNumber + ' iteraciones.</p></div>';
                } else {
                    improvedAllocation(m, steppingStones[1]);
                    cycleNumber++;
                }
            }
        }
        document.getElementById('findOptimal').innerHTML += cycleString;
        if (cycleNumber == 30) {
            document.getElementById('findOptimal').innerHTML += '<p>No se encontró ninguna solución óptima dentro de ' + cycleNumber + ' iteraciones.</p>';
        }
    } catch (error) {
        console.error("Error in doAlgorithm2:", error);
    }
}

function moAlgorithm2(matrix) {
    try {
        // Clear output div when button is re-pressed
        document.getElementById('findOptimal').innerHTML = '';
        var matrixData = getValuesFromMatrix2(matrix);
        if (matrixData[0]) {
            var m = matrixData[1]; // Changed from 'm' to 'var m'
        } else {
            return; // In case matrix was not balanced
        }
        m = northWestm2(m);
        var optimal = false;
        var steppingStones = [];
        var cycleNumber = 1;
        var cycleString = '';
        var steppingStonesOKFlag = true;
        while (cycleNumber < 30 && !optimal && steppingStonesOKFlag) {
            // Clear shadow costs and improvement indices
            clearShadows(m);
            clearImps(m);
            if (cycleNumber === 1) {
                document.getElementById('findOptimal').innerHTML = ''; // Clearing previous iterations
            }
            cycleString = '';
            cycleString += '<div id="cycle' + cycleNumber + '">';

            cycleString += showMatrixUnits(m);
            m.enteringCell = ['X', 'X'];
            shadowCosts(m);
            improvementIndicesm(m);
            if (m.enteringCell[0] != 'X') {
                cycleString += '<p>Esta solución no es óptima</p></div>';
            } else {
                cycleString += '<p>Tomó ' + cycleNumber + ' iteraciones para llegar al óptimo máximo.</p></div>';
            }

            if (m.enteringCell[0] == 'X') {
                optimal = true;
            } else {
                steppingStones = findClosedPath(m);
                var counter = 0;
                while (!steppingStones[0] && counter < 200) {
                    steppingStones = findClosedPath(m);
                    counter++;
                }
                if (counter == 200 || !steppingStones[0]) {
                    steppingStonesOKFlag = false;
                    cycleString += '<p>No se encontró una ruta óptima en ' + cycleNumber + ' iteraciones.</p></div>';
                } else {
                    improvedAllocationm(m, steppingStones[1]);
                    cycleNumber++;
                }
            }
        }
        document.getElementById('findOptimal').innerHTML += cycleString;
        if (cycleNumber == 30) {
            document.getElementById('findOptimal').innerHTML += '<p>No se encontró una ruta óptima dentro de ' + cycleNumber + ' iteraciones.</p>';
        }
    } catch (error) {
        console.error("Error in moAlgorithm2:", error);
    }
}





function northWest2(m){
    var nextij = [0,0];
    var supply = m.s.slice(0);
    var demand = m.d.slice(0);
    var n = northWestStep2(m, 0, 0);
    for(var i = 1; i < m.r+m.c-1; i++){
        n = northWestStep2(n[0], n[1][0], n[1][1]);
    }
    m.s = supply;
    m.d = demand;
    return m;
}

function northWestm2(m){
    var nextij = [0, 0];
    var supply = m.s.slice(0);
    var demand = m.d.slice(0);
    var n = northWestStepm2(m, 0, 0);
    for (var i = 1; i < m.r + m.c - 1; i++) {
        n = northWestStepm2(n[0], n[1][0], n[1][1]);
    }
    m.s = supply;
    m.d = demand;
    return m;
}

function northWestStep2(m, i, j) {
    // Northwest corner method to find initial solution
    var nextij = [];
    // Check if the matrix has valid dimensions
    if (i < m.r && j < m.c) {
        m.units[i][j] = Math.min(m.s[i], m.d[j]); // Minimize the allocation based on supply and demand
        if (m.s[i] < m.d[j]) {
            // Next square is down
            m.d[j] -= m.units[i][j]; // Reduce the demand accordingly
            m.s[i] = 0;
            nextij = [i + 1, j];
        } else {
            // Next square is across
            m.s[i] -= m.units[i][j]; // Reduce the supply accordingly
            m.d[j] = 0;
            nextij = [i, j + 1];
        }
    }
    return [m, nextij];
}

function northWestStepm2(m, i, j) {
    // Northwest corner method to find initial solution
    var nextij = [];
    // Check if the matrix has valid dimensions
    if (i < m.r && j < m.c) {
        m.units[i][j] = Math.min(m.s[i], m.d[j]); // Minimize the allocation based on supply and demand
        if (m.s[i] < m.d[j]) {
            // Next square is down
            m.d[j] -= m.units[i][j]; // Reduce the demand accordingly
            m.s[i] = 0;
            nextij = [i + 1, j];
        } else {
            // Next square is across
            m.s[i] -= m.units[i][j]; // Reduce the supply accordingly
            m.d[j] = 0;
            nextij = [i, j + 1];
        }
    }
    return [m, nextij];
}







//---------------------------------------------------





function matrix(rows, cols){
	this.r = rows;
	this.c = cols;
	this.cost = [];//transportation costs
	this.units = [];//number of units to transport
	this.imp = [];//improvement indices
	this.stones = [];//for stepping stone algorithm list
	this.s = [];//supply
	this.d = [];//demand
	this.shadowD = [];//shadow costs above matrix
	this.shadowS = [];//shadow costs to left of matrix
	this.enteringCell = ['X','X'];//entering cell indicated blank like this
	for(var i = 0; i < rows; i++){
		this.cost[i] = [];
		this.units[i] = [];
		this.imp[i] = [];
		this.stones[i] = [];
		for(var j = 0; j < cols; j++){
			this.cost[i][j] = 0;
			this.units[i][j] = 'X';
			this.imp[i][j] = 'X';
			this.stones[i][j] = 'X';
		}
	}
	for(var i = 0; i < rows; i++){
		this.s[i] = 0;//supply
		this.shadowS[i] = 'X';
	}
	for(var j = 0; j < cols; j++){
		this.d[j] = 0;//demand	
		this.shadowD[j] = 'X';
	}
}


function makeForm(){
    // Clear divs from any previous call
    document.getElementById('findOptimal').innerHTML = '';
    var rows = Math.abs(parseInt(document.sizeForm.rowValue.value)) || 5;
    var cols = Math.abs(parseInt(document.sizeForm.colValue.value)) || 7;
    
    // Initialize a new Matrix object
    savedMatrix = new Matrix(rows, cols);

    var formString = '<p>Ingrese los costos, las demandas y las ofertas en la matriz. (Nota tiene que estar balanciado para poder continuar.)</p>';
    formString += '<form name="networkForm" onsubmit="return false">';
    formString += '<table class="other">';
    formString += '<tr><td></td>'; // Blank first cell
    for(var j = 0; j < cols; j++){
        formString += '<td>' + String.fromCharCode(j + 16 + 64) + '</td>';
    }
    formString += '<td>Oferta</td>';
    formString += '</tr>';
    for(var i = 0; i < rows; i++){
        formString += '<tr>';
        formString += '<td>' + String.fromCharCode(i + 1 + 64) + '</td>';
        for(var j = 0; j < cols; j++){
            formString += '<td><input type="text" style="width:30px;" id="cell_' + i + '_' + j + '" value=""></td>';
        }
        // Add input field for oferta in each row
        formString += '<td><input type="text" style="width:30px;" id="oferta_' + i + '" value=""></td>';
        formString += '</tr>';
    }
    formString += '<tr><td>Demanda</td>';
    for(var j = 0; j < cols; j++){
        formString += '<td><input type="text" style="width:30px;" id="demand_' + j + '" value=""></td>';
    }
    formString += '</tr></table></form>';
    formString += '<button type="button" id="doAlgorithm" onclick="doAlgorithm()">Minimizar</button>';
    formString += '<button type="button" id="moAlgorithm" onclick="moAlgorithm()">Maximizar</button>';
    formString += '</div>';

    document.getElementById('formSpace').innerHTML = formString;

    document.getElementById('guardarGrafoBtn').addEventListener('click', function() {
        // Retrieve and save the cost values
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var cellValue = parseInt(document.getElementById("cell_" + i + "_" + j).value);
                savedMatrix.cost[i][j] = cellValue;
            }
            // Retrieve and save the oferta values
            var ofertaValue = parseInt(document.getElementById("oferta_" + i).value);
            savedMatrix.s[i] = ofertaValue;
        }
        
        // Retrieve and save the demand values
        for(var j = 0; j < cols; j++){
            var demandValue = parseInt(document.getElementById("demand_" + j).value);
            savedMatrix.d[j] = demandValue;
        }
        
        // Call the guardarGrafo function
        guardarGrafo(savedMatrix);
    });
}

function getValuesFromMatrix(){
	//gets the values from the matrix defined by the user
	





	//after the function makeForm has acted
	//works and gets supply and demand amounts as separate arrays
	rows = Math.abs(parseInt(document.sizeForm.rowValue.value))||5;
	cols = Math.abs(parseInt(document.sizeForm.colValue.value))||7;
	m = new matrix(rows, cols);
	for(var i=0;i<m.r;i++){
		for(var j=0;j<m.c;j++){
			var counter=i*(m.c+1)+j;
			//uses zero as blank entry marker
			var x = parseInt(Math.random()*100);
			m.cost[i][j]=Math.abs(parseFloat(document.networkForm.elements[counter].value))||x;
			if (document.networkForm.elements[counter].value == "") {
				document.networkForm.elements[counter].value = x;
			}
		}
		m.s[i] = Math.abs(parseFloat(document.networkForm.elements[i*(m.c+1)+m.c].value))||100;
		if (document.networkForm.elements[i*(m.c+1)+m.c].value == "") {
			document.networkForm.elements[i*(m.c+1)+m.c].value = 100;
		}
	}
	for (var j = 0; j < m.c-1; j++) {
		m.d[j] = Math.abs(parseFloat(document.networkForm.elements[m.r*(m.c+1)+j].value))||parseInt((100*m.r)/m.c);
		if (document.networkForm.elements[m.r*(m.c+1)+j].value == "") {
			document.networkForm.elements[m.r*(m.c+1)+j].value = parseInt((100*m.r)/m.c);
		}
	}
	m.d[m.c-1] = Math.abs(parseFloat(document.networkForm.elements[m.r*(m.c+1)+m.c-1].value))||100*m.r-parseInt((100*m.r)/m.c)*(m.c-1);
	if (document.networkForm.elements[m.r*(m.c+1)+m.c-1].value == "") {
		document.networkForm.elements[m.r*(m.c+1)+m.c-1].value = 100*m.r-parseInt((100*m.r)/m.c)*(m.c-1);
	}
	//validate entries and deal with unbalanced
	var checkTot = 0;
	for (var i = 0; i < m.r; i++) {
		checkTot += m.s[i];
	}
	for (var j = 0; j < m.c; j++) {
		checkTot -= m.d[j];
	}
	if (checkTot != 0) {
		document.getElementById('findOptimal').innerHTML = 'La oferta y la demanda debe ser balanciada; ingrese denuevo Por favor';
		return [false, m];
	}
	else {
		return [true, m];
	}

	









}

function showMatrixCosts(m){
	//shows the matrix of transportation costs and supply and demand
	var mString = '<table>';
	for(var i = 0; i < m.r; i++){
		mString += '<tr>';
		for(var j = 0; j < m.c; j++){
			mString += '<td>'+m.cost[i][j]+'</td>';
		}
		mString += '<td>'+m.s[i]+'</td>';
		mString += '</tr>';
	}
	mString += '<tr>';
	for (var j = 0; j < m.c; j++) {
		mString += '<td>'+m.d[j]+'</td>';
	}
	mString += '</tr>';
	mString += '</table>';
	return mString;
}

function showMatrixUnits(m){
	//shows the matrix of units transported and supply and demand
	var tot = 0;
	var mString = '<table><tr><td></td>';//blank first cell
	for(var j=0;j<cols;j++){
		mString+='<td>'+String.fromCharCode(j+16+64)+'</td>';
	}
	for(var i = 0; i < m.r; i++){
		mString += '<tr>';
		mString+='<td>'+String.fromCharCode(i+1+64)+'</td>';
		for(var j = 0; j < m.c; j++){
			if (m.units[i][j] == 'X') {
				mString += '<td>-</td>';
			}
			else {
				mString += '<td>'+m.units[i][j]+'</td>';
				tot += m.units[i][j]*m.cost[i][j];
			}
		}
		mString += '<td>'+m.s[i]+'</td>';
		mString += '</tr>';
	}
	mString += '<tr><td></td>';
	for (var j = 0; j < m.c; j++) {
		mString += '<td>'+m.d[j]+'</td>';
	}
	mString += '</tr>';
	mString += '</table>';
	mString += '<p>El cost total es: '+tot+'</p>';
	return mString;
}

function showMatrixShadows(m){
	//shows the matrix of shadow costs alongside cost matrix
	var mString = '<p>Costo sombra</p>';	
	mString += '<table class="pequeno"><tr><td></td>';//blank first cell
		for(var j=0;j<cols;j++){
		mString+='<td>'+String.fromCharCode(j+16+64)+'</td>';
	}
	for(var i = 0; i < m.r; i++){
		mString += '<tr>';
		mString+='<td>'+String.fromCharCode(i+1+64)+'</td>';
		for(var j = 0; j < m.c; j++){
			if (m.units[i][j] == 'X') {
				mString += '<td>-</td>';
			}
			else {
				mString += '<td>'+m.cost[i][j]+'</td>';
			}
		}
		mString += '<td>'+m.shadowS[i]+'</td>';
		mString += '</tr>';
	}
	mString += '<tr><td></td>';
	for (var j = 0; j < m.c; j++) {
		mString += '<td>'+m.shadowD[j]+'</td>';
	}
	mString += '<td>Costo Sombra</td></tr>';
	mString += '</table>';
	return mString;
}

function showMatrixImps(m){
	//shows the matrix of improvement indices for unallocated cells
	//must call improvementIndices first for entering cell to be correctly identified
	mString = '<p>...</p>';	
	mString += '<table class="smaller"><tr><td></td>';//blank first cell
	for(var j=0;j<cols;j++){
		mString+='<td>'+String.fromCharCode(j+16+64)+'</td>';
	}
	for(var i = 0; i < m.r; i++){
		mString += '<tr>';
		mString+='<td>'+String.fromCharCode(i+1+64)+'</td>';
		for(var j = 0; j < m.c; j++){
			if (m.units[i][j] == 'X') {
				mString += '<td style="background-color: purple; color: white;">'+m.imp[i][j]+'</td>';
                

			}
			else {
				mString += '<td>-</td>';
			}
		}
		mString += '</tr>';
	}
	mString += '</table>';
	if (m.enteringCell[0] != 'X') {
		mString += '<p>La celda ingresada '+String.fromCharCode(m.enteringCell[0]+1+64)+String.fromCharCode(m.enteringCell[1]+16+64)+'</p>';
	}
	else {
		mString += '<p>Se llego a la solution mas optima</p>';
	}
	return mString;
}

function northWestStep(m, i, j){
	//north west corner method to find initial solution
	var nextij = [];
	m.units[i][j] = Math.min(m.s[i],m.d[j]);
	if(m.s[i] < m.d[j]){
		//next square is down
		m.d[j] = m.d[j] - m.s[i];
		m.s[i] = 0;
		nextij = [i+1,j];
	}
	else{
		//next square is across
		m.s[i] = m.s[i] - m.d[j];
		m.d[j] = 0;
		nextij = [i,j+1];
	}
	return [m, nextij];
}

function northWest(m){
	var nextij = [0,0];
        var supply = m.s.slice(0);
        var demand = m.d.slice(0);
	var n = northWestStep(m, 0, 0);
	for(var i = 1; i < m.r+m.c-1; i++){
		n = northWestStep(n[0], n[1][0], n[1][1]);
	}
        m.s = supply;
        m.d = demand;
	return m;
}

function shadowCosts(m){
	var counter = 0;//counts the number of shadow costs allocated = rows + columns
	var started = false;
	//while loop passes across the matrix repeatedly until all shadow costs are allocated
	while (counter < m.r+m.c){
		for (var i = 0; i < m.r; i++) {
			for (var j = 0; j < m.c; j++) {
				if (m.units[i][j] != 'X') {
					if (!started) {
						//allocated first shadow cost of 0 and corresponding other shadow
						m.shadowS[i] = 0;
						m.shadowD[j] = m.cost[i][j];
						started = true;
						counter = 2;//2 shadow costs have been allocated
					}
					else if (m.shadowS[i] != 'X' && m.shadowD[j] == 'X') {
						//must need to allocated shadow cost to demand
						m.shadowD[j] = m.cost[i][j] - m.shadowS[i];
						counter ++;
					}
					else if (m.shadowD[j] != 'X' && m.shadowS[i] == 'X') {
						//must need to allocate shadow cost to supply
						m.shadowS[i] = m.cost[i][j] - m.shadowD[j];
						counter ++;
					}
					//increase counter if a shadow cost has been allocated
				}
			}
		}
	}
}

function improvementIndices(m){
	//calculate improvement indices and entering cell coordinates
	var minImp = 0;
	for (var i = 0; i < m.r; i++) {
		for (var j = 0; j < m.c; j++) {
			if (m.units[i][j] == 'X') {
				m.imp[i][j] = m.cost[i][j] - m.shadowS[i] - m.shadowD[j];
				if (m.imp[i][j] < minImp) {
					minImp = m.imp[i][j];
					m.enteringCell[0] = i;
					m.enteringCell[1] = j;
				}
			}
		}
	}
}

function clearStones(m){
	for (var i = 0; i < m.r; i++) {
		for (var j = 0; j < m.c; j++) {
			m.stones[i][j] = 'X';			
		}
	}
}

function clearImps(m) {
	for (var i = 0; i < m.r; i++) {
		for (var j = 0; j < m.c; j++) {
			m.imp[i][j] = 'X';
		}	
	}
}

function clearShadows(m) {
	for (var i = 0; i < m.r; i++) {
		m.shadowS[i] = 'X';
	}
	for (var j = 0; j < m.c; j++) {
		m.shadowD[j] = 'X';	
	}
}

function findCellsInRowAndColumn(m, c){
	//helper function for closedPath
	//starting at cell c finds a cell in the same row with an allocation
	//and a cell in the new cells column with an allocation
	//returns the two new cells if success and allocates to m.stones
	//returns fail if fails
	//first count spare cells in row
	var newcinrow = [];
	var counter = 0;
	for (var k = 0; k < m.c; k++) {
		if(m.units[c[0]][k] != 'X'){
			counter++;		
		}
	}
	if (counter <= 1) {
		return false;
	}
	else {
		//find new cell in row
		var nextj = parseInt(Math.random()*m.c);
		while (nextj == c[1] || m.units[c[0]][nextj] == 'X' || m.stones[c[0]][nextj] != 'X'){
			nextj = parseInt(Math.random()*m.c);
		}
		newcinrow = [c[0],nextj];
		m.stones[c[0]][nextj] = m.units[c[0]][nextj];
	}
	//if new cell is in the column of the entering cell stop
	if (newcinrow[1] == m.enteringCell[1]) {
		return [newcinrow, m.enteringCell];
	}
	//now count spare cells in newly found column
	var newcincol = []
	counter = 0;
	for (var k = 0; k < m.r; k++) {
		if(m.units[k][newcinrow[1]] != 'X'){
			counter++;		
		}
	}
	if (counter <= 1) {
		return false;
	}
	else {
		//find new cell in col
		var nexti = parseInt(Math.random()*m.r);
		while (nexti == newcinrow[0] || m.units[nexti][newcinrow[1]] == 'X' || m.stones[nexti][newcinrow[1]] != 'X'){
			nexti = parseInt(Math.random()*m.r);
		}
		newcincol = [nexti,newcinrow[1]];
		m.stones[nexti][newcinrow[1]] = m.units[nexti][newcinrow[1]];
	}
	return [newcinrow, newcincol];
}

function findClosedPath(m){
	//finds a closed path starting and ending at the entering cell
	//using only cells with an allocation
	//returns an array of true or false with the closed path as the second element or empty
	//must return all stones to X if findCellsInRowAndColumn fails and is called again
	clearStones(m);
	//allocate entering cell to m.units so it can be found as part of the path
	m.units[m.enteringCell[0]][m.enteringCell[1]] = 0;
	var closedPath = [m.enteringCell];
	var finished = false;
	var nextCell = findCellsInRowAndColumn(m, m.enteringCell);
	if (nextCell == false) {
		clearStones(m);
		return [false, []];
	}
	else {
		closedPath.push(nextCell[0]);
		closedPath.push(nextCell[1]);
	}
	while (!finished){
		nextCell = findCellsInRowAndColumn(m, nextCell[1]);
		if (nextCell == false) {
			finished = true;
			clearStones(m);
			return [false, []];
		}	
		else {
			closedPath.push(nextCell[0]);
			closedPath.push(nextCell[1]);
		}
		if (nextCell[0][1] == m.enteringCell[1]) {
			finished = true;
			closedPath.pop();//remove unneeded cell because nextCell[0] formed closed path
			clearStones(m);
			return [true, closedPath];
		}
	}
}

function improvedAllocation(m, cellsList){
	var maxAlloc = m.units[cellsList[1][0]][cellsList[1][1]];//causing an error sometimes
	var exitCellNumber = 1;
	for (var i = 1; i < cellsList.length; i += 2) {
		if (m.units[cellsList[i][0]][cellsList[i][1]] < maxAlloc) {
			maxAlloc = m.units[cellsList[i][0]][cellsList[i][1]];
			exitCellNumber = i;
		}
	}
	m.units[cellsList[0][0]][cellsList[0][1]] = maxAlloc;
	for (var i = 1; i < cellsList.length; i++) {
		m.units[cellsList[i][0]][cellsList[i][1]] = m.units[cellsList[i][0]][cellsList[i][1]] + Math.pow(-1, i)*maxAlloc;
	}
	m.units[cellsList[exitCellNumber][0]][cellsList[exitCellNumber][1]] = 'X';
}

function doAlgorithm(matriz_costos) {
    // Clear output div when button is re-pressed
    document.getElementById('findOptimal').innerHTML = '';
    var matrix = matriz_costos;
    if (matrix[0]) {
        m = matrix[1];
    } else {
        return; // In case matrix was not balanced
    }
    // m = getValuesFromMatrix();
    m = northWest(m);
    var optimal = false;
    var steppingStones = [];
    var cycleNumber = 1;
    var cycleString = '';
    var steppingStonesOKFlag = true;
    while (cycleNumber < 30 && !optimal && steppingStonesOKFlag) { // Could put a higher bound on cycle number
        // Clear shadow costs and improvement indices
        clearShadows(m);
        clearImps(m);
        // Make DOM extensions for each loop
        if (cycleNumber === 1) {
            document.getElementById('findOptimal').innerHTML = ''; // Clearing previous iterations
        }
        cycleString = '';
        cycleString += '<div id = "cycle' + cycleNumber + '">';
        
        cycleString += showMatrixUnits(m);
        m.enteringCell = ['X', 'X'];
        shadowCosts(m);
        improvementIndices(m);
        if (m.enteringCell[0] != 'X') {
            cycleString += '<p>Esta solution noes optima</p></div>';
        } else {
            cycleString += '<p>Tomo ' + cycleNumber + ' iteracions para llegar al minimo optimo.</p></div>';
        }
        //cycleString += '<table style="background:rgb(240,250,255);font-size:60%;"><tr><td style="max-width:50%;">' + showMatrixShadows(m);
        //cycleString += '</td><td style="max-width:50%;">' + showMatrixImps(m) + '</td></tr></table>';
        if (m.enteringCell[0] == 'X') {
            optimal = true;
        } else {
            steppingStones = findClosedPath(m);
            var counter = 0; // Avoid infinite attempt to find solutions
            while (!steppingStones[0] && counter < 200) {
                steppingStones = findClosedPath(m);
                counter++;
            }
            if (counter == 200 || !steppingStones[0]) {
                // Failed to find stepping stones
                steppingStonesOKFlag = false;
                cycleString += '<p>No se encontro ninguna solution optima dentro de ' + cycleNumber + ' iterationes.</p></div>'; // Turn these into user options
            } else {
                // steppingStones[1] should now be a list
                improvedAllocation(m, steppingStones[1]);
                cycleNumber++;
            }
        }
    } // End of while, so need to output results
    document.getElementById('findOptimal').innerHTML += cycleString;
    if (cycleNumber == 30) {
        document.getElementById('findOptimal').innerHTML += '<p>No se encontro ninguna solution optima dentro de ' + cycleNumber + ' iterationes.</p>'; // Turn these into user options
    }
}

//------------------------------maximo


function improvedAllocationm(m, cellsList) {
    var minAlloc = m.units[cellsList[1][0]][cellsList[1][1]]; // Initialize with the allocation of the first cell in the list
    var exitCellNumber = 1; // Initialize the exit cell index
    // Find the minimum allocation and its corresponding cell index
    for (var i = 1; i < cellsList.length; i += 2) {
        if (m.units[cellsList[i][0]][cellsList[i][1]] < minAlloc) {
            minAlloc = m.units[cellsList[i][0]][cellsList[i][1]];
            exitCellNumber = i;
        }
    }
    // Update the allocation for the entering cell
    m.units[cellsList[0][0]][cellsList[0][1]] = minAlloc;
    // Update the allocations for the cells in the closed path
    for (var i = 1; i < cellsList.length; i++) {
        m.units[cellsList[i][0]][cellsList[i][1]] += Math.pow(-1, i) * minAlloc;
    }
    // Set the exit cell to 'X' indicating it is unallocated
    m.units[cellsList[exitCellNumber][0]][cellsList[exitCellNumber][1]] = 'X';
}



function moAlgorithm() {
    // Clear output div when button is re-pressed
    document.getElementById('findOptimal').innerHTML = '';
    var matrix = getValuesFromMatrix();
    if (matrix[0]) {
        m = matrix[1];
    } else {
        return; // In case matrix was not balanced
    }
    // m = getValuesFromMatrix();
    m = northWestm(m);
    var optimal = false;
    var steppingStones = [];
    var cycleNumber = 1;
    var cycleString = '';
    var steppingStonesOKFlag = true;
    while (cycleNumber < 30 && !optimal && steppingStonesOKFlag) { // Could put a higher bound on cycle number
        // Clear shadow costs and improvement indices
        clearShadows(m);
        clearImps(m);
        // Make DOM extensions for each loop
        if (cycleNumber === 1) {
            document.getElementById('findOptimal').innerHTML = ''; // Clearing previous iterations
        }
        cycleString = '';
        cycleString += '<div id = "cycle' + cycleNumber + '">';

        cycleString += showMatrixUnits(m);
        m.enteringCell = ['X', 'X'];
        shadowCosts(m);
        improvementIndicesm(m);
        if (m.enteringCell[0] != 'X') {
            cycleString += '<p>Esta solution no es optima</p></div>';
        } else {
            cycleString += '<p>Tomo ' + cycleNumber + ' iterationes para llegar al optimo maximo.</p></div>';
        }
        //cycleString += '<table style="background:rgb(240,250,255);font-size:60%;"><tr><td style="max-width:50%;">' + showMatrixShadows(m);
        //cycleString += '</td><td style="max-width:50%;">' + showMatrixImps(m) + '</td></tr></table>';
        if (m.enteringCell[0] == 'X') {
            optimal = true;
        } else {
            steppingStones = findClosedPath(m);
            var counter = 0; // Avoid infinite attempt to find solutions
            while (!steppingStones[0] && counter < 200) {
                steppingStones = findClosedPath(m);
                counter++;
            }
            if (counter == 200 || !steppingStones[0]) {
                // Failed to find stepping stones
                steppingStonesOKFlag = false;
                cycleString += '<p>No se encontro una ruta optima en ' + cycleNumber + ' iterationes.</p></div>'; // Turn these into user options
            } else {
                // steppingStones[1] should now be a list
                improvedAllocationm(m, steppingStones[1]);
                cycleNumber++;
            }
        }
    } // End of while, so need to output results
    document.getElementById('findOptimal').innerHTML += cycleString;
    if (cycleNumber == 30) {
        document.getElementById('findOptimal').innerHTML += '<p>No se econtro una ruta optima detro de ' + cycleNumber + ' iterationes.</p>'; // Turn these into user options
    }
}


function improvedAllocationm(m, cellsList) {
    var minAlloc = m.units[cellsList[1][0]][cellsList[1][1]]; // Initialize with the allocation of the first cell in the list
    var exitCellNumber = 1; // Initialize the exit cell index
    // Find the minimum allocation and its corresponding cell index
    for (var i = 1; i < cellsList.length; i += 2) {
        if (m.units[cellsList[i][0]][cellsList[i][1]] < minAlloc) {
            minAlloc = m.units[cellsList[i][0]][cellsList[i][1]];
            exitCellNumber = i;
        }
    }
    // Update the allocation for the entering cell
    m.units[cellsList[0][0]][cellsList[0][1]] = minAlloc;
    // Update the allocations for the cells in the closed path
    for (var i = 1; i < cellsList.length; i++) {
        m.units[cellsList[i][0]][cellsList[i][1]] += Math.pow(-1, i) * minAlloc;
    }
    // Set the exit cell to 'X' indicating it is unallocated
    m.units[cellsList[exitCellNumber][0]][cellsList[exitCellNumber][1]] = 'X';
}


function northWestm(m){
    var nextij = [0, 0];
    var supply = m.s.slice(0);
    var demand = m.d.slice(0);
    var n = northWestStepm(m, 0, 0);
    for (var i = 1; i < m.r + m.c - 1; i++) {
        n = northWestStepm(n[0], n[1][0], n[1][1]);
    }
    m.s = supply;
    m.d = demand;
    return m;
}

function northWestStepm(m, i, j) {
    // Northwest corner method to find initial solution
    var nextij = [];
    m.units[i][j] = Math.min(m.s[i], m.d[j]); // Minimize the allocation based on supply and demand
    if (m.s[i] < m.d[j]) {
        // Next square is down
        m.d[j] = m.d[j] - m.units[i][j]; // Reduce the demand accordingly
        m.s[i] = 0;
        nextij = [i + 1, j];
    } else {
        // Next square is across
        m.s[i] = m.s[i] - m.units[i][j]; // Reduce the supply accordingly
        m.d[j] = 0;
        nextij = [i, j + 1];
    }
    return [m, nextij];
}

function improvementIndicesm(m) {
    // Calculate improvement indices and entering cell coordinates
    var maxImp = 0; // Initialize to find the maximum
    for (var i = 0; i < m.r; i++) {
        for (var j = 0; j < m.c; j++) {
            if (m.units[i][j] == 'X') {
                m.imp[i][j] = m.cost[i][j] - m.shadowS[i] - m.shadowD[j]; // Change to subtraction
                if (m.imp[i][j] > maxImp) { // Check for maximum
                    maxImp = m.imp[i][j];
                    m.enteringCell[0] = i;
                    m.enteringCell[1] = j;
                }
            }
        }
    }
}