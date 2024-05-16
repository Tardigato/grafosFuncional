let arbol;
let nodosDataSet;
let aristasDataSet;
let seleccionado;
let modoAgregarNodo = false;
let nodoRoot = null;
let arbol_pre_order = "";
let arbol_in_order = "";
let arbol_post_order = "";


function inicializarArbol() {
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
          smooth: false, // Aristas curvas
        },

        nodes: {
            
        }
    };

    arbol = new vis.Network(lienzo, data, opciones);
}

function calcularEspacios(nodoId, nivel = 0) {
  if (nodoId == null) return { width: 0, pos: [] };

  const nodo = nodosDataSet.get(nodoId);
  const espacioHorizontalBase = 50;

  // Calcular espacios para los hijos
  const espacioIzquierda = calcularEspacios(nodo.izquierda, nivel + 1);
  const espacioDerecha = calcularEspacios(nodo.derecha, nivel + 1);

  // Calcular el ancho necesario para este subárbol
  const width = Math.max(espacioIzquierda.width + espacioDerecha.width + espacioHorizontalBase, espacioHorizontalBase);
  const pos = [];

  // Ajustar las posiciones de los nodos hijos
  let posXIzquierda = -width / 2 + (espacioIzquierda.width / 2);
  let posXDerecha = width / 2 - (espacioDerecha.width / 2);

  if (nodo.izquierda != null) {
      pos.push(...espacioIzquierda.pos.map(p => ({ ...p, x: p.x + posXIzquierda, y: p.y + 50 })));
  }

  if (nodo.derecha != null) {
      pos.push(...espacioDerecha.pos.map(p => ({ ...p, x: p.x + posXDerecha, y: p.y + 50 })));
  }

  pos.push({ id: nodoId, x: 0, y: nivel * 50 });

  return { width, pos };
}

function ajustarPosiciones(nodoId) {
  const espacios = calcularEspacios(nodoId);
  for (const pos of espacios.pos) {
      const nodo = nodosDataSet.get(pos.id);
      nodo.x = pos.x;
      nodo.y = pos.y - 200;
      nodosDataSet.update(nodo);
  }
}

function agregarNodoArbol() {
  // Solicitar al usuario que ingrese el valor del nodo
  const valor = prompt('Ingrese el valor del nodo:');
  if (valor !== null) {
      agregarNodoArbolRec(valor, nodoRoot); // Llamar a la función recursiva con el valor y el ID de la raíz
      ajustarPosiciones(nodoRoot); // Ajustar posiciones después de agregar el nodo
  }
}

function agregarNodoArbolRec(valor, nodoActualId) {
  if (valor === null) {
      return; // Si el usuario cancela, no hacemos nada
  }

  if (buscarNodoArbol(valor, nodoRoot) === -1) {
      console.log("Ese nodo no existe aún :)");
      // Verificar si es el primer nodo (raíz)
      if (nodosDataSet.length === 0) {
          nodosDataSet.add({ id: 1, label: valor, nodoPadreId: null, izquierda: null, derecha: null, x: 0, y: -200 });
          nodoRoot = 1;
          console.log("Nodo root creado");
          return;
      }
      const valorActual = nodosDataSet.get(nodoActualId).label;

      if (parseFloat(valor) < parseFloat(valorActual)) {
          let nodoIzquierdoId = nodosDataSet.get(nodoActualId).izquierda;
          if (nodoIzquierdoId == null) {
              // Si no hay nodo izquierdo, agregamos el nuevo nodo aquí
              let nuevoId = nodosDataSet.length + 1;
              nodosDataSet.add({ id: nuevoId, label: valor, nodoPadreId: nodoActualId, izquierda: null, derecha: null, x: nodosDataSet.get(nodoActualId).x - 100, y: nodosDataSet.get(nodoActualId).y + 70 });
              aristasDataSet.add({ from: nodoActualId, to: nuevoId });
              console.log("Nuevo nodo creado a la izquierda de " + valorActual);
              nodosDataSet.update({ id: nodoActualId, izquierda: nuevoId });
          } else {
              // Si hay nodo izquierdo, continuamos buscando hacia abajo
              agregarNodoArbolRec(valor, nodoIzquierdoId); // Llamada recursiva con el ID del nodo izquierdo
          }
      } else {
          let nodoDerechoId = nodosDataSet.get(nodoActualId).derecha;
          if (nodoDerechoId == null) {
              // Si no hay nodo derecho, agregamos el nuevo nodo aquí
              let nuevoId = nodosDataSet.length + 1;
              nodosDataSet.add({ id: nuevoId, label: valor, nodoPadreId: nodoActualId, izquierda: null, derecha: null, x: nodosDataSet.get(nodoActualId).x + 100, y: nodosDataSet.get(nodoActualId).y + 70 });
              aristasDataSet.add({ from: nodoActualId, to: nuevoId });
              console.log("Nuevo nodo creado a la derecha de " + valorActual);
              nodosDataSet.update({ id: nodoActualId, derecha: nuevoId });
          } else {
              // Si hay nodo derecho, buscamos hacia abajo en el subárbol derecho
              agregarNodoArbolRec(valor, nodoDerechoId);
          }
      }

  } else {
      console.log("Este nodo ya existe :( ");
  }
}

function preOrder(){
  arbol_pre_order = ""; // Reiniciar la variable global
  console.log("PRE ORDER");
  preOrderRec(nodoRoot);
  // Mostrar preorder en pantalla
  document.getElementById('preorder').textContent = "PRE ORDER: " + arbol_pre_order;
  console.log(arbol_pre_order);
}

function preOrderRec(nodoId) {
  if (nodoId != null) {
    const nodo = nodosDataSet.get(nodoId);
    arbol_pre_order += nodo.label + " "; // Acumular el texto del nodo
    console.log(nodo.label + " "); // Visitamos el nodo actual
    // Luego recorremos el subárbol izquierdo
    preOrderRec(nodo.izquierda);
    // Finalmente, recorremos el subárbol derecho
    preOrderRec(nodo.derecha);
  }
}

function inOrder(){
  arbol_in_order = ""; // Reiniciar la variable global
  console.log("IN ORDER");
  inOrderRec(nodoRoot);
  // Mostrar preorder en pantalla
  document.getElementById('inorder').textContent = "IN ORDER: " + arbol_in_order;
  console.log(arbol_in_order);
}

function inOrderRec(nodoId) {
  if (nodoId != null) {
    const nodo = nodosDataSet.get(nodoId);
    // Luego recorremos el subárbol izquierdo
    inOrderRec(nodo.izquierda);
    arbol_in_order += nodo.label + " "; // Acumular el texto del nodo
    console.log(nodo.label + " "); // Visitamos el nodo actual
    // Finalmente, recorremos el subárbol derecho
    inOrderRec(nodo.derecha);
  }
}

function postOrder(){
  arbol_post_order = ""; // Reiniciar la variable global
  console.log("POST ORDER");
  postOrderRec(nodoRoot);
  // Mostrar preorder en pantalla
  document.getElementById('postorder').textContent = "POST ORDER: " + arbol_post_order;
  console.log(arbol_post_order);
}

function postOrderRec(nodoId) {
  if (nodoId != null) {
    const nodo = nodosDataSet.get(nodoId);
    // Luego recorremos el subárbol izquierdo
    postOrderRec(nodo.izquierda);
    // Finalmente, recorremos el subárbol derecho
    postOrderRec(nodo.derecha);
    arbol_post_order += nodo.label + " "; // Acumular el texto del nodo
    console.log(nodo.label + " "); // Visitamos el nodo actual
  }
}

// Función para guardar el grafo con un nombre proporcionado por el usuario
function guardarArbol() {
  const nombreArchivo = prompt('Por favor, ingresa un nombre para guardar el árbol:', 'arbol');
  if (nombreArchivo !== null) {
    const grafoJSON = JSON.stringify({ nodos: nodosDataSet.get(), aristas: aristasDataSet.get()});
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
function cargarArbol() {
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
  nodoRoot = 1;
}

function pre_in() {
  const preOrder = document.getElementById("lista1").value.trim().split(/\s+/);
  const inOrder = document.getElementById("lista2").value.trim().split(/\s+/);
  if (!listasTienenLosMismosElementos(preOrder, inOrder)) {
      alert("Ambas listas deben tener los mismos elementos para poder construir el árbol.");
      return;
  }
  reconstruirDesdePreIn(preOrder, inOrder);
  ajustarPosiciones(nodoRoot);
}

function reconstruirDesdePreIn(preOrder, inOrder) {
  nodosDataSet.clear();
  aristasDataSet.clear();
  nodoRoot = construirArbolDesdePreIn(preOrder, inOrder, 0, preOrder.length - 1, 0, inOrder.length - 1);
}

function construirArbolDesdePreIn(preOrder, inOrder, preInicio, preFin, inInicio, inFin) {
  if (preInicio > preFin || inInicio > inFin) {
      return null;
  }
  const root = preOrder[preInicio];
  nodosDataSet.add({ id: root, label: root, izquierda: null, derecha: null });
  const rootIndexInOrder = inOrder.indexOf(root);
  const izquierdaTamano = rootIndexInOrder - inInicio;
  const izquierdaRoot = construirArbolDesdePreIn(preOrder, inOrder, preInicio + 1, preInicio + izquierdaTamano, inInicio, rootIndexInOrder - 1);
  const derechaRoot = construirArbolDesdePreIn(preOrder, inOrder, preInicio + izquierdaTamano + 1, preFin, rootIndexInOrder + 1, inFin);
  if (izquierdaRoot !== null) {
      aristasDataSet.add({ from: root, to: izquierdaRoot });
      nodosDataSet.update({ id: root, izquierda: izquierdaRoot });
  }
  if (derechaRoot !== null) {
      aristasDataSet.add({ from: root, to: derechaRoot });
      nodosDataSet.update({ id: root, derecha: derechaRoot });
  }
  return root;
}

function post_in() {
  const postOrder = document.getElementById("lista1").value.trim().split(/\s+/);
  const inOrder = document.getElementById("lista2").value.trim().split(/\s+/);
  if (!listasTienenLosMismosElementos(postOrder, inOrder)) {
    alert("Ambas listas deben tener los mismos elementos para poder construir el árbol.");
    return;
  }
  reconstruirDesdePostIn(postOrder, inOrder);
  ajustarPosiciones(nodoRoot);
}

function reconstruirDesdePostIn(postOrder, inOrder) {
  nodosDataSet.clear();
  aristasDataSet.clear();
  nodoRoot = construirArbolDesdePostIn(postOrder, inOrder, 0, postOrder.length - 1, 0, inOrder.length - 1);
}

function construirArbolDesdePostIn(postOrder, inOrder, postInicio, postFin, inInicio, inFin) {
  if (postInicio > postFin || inInicio > inFin) {
      return null;
  }
  const root = postOrder[postFin];
  nodosDataSet.add({ id: root, label: root, izquierda: null, derecha: null });
  const rootIndexInOrder = inOrder.indexOf(root);
  const izquierdaTamano = rootIndexInOrder - inInicio;
  const izquierdaRoot = construirArbolDesdePostIn(postOrder, inOrder, postInicio, postInicio + izquierdaTamano - 1, inInicio, rootIndexInOrder - 1);
  const derechaRoot = construirArbolDesdePostIn(postOrder, inOrder, postInicio + izquierdaTamano, postFin - 1, rootIndexInOrder + 1, inFin);
  if (izquierdaRoot !== null) {
      aristasDataSet.add({ from: root, to: izquierdaRoot });
      nodosDataSet.update({ id: root, izquierda: izquierdaRoot });
  }
  if (derechaRoot !== null) {
      aristasDataSet.add({ from: root, to: derechaRoot });
      nodosDataSet.update({ id: root, derecha: derechaRoot });
  }
  return root;
}

function pre_post() {
  const preOrder = document.getElementById("lista1").value.trim().split(/\s+/);
  const postOrder = document.getElementById("lista2").value.trim().split(/\s+/);
  if (!listasTienenLosMismosElementos(preOrder, postOrder)) {
    alert("Ambas listas deben tener los mismos elementos para poder construir el árbol.");
    return;
  }
  reconstruirDesdePrePost(preOrder, postOrder);
  ajustarPosiciones(nodoRoot);
}

function reconstruirDesdePrePost(preOrder, postOrder) {
  nodosDataSet.clear();
  aristasDataSet.clear();
  nodoRoot = construirArbolDesdePrePost(preOrder, postOrder, 0, preOrder.length - 1, 0, postOrder.length - 1);
}

function construirArbolDesdePrePost(preOrder, postOrder, preInicio, preFin, postInicio, postFin) {
  if (preInicio > preFin || postInicio > postFin) {
      return null;
  }
  const root = preOrder[preInicio];
  nodosDataSet.add({ id: root, label: root, izquierda: null, derecha: null });
  if (preInicio === preFin) {
      return root;
  }
  
  const siguienteRoot = preOrder[preInicio + 1];
  const rootIndexPostOrder = postOrder.indexOf(siguienteRoot);
  const izquierdaTamano = rootIndexPostOrder - postInicio + 1;
  const izquierdaRoot = construirArbolDesdePrePost(preOrder, postOrder, preInicio + 1, preInicio + izquierdaTamano, postInicio, rootIndexPostOrder);
  const derechaRoot = construirArbolDesdePrePost(preOrder, postOrder, preInicio + izquierdaTamano + 1, preFin, rootIndexPostOrder + 1, postFin - 1);
  
  if (izquierdaRoot !== null) {
    aristasDataSet.add({ from: root, to: izquierdaRoot });
    nodosDataSet.update({ id: root, izquierda: izquierdaRoot });
  }
  if (derechaRoot !== null) {
      aristasDataSet.add({ from: root, to: derechaRoot });
      nodosDataSet.update({ id: root, derecha: derechaRoot });
  }
  
  // Aquí está la lógica para decidir si el siguiente nodo debe ir a la izquierda o derecha
  if (parseFloat(siguienteRoot) < parseFloat(root)) {
      if (izquierdaRoot === null) {
          aristasDataSet.add({ from: root, to: siguienteRoot });
          nodosDataSet.update({ id: root, izquierda: siguienteRoot });
      }
  } else {
      if (derechaRoot === null) {
          aristasDataSet.add({ from: root, to: siguienteRoot });
          nodosDataSet.update({ id: root, derecha: siguienteRoot });
      }
  }
  
  return root;
}

// Función para calcular la profundidad del árbol
function calcularProfundidad(nodoId) {
  if (nodoId == null) {
      return 0;
  }
  const nodo = nodosDataSet.get(nodoId);
  const profundidadIzquierda = calcularProfundidad(nodo.izquierda);
  const profundidadDerecha = calcularProfundidad(nodo.derecha);
  return Math.max(profundidadIzquierda, profundidadDerecha) + 1;
}

// Función para calcular la profundidad del árbol y mostrarla en la consola
function calcularProfundidadArbol() {
  const profundidad = calcularProfundidad(nodoRoot);
  console.log("Profundidad del árbol:", profundidad);
}

// Función para buscar un nodo en el árbol por su valor
function buscarNodoArbol(valor, nodoActualId) {
  if (nodoActualId == null) {
      return -1;
  }
  const nodoActual = nodosDataSet.get(nodoActualId);
  if (nodoActual.label === valor) {
      return nodoActual; // Devolver el nodo si se encuentra
  }
  if (valor < nodoActual.label) {
      // Buscar en el subárbol izquierdo
      return buscarNodoArbol(valor, nodoActual.izquierda);
  } else {
      // Buscar en el subárbol derecho
      return buscarNodoArbol(valor, nodoActual.derecha);
  }
}

function listasTienenLosMismosElementos(lista1, lista2) {
  if (lista1.length !== lista2.length) {
      return false;
  }
  const frecuencia1 = contarFrecuenciaElementos(lista1);
  const frecuencia2 = contarFrecuenciaElementos(lista2);
  for (let elemento in frecuencia1) {
      if (frecuencia1[elemento] !== frecuencia2[elemento]) {
          return false;
      }
  }
  return true;
}

function contarFrecuenciaElementos(lista) {
  const frecuencia = {};
  for (let i = 0; i < lista.length; i++) {
      const elemento = lista[i];
      if (frecuencia[elemento]) {
          frecuencia[elemento]++;
      } else {
          frecuencia[elemento] = 1;
      }
  }
  return frecuencia;
}

// Inicializar el grafo cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  inicializarArbol();
});

function comodin(){
  calcularProfundidadArbol();
}


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
