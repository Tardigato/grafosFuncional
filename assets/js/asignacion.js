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
            color: {
              color:'#047979', // Color de la arista
              highlight:'#047979', // Color al seleccionar
            },
            width: 2 // Anchura de las aristas
        },

        nodes: {
            shape: 'circle', // Forma de los nodos
            color: {
              border: '#047979',
              background: '#80DCDC',
              highlight: {      //cuando se lo selecciona
                border: '#2B7CE9',
                background: '#D2E5FF'
              }
            },
            size: 25, // Tamaño de los nodos
            font: {
              size: 14, // Tamaño de la fuente
              color: '#047979' // Color de la fuente
            },
            borderWidth: 2 // Ancho del borde del nodo
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
  if(eleccion == 0)
    console.log("MINIMO");
  else
    console.log("MAXIMO");
}

function cambiarSeleccion(valor) {
  eleccion = valor;
  mostrarSeleccion(); // Llama a esta función para mostrar la selección actual
}

function asignacion(){   //Esto se activa al presionar asignación
  generarMatrizAsignacion();
}

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

  // Identificar filas y columnas que no sean todas ceros
  let filasValidas = matriz.map(fila => fila.some(valor => valor !== 0));
  let columnasValidas = matriz[0].map((col, i) => matriz.some(fila => fila[i] !== 0));

  // Filtrar las filas y columnas para mantener solo las que no son todas ceros
  matriz = matriz.filter((fila, i) => filasValidas[i]).map(fila => fila.filter((col, i) => columnasValidas[i]));

  // Filtrar nodos basados en filas y columnas validas
  let nodosFiltradosFilas = nodos.filter((nodo, i) => filasValidas[i]); // Filtrar nodos para filas
  let nodosFiltradosColumnas = nodos.filter((nodo, i) => columnasValidas[i]); // Filtrar nodos para columnas

  // Mostrar la matriz de asignación en la consola
  let matriz_consola = matriz;
  mostrarMatrizEnConsola(matriz_consola);
  matriz_consola = restar_columnas(matriz_consola);
  mostrarMatrizEnConsola(matriz_consola);
  matriz_consola = restar_filas(matriz_consola);
  mostrarMatrizEnConsola(matriz_consola);

  let celdasResaltar = seleccionarCeros(matriz_consola);
  mostrarMatrizAsignacion(nodosFiltradosFilas, nodosFiltradosColumnas, matriz, celdasResaltar);
}

// Función para mostrar la matriz de asignación en la consola
function mostrarMatrizEnConsola(matriz) {
  console.log("Matriz:");
  matriz.forEach(fila => {
    console.log(fila.join('\t'));
  });
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

// Función para obtener la matriz de asignación del DOM
function obtenerMatrizAsignacion() {
  const contenedorMatriz = document.getElementById('matriz_asignacion');
  const filas = contenedorMatriz.getElementsByTagName('tr');
  const matriz = [];
  for (let i = 0; i < filas.length; i++) {
    const celdas = filas[i].getElementsByTagName('td');
    const fila = [];
    for (let j = 0; j < celdas.length; j++) {
      fila.push(parseInt(celdas[j].innerHTML));
    }
    matriz.push(fila);
  }

  console.log("Matriz de asignación obtenida:", matriz);
  return matriz;
}

function restar_columnas(matriz){ 
  const numFilas = matriz.length;
  const numColumnas = matriz[0].length;

  for (let j = 0; j < numColumnas; j++) {
    let extremoColumna = matriz[0][j]; // Inicializa con el primer valor de la columna
    
    for (let i = 1; i < numFilas; i++) {
      if (eleccion == 0) { // MINIMO
        if (matriz[i][j] < extremoColumna)  extremoColumna = matriz[i][j];
      }else { // MAXIMO
        if (matriz[i][j] > extremoColumna)  extremoColumna = matriz[i][j];
      }
    }

    // Resta el extremo encontrado (mínimo o máximo) a toda la columna
    for (let i = 0; i < numFilas; i++) {
      matriz[i][j] -= extremoColumna;
    }
  }
  return matriz;
}

function restar_filas(matriz){ 
  const numFilas = matriz.length;
  const numColumnas = matriz[0].length;

  for (let i = 0; i < numFilas; i++) {
    let extremoFila = matriz[i][0]; // Inicializa con el primer valor de la fila
    
    for (let j = 1; j < numColumnas; j++) {
      if (eleccion == 0) { // MINIMO
        if (matriz[i][j] < extremoFila)  extremoFila = matriz[i][j];
      }else { // MAXIMO
        if (matriz[i][j] > extremoFila)  extremoFila = matriz[i][j];
      }
    }
    // Resta el extremo encontrado (mínimo o máximo) a toda la fila
    for (let j = 0; j < numColumnas; j++) {
      matriz[i][j] -= extremoFila;
    }
  }
  return matriz;
}

function seleccionarCeros(matriz) {
  let filasCubiertas = new Array(matriz.length).fill(false);
  let columnasCubiertas = new Array(matriz[0].length).fill(false);
  let celdasResaltar = [];
  let cerosPorFila = matriz.map(fila => fila.filter(x => x === 0).length);
  let cerosPorColumna = matriz[0].map((_, colIndex) => matriz.map(row => row[colIndex]).filter(x => x === 0).length);

  let intentos = 0;
  let cambios = true;

  while (cambios && intentos < matriz.length + matriz[0].length) {
      cambios = false;
      intentos++;

      // Marcar ceros en filas con el menor número de ceros disponibles primero
      cerosPorFila.forEach((count, i) => {
          if (count === 1 && !filasCubiertas[i]) { // Solo intenta si hay exactamente un cero y la fila no está cubierta
              for (let j = 0; j < matriz[0].length; j++) {
                  if (matriz[i][j] === 0 && !columnasCubiertas[j]) {
                      celdasResaltar.push([i, j]);
                      filasCubiertas[i] = true;
                      columnasCubiertas[j] = true;
                      cambios = true;

                      // Actualiza los conteos de ceros
                      cerosPorFila[i] = 0;
                      matriz.forEach((_, rowIndex) => {
                          if (matriz[rowIndex][j] === 0 && rowIndex !== i) {
                              cerosPorFila[rowIndex]--;
                          }
                      });
                      cerosPorColumna[j] = 0;
                      break;
                  }
              }
          }
      });

      // Marcar ceros en columnas de manera similar
      cerosPorColumna.forEach((count, j) => {
          if (count === 1 && !columnasCubiertas[j]) {
              for (let i = 0; i < matriz.length; i++) {
                  if (matriz[i][j] === 0 && !filasCubiertas[i]) {
                      celdasResaltar.push([i, j]);
                      filasCubiertas[i] = true;
                      columnasCubiertas[j] = true;
                      cambios = true;

                      // Actualiza los conteos de ceros
                      cerosPorColumna[j] = 0;
                      matriz.forEach((row, colIndex) => {
                          if (matriz[i][colIndex] === 0 && colIndex !== j) {
                              cerosPorColumna[colIndex]--;
                          }
                      });
                      cerosPorFila[i] = 0;
                      break;
                  }
              }
          }
      });
  }

  return celdasResaltar;
}

