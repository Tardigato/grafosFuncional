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
  const opciones = {};
  grafo = new vis.Network(lienzo, data, opciones);

  // Eventos del grafo
  grafo.on('click', clicEnNodo);
  grafo.on('doubleClick', dobleClicEnArista);
  grafo.on('click', eliminarAristaSeleccionada);
}

var options = {
  physics: {
    enabled: false
  }
};


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

// Función Jhonson para calcular los valores Xi y Yi de los nodos del grafo
function Jhonson(sumasColumnas, sumasFilas) {
  const nodos = nodosDataSet.get({ fields: ['id', 'label'] });

  // Calcular valores Xi de izquierda a derecha
  let valoresXi = new Array(nodos.length).fill(0);
  for (let i = 0; i < nodos.length; i++) {
    const conexiones = aristasDataSet.get({ filter: edge => edge.from === nodos[i].id });
    conexiones.forEach(conexion => {
      const valorArista = parseInt(conexion.label || 0);
      const nodoDestino = nodos.find(nodo => nodo.id === conexion.to);
      const valorXi = valoresXi[i] + valorArista;
      if (valorXi > valoresXi[nodoDestino.id - 1]) {
        valoresXi[nodoDestino.id - 1] = valorXi;
      }
    });
  }
  
  // Calcular valores Yi de derecha a izquierda
  let valoresYi = new Array(nodos.length).fill(Number.POSITIVE_INFINITY); // Inicializar valores Yi con infinito positivo
  valoresYi[nodos.length - 1] = valoresXi[nodos.length - 1]; // Valor Yi del nodo final es igual a su Xi
  for (let i = nodos.length - 1; i >= 0; i--) {
    const conexiones = aristasDataSet.get({ filter: edge => edge.to === nodos[i].id });
    conexiones.forEach(conexion => {
      const valorArista = parseInt(conexion.label || 0);
      const nodoOrigen = nodos.find(nodo => nodo.id === conexion.from);
      const valorYi = valoresYi[i] - valorArista; // Restar el valor del arista al valor Yi actual
      if (valorYi < valoresYi[nodoOrigen.id - 1]) {
        valoresYi[nodoOrigen.id - 1] = valorYi;
      }
    });
  }

  // Actualizar el título y la etiqueta de cada nodo con los valores Xi y Yi
  nodos.forEach((nodo, index) => {
    const valorXi = valoresXi[index];
    const valorYi = valoresYi[index];
    const nuevaEtiqueta = `${nodo.label}\n ${valorXi} || ${valorYi}`;
    nodosDataSet.update({ id: nodo.id, label: nuevaEtiqueta, title: nuevaEtiqueta });
  });

  // Llamar a la función para calcular las holguras
  holgura(nodos, valoresXi, valoresYi);
}


// Función para calcular las holguras entre cada par de nodos
function holgura(nodos, valoresXi, valoresYi) {
  const aristas = aristasDataSet.get({ fields: ['id', 'from', 'to', 'label'] });
  let listaHolgurasHTML = ''; // Variable para almacenar el HTML de la lista de holguras

  // Eliminar las aristas con holgura igual a 0 y cambiar su color
  aristas.forEach(arista => {
    const nodoOrigen = nodos.find(nodo => nodo.id === arista.from);
    const nodoDestino = nodos.find(nodo => nodo.id === arista.to);
    const valorXiOrigen = valoresXi[arista.from - 1];
    const valorYiDestino = valoresYi[arista.to - 1];
    const valorArista = parseInt(arista.label || 0);
    const holgura = valorYiDestino - valorXiOrigen - valorArista;

    if (holgura === 0) {
      // Eliminar arista existente
      aristasDataSet.remove(arista.id);

      // Agregar nueva arista con color modificado
      const nuevaArista = {
        id: arista.id,
        from: arista.from,
        to: arista.to,
        label: arista.label,
        color: { color: '#00ff00', highlight: '#00ff00' },
        width: 1
      };
      aristasDataSet.add(nuevaArista);

    }
  });

  // Calcular las holguras y almacenarlas en el HTML de la lista de holguras
  for (let i = 0; i < nodos.length; i++) {
    for (let j = 0; j < aristas.length; j++) {
      const arista = aristas[j];
      if (arista.from === nodos[i].id) {
        const nodoDestino = nodos.find(nodo => nodo.id === arista.to);
        const valorXiOrigen = valoresXi[nodos[i].id - 1];
        const valorYiDestino = valoresYi[nodoDestino.id - 1];
        const valorArista = parseInt(arista.label || 0);
        const holgura = valorYiDestino - valorXiOrigen - valorArista;
        let color = 'black'; // Color predeterminado para la holgura
      
        if (holgura === 0) {
          color = 'green';
        }
        listaHolgurasHTML += `<li style="color: ${color};">${nodos[i].label} con ${nodoDestino.label} holgura = ${holgura}</li>`;
      }
    }
  }
  let listaHolgurasConTituloHTML = `<h3>Holgura / Ruta Crítica</h3><ul>${listaHolgurasHTML}</ul>`;

  // Mostrar la lista de holguras en el elemento con id "listaHolguras"
  document.getElementById('listaHolguras').innerHTML = listaHolgurasConTituloHTML;
}
