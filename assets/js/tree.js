let arbol;
let nodosDataSet;
let aristasDataSet;
let seleccionado;
let modoAgregarNodo = false;
let nodoRoot = null;


function inicializarArbol() {
    const lienzo = document.getElementById('lienzo');
    nodosDataSet = new vis.DataSet();
    aristasDataSet = new vis.DataSet();
    const data = { nodes: nodosDataSet, edges: aristasDataSet };
    // Aquí se definen las opciones, incluida la desactivación de la física
    const opciones = {
        physics: {
        enabled: true // Desactivando con false
        },
        edges: {
            
        },

        nodes: {
            
        }
    };

    arbol = new vis.Network(lienzo, data, opciones);
}

//para agregar nodos al árbol
function agregarNodoArbol() {
    // Solicitar al usuario que ingrese el valor del nodo
    const valor = prompt('Ingrese el valor del nodo:');
    let nodoPadreId;
    
    if (valor !== null) {
        // Crear el nuevo nodo
        const nuevoId = nodosDataSet.length + 1;

        console.log("cantidad de nodos: " + nodosDataSet.length)
        //ve si es el primer nodo creado (root)
        if(nodosDataSet.length <= 0){
          nodosDataSet.add({ id: nuevoId, label: valor, nodoPadreId: null, izquierda: null, derecha: null});
          nodoRoot = nuevoId;
          console.log("Nodo root creado");
        } 
        else {
          let nodoPadre = encontrarNodoPadre(nuevoId);

          nodosDataSet.add({ id: nuevoId, label: valor, nodoPadreId: nodoPadre, izquierda: null, derecha: null});
          aristasDataSet.add({ from: nodoRoot, to: nuevoId});
          console.log("Nuevo nodo creado: " ); 
          if(nodosDataSet.get(nuevoId).label < nodosDataSet.get(nodoPadre).label){
            console.log("izquierda");
            nodosDataSet.set(nodoPadre).izquierda = nuevoId;
            
          } else {
            console.log("derecha");
            nodosDataSet.set(nodoPadre).derecha = nuevoId;
            
          }
          


        }

        console.log("Label nodo root: " + nodosDataSet.get(nodoRoot).label);


        /*
        // Encontrar el nodo padre para el nuevo nodo
        let nodoPadreId = encontrarNodoPadre(nuevoId);

        // Agregar la conexión entre el nuevo nodo y su padre
        aristasDataSet.add({ from: nodoPadreId, to: nuevoId});
        */

        // Desactivar el modo de agregar nodo después de agregarlo
        modoAgregarNodo = false;
    }
}

// Función para encontrar el nodo padre para un nuevo nodo
function encontrarNodoPadre(nuevoId) {
    const nodos = nodosDataSet.get();
    for (const nodo of nodos) {
        const padreId = nodo.id;
        if (aristasDataSet.get({ filter: item => item.to === padreId }).length < 2) {
            return padreId;
        }
    }
    return null;
}


// Inicializar el grafo cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  inicializarArbol();
});




//DESDE AQUÍ HAY CÓDIGO AÚN NO TRATADO

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

// Función para activar el modo de eliminación de arista
function activarModoEliminarArista() {
  modoEliminarArista = true;
  alert('Haz clic en la arista que deseas eliminar.');
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

