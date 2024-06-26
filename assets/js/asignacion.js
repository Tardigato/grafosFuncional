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
    
    // Aquí se definen las opciones, incluida la desactivación de la física
    const opciones = {
        physics: {
          enabled: false // Desactivando con false
        },

        edges: {
            smooth: true, // Aristas curvas
            arrows: {
              to: {enabled: true, scaleFactor: 1}, // Flechas direccionales hacia el nodo destino
            },
        },

        nodes: { 
          }
      };
      
    // Crear una nueva instancia de Network con las opciones configuradas
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
      nodosDataSet.add({ id: nuevoId, label: 'Nodo ' + nuevoId, x: position.x, y: position.y} ); // Agrega el nodo en la posición del clic
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


// Función para generar la matriz de adyacencia y calcular las sumatorias por filas y por columnas
function generarMatriz() {
  const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
  const matriz = [];
  const sumasFilas = [];
  const sumasColumnas = new Array(nodos.length).fill(0); // Inicializar el array de sumatorias por columnas con ceros
  
  nodos.forEach((nodo, rowIndex) => {
    const fila = [];
    let sumaFila = 0; // Inicializar la sumatoria por fila para este nodo
    nodos.forEach((otroNodo, columnIndex) => {
      const conexion = aristasDataSet.get({
        filter: edge => (edge.from === nodo.id && edge.to === otroNodo.id)
      });
      if (conexion.length > 0) {
        // Asignar valor numérico a la conexión
        const valor = parseInt(conexion[0].label || 1);
        fila.push(valor);
        sumaFila += valor; // Sumar al total de la fila
        sumasColumnas[columnIndex] += valor; // Sumar al total de la columna
      } else {
        fila.push(0); // Sin conexión
      }
    });
    matriz.push(fila);
    sumasFilas.push(sumaFila);
  });

  mostrarMatriz(nodos, matriz, sumasFilas, sumasColumnas);
}


// Función para mostrar la matriz de adyacencia y las sumatorias por filas y por columnas en el DOM 
function mostrarMatriz(nodos, matriz, sumasFilas, sumasColumnas) {
  const contenedorMatriz = document.getElementById('matriz');
  let html = '<h2>Matriz de Adyacencia</h2>';
  html += '<table style="padding: 10px;border: 2px solid black;">';
  // Encabezados de columna
  html += '<tr><th style="padding: 10px;border: 2px solid black;background-color: green; color: black;"></th>';
  nodos.forEach((nodo, index) => {
    html += `<th style="padding: 10px;border: 2px solid black;background-color: green; color: black;">${nodo.label}</th>`;
  });
  html += '<th style="padding: 10px;border: 2px solid black;background-color: green;color: black;">Suma por Fila</th>'; // Encabezado para la sumatoria por filas
  html += '</tr>';
  // Contenido de la matriz
  matriz.forEach((fila, index) => {
    html += `<tr><th style="padding: 10px;border: 2px solid black;background-color: red; color: black;">${nodos[index].label}</th>`;
    fila.forEach(valor => {
      html += `<td style="padding: 10px;border: 2px solid black; background-color: white; color: black;">${valor}</td>`;
    });
    html += `<td style="padding: 10px;border: 2px solid black; background-color: white; color: black;">${sumasFilas[index]}</td>`; // Mostrar la sumatoria por fila
    html += '</tr>';
  });
  // Agregar la fila de sumatorias por columnas al final de la tabla
  html += '<tr><th style="padding: 10px;border: 2px solid black;background-color: red; color: black;">Suma por Columna</th>';
  sumasColumnas.forEach(suma => {
    html += `<td style="padding: 10px;border: 2px solid black; background-color: white; color: black;">${suma}</td>`;
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
    // Limpiar los conjuntos de datos actuales
    nodosDataSet.clear();
    aristasDataSet.clear();
    // Agregar los nodos y aristas del archivo JSON al grafo
    nodosDataSet.add(datos.nodos);
    aristasDataSet.add(datos.aristas);
  };
  reader.readAsText(file);
}


///DESDE AQUÍ TODO LO PROPIO DE ASIGNACIÓN, LO DE MÁS ANTES ES DE DIBUJAR GRAFOS
eleccion = 0;

function mostrarSeleccion() { //solo para ver si está o no seleccionado
  if(eleccion == 1)
    console.log("MÁXIMO");
  else
    console.log("MÍNIMO");
}

function cambiarSeleccion(valor) {
  eleccion = valor;
  mostrarSeleccion(); // Llama a esta función para mostrar la selección actual
}

function asignacion(){
  generarMatrizAsignacion();
  let matrixCreada = algoritmo_asinacion();
  
}

function algoritmo_asinacion() {
  let matrix = generarMatrizAsignacionAuxiliar();

  console.log("Matriz inicial:");
  imprimirMatriz(matrix);

  if (eleccion == 1) {
    console.log("Se debe volver la matriz a negativa, y luego sumarle el que tenga valor absoluto más alto, y se procede normal");
    matrix = convertirMatrizMaximizar(matrix);
    imprimirMatriz(matrix);
  }

  let matrixAfterRowSubtraction = restar_minimo_fila(matrix);
  console.log("Matriz restando mínimo de filas:");
  imprimirMatriz(matrixAfterRowSubtraction);

  let matrixAfterColSubtraction = restar_minimo_columnas(matrixAfterRowSubtraction);
  console.log("Matriz restando mínimo de columnas:");
  imprimirMatriz(matrixAfterColSubtraction);

  // Cubrir todos los ceros con el menor número de líneas
  let { coveredRows, coveredCols } = cubrirCeros(matrixAfterColSubtraction);
  let numCoveredLines = coveredRows.filter(x => x).length + coveredCols.filter(x => x).length;
  let cont = 0;

  let matrixAfterColSubtraction1 = ajustarMatriz(matrixAfterColSubtraction, coveredRows, coveredCols);
  let coverResult = cubrirCeros(matrixAfterColSubtraction1);
  coveredRows = coverResult.coveredRows;
  coveredCols = coverResult.coveredCols;
  numCoveredLines = coveredRows.filter(x => x).length + coveredCols.filter(x => x).length;
  cont ++;

  let matrixAfterColSubtraction2 = ajustarMatriz(matrixAfterColSubtraction1, coveredRows, coveredCols);
  coverResult = cubrirCeros(matrixAfterColSubtraction);
  coveredRows = coverResult.coveredRows;
  coveredCols = coverResult.coveredCols;
  numCoveredLines = coveredRows.filter(x => x).length + coveredCols.filter(x => x).length;
  cont ++;

  /*
  while (numCoveredLines < matrix.length) {
    matrixAfterColSubtraction = ajustarMatriz(matrixAfterColSubtraction, coveredRows, coveredCols);
    let coverResult = cubrirCeros(matrixAfterColSubtraction);
    coveredRows = coverResult.coveredRows;
    coveredCols = coverResult.coveredCols;
    numCoveredLines = coveredRows.filter(x => x).length + coveredCols.filter(x => x).length;
    cont ++;
  } */

  console.log("Matriz final después de ajustes:");
  imprimirMatriz(matrixAfterColSubtraction2);
  console.log("veces que se ajusta la matriz: " + cont);

  // Encontrar la solución óptima
  let celdasResaltar = seleccionarPosiciones(matrixAfterColSubtraction2);

  console.log("Solución:");
  imprimirMatriz(matrix);

  return matrixAfterColSubtraction2;
}

function imprimirMatriz(matrix) {
  matrix.forEach(row => console.log(row.join('\t')));
}

function restar_minimo_fila(matrix) {
  const numRows = matrix.length;
  const newMatrix = matrix.map(row => [...row]); // Creando una copia de cada fila

  for (let i = 0; i < numRows; i++) {
      const minRowValue = Math.min(...newMatrix[i]);
      for (let j = 0; j < newMatrix[i].length; j++) {
          newMatrix[i][j] -= minRowValue;
      }
  }

  return newMatrix;
}

function restar_minimo_columnas(matrix) {
  const numCols = matrix[0].length;
  const newMatrix = matrix.map(row => [...row]); // Creando una copia de cada fila

  for (let j = 0; j < numCols; j++) {
      let minColValue = Infinity;
      for (let i = 0; i < newMatrix.length; i++) {
          minColValue = Math.min(minColValue, newMatrix[i][j]);
      }
      for (let i = 0; i < newMatrix.length; i++) {
          newMatrix[i][j] -= minColValue;
      }
  }

  return newMatrix;
}

function cubrirCeros(matrix) {
  const n = matrix.length;
  const coveredRows = new Array(n).fill(false);
  const coveredCols = new Array(n).fill(false);

  let numLines = 0;

  while (true) {
    // Encontrar la fila con la mayor cantidad de ceros sin cubrir
    let maxZeroCountRow = 0;
    let maxRow = -1;
    for (let i = 0; i < n; i++) {
      if (!coveredRows[i]) {
        let zeroCount = 0;
        for (let j = 0; j < n; j++) {
          if (!coveredCols[j] && matrix[i][j] === 0) {
            zeroCount++;
          }
        }
        if (zeroCount > maxZeroCountRow) {
          maxZeroCountRow = zeroCount;
          maxRow = i;
        }
      }
    }

    // Encontrar la columna con la mayor cantidad de ceros sin cubrir
    let maxZeroCountCol = 0;
    let maxCol = -1;
    for (let j = 0; j < n; j++) {
      if (!coveredCols[j]) {
        let zeroCount = 0;
        for (let i = 0; i < n; i++) {
          if (!coveredRows[i] && matrix[i][j] === 0) {
            zeroCount++;
          }
        }
        if (zeroCount > maxZeroCountCol) {
          maxZeroCountCol = zeroCount;
          maxCol = j;
        }
      }
    }

    // Si no se encuentra ninguna fila o columna con ceros sin cubrir, salir del bucle
    if (maxZeroCountRow === 0 && maxZeroCountCol === 0) {
      break;
    }

    // Cubrir la fila o columna con la mayor cantidad de ceros sin cubrir
    if (maxZeroCountRow >= maxZeroCountCol) {
      coveredRows[maxRow] = true;
      numLines++;
    } else {
      coveredCols[maxCol] = true;
      numLines++;
    }
  }

  return { coveredRows, coveredCols, numLines };
}

function ajustarMatriz(matrix, coveredRows, coveredCols) {
  const newMatrix = matrix.map(row => [...row]); // Creando una copia de cada fila
  let minUncoveredValue = Infinity;
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (!coveredRows[i] && !coveredCols[j]) {
        minUncoveredValue = Math.min(minUncoveredValue, newMatrix[i][j]);
      }
    }
  }

  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (!coveredRows[i] && !coveredCols[j]) {
        newMatrix[i][j] -= minUncoveredValue;
      }
      if (coveredRows[i] && coveredCols[j]) {
        newMatrix[i][j] += minUncoveredValue;
      }
    }
  }
  console.log("columnas: " + coveredCols);
  console.log("filas: " + coveredRows);
  return newMatrix;
}

//PARA MOSTRAR AL USUARIO

function generarMatrizAsignacion() {
  const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
  let matriz = [];

  // Generar matriz inicial
  nodos.forEach(nodo => {
    const fila = [];
    nodos.forEach(otroNodo => {
      const conexion = aristasDataSet.get({
        filter: edge => edge.from === nodo.id && edge.to === otroNodo.id
      });
      fila.push(conexion.length > 0 ? parseInt(conexion[0].label || 1) : 0);
    });
    matriz.push(fila);
  });

  let filasValidas = matriz.map(fila => fila.some(valor => valor !== 0));
  let columnasValidas = matriz[0].map((col, i) => matriz.some(fila => fila[i] !== 0));

  matriz = matriz.filter((fila, i) => filasValidas[i]).map(fila => fila.filter((col, i) => columnasValidas[i]));

  let nodosFiltradosFilas = nodos.filter((nodo, i) => filasValidas[i]);
  let nodosFiltradosColumnas = nodos.filter((nodo, i) => columnasValidas[i]);

  let matrix_cereada = algoritmo_asinacion();

  let celdasResaltar = seleccionarPosiciones(matrix_cereada);
  mostrarMatrizAsignacion(nodosFiltradosFilas, nodosFiltradosColumnas, matriz, celdasResaltar);

  let sumaOptimo = 0;
  celdasResaltar.forEach(celda => {
    sumaOptimo += matriz[celda[0]][celda[1]];
  });

  document.getElementById('optimo-valor').textContent = sumaOptimo;
}


// Ajuste la función mostrarMatrizAsignacion para aceptar nodosFiltradosFilas y nodosFiltradosColumnas
function mostrarMatrizAsignacion(nodosFilas, nodosColumnas, matriz, celdasResaltar = []) {
  const contenedorMatriz = document.getElementById('matriz_asignacion');
  let html = '<h2>Asignación</h2>';
  html += '<table style="padding: 10px; border: 2px solid black;">';

  // Encabezados de columna
  html += '<tr><th style="padding: 10px; border: 2px solid black; background-color: white; color: black;"></th>';
  nodosColumnas.forEach(nodo => {
    html += `<th style="padding: 10px; border: 2px solid black; background-color: DodgerBlue; color: black;">${nodo.label}</th>`;
  });
  html += '</tr>';

  // Contenido de la matriz
  matriz.forEach((fila, i) => {
    html += `<tr><th style="padding: 10px; border: 2px solid black; background-color: Tomato; color: black;">${nodosFilas[i].label}</th>`;
    fila.forEach((valor, j) => {
      const esResaltar = celdasResaltar.some(celda => celda[0] === i && celda[1] === j);
      const colorFondo = esResaltar ? "yellow" : "white";
      html += `<td style="padding: 10px; border: 2px solid black; background-color: ${colorFondo}; color: black;">${valor}</td>`;
    });
    html += '</tr>';
  });

  html += '</table>';
  contenedorMatriz.innerHTML = html;
}

//PARA PODER USAR LA MATRIZ DEL GRAFO

function generarMatrizAsignacionAuxiliar() {
  const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
  let matrizAuxiliar = [];

  // Generar matriz inicial
  nodos.forEach(nodo => {
    const fila = [];
    nodos.forEach(otroNodo => {
      const conexion = aristasDataSet.get({
        filter: edge => edge.from === nodo.id && edge.to === otroNodo.id
      });
      fila.push(conexion.length > 0 ? parseInt(conexion[0].label || 1) : 0);
    });
    matrizAuxiliar.push(fila);
  });

  // Identificar filas y columnas que no sean todas ceros
  let filasValidas = matrizAuxiliar.map(fila => fila.some(valor => valor !== 0));
  let columnasValidas = matrizAuxiliar[0].map((col, i) => matrizAuxiliar.some(fila => fila[i] !== 0));

  // Filtrar las filas y columnas para mantener solo las que no son todas ceros
  matrizAuxiliar = matrizAuxiliar.filter((fila, i) => filasValidas[i]).map(fila => fila.filter((col, i) => columnasValidas[i]));

  return matrizAuxiliar; // Devolver la matriz generada
}

function seleccionarPosiciones(matriz_cereada) {
  let filasCubiertas = new Array(matriz_cereada.length).fill(false);
  let columnasCubiertas = new Array(matriz_cereada[0].length).fill(false);
  let celdasResaltar = [];

  // Seleccionar ceros maximizando la cobertura
  let seleccionados = true;
  while (seleccionados) {
    seleccionados = false;
    let contadorCerosPorFila = matriz_cereada.map(fila => fila.filter(v => v === 0).length);
    let contadorCerosPorColumna = matriz_cereada[0].map((_, j) => matriz_cereada.map(fila => fila[j]).filter(v => v === 0).length);

    for (let i = 0; i < matriz_cereada.length; i++) {
      for (let j = 0; j < matriz_cereada[i].length; j++) {
        if (matriz_cereada[i][j] === 0 && !filasCubiertas[i] && !columnasCubiertas[j]) {
          if (contadorCerosPorFila[i] === 1 || contadorCerosPorColumna[j] === 1) {
            celdasResaltar.push([i, j]);
            filasCubiertas[i] = true;
            columnasCubiertas[j] = true;
            seleccionados = true;
            // Actualizar contadores
            contadorCerosPorFila[i] = 0;
            matriz_cereada.forEach((_, idx) => contadorCerosPorColumna[j] -= matriz_cereada[idx][j] === 0 ? 1 : 0);
            break;
          }
        }
      }
    }
  }

  // Completar la selección de ceros si es posible
  matriz_cereada.forEach((fila, i) => {
    fila.forEach((valor, j) => {
      if (valor === 0 && !filasCubiertas[i] && !columnasCubiertas[j]) {
        celdasResaltar.push([i, j]);
        filasCubiertas[i] = true;
        columnasCubiertas[j] = true;
      }
    });
  });

  return celdasResaltar;
}

//PARA MAXIMIZAR
function convertirMatrizMaximizar(matriz) {
  // Convertir la matriz para maximizar la cobertura
  let matrizMaximizada = matriz.map(fila => fila.map(valor => -valor)); // Convertir los valores a negativos
  let maximoAbsoluto = Math.max(...matrizMaximizada.flat()); // Encontrar el valor absoluto más alto
  matrizMaximizada = matrizMaximizada.map(fila => fila.map(valor => valor + maximoAbsoluto)); // Sumarle el valor absoluto más alto a todos los valores

  return matrizMaximizada;
}