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
    const opciones = { 
        physics: {
            enabled: false // Desactivando con false
          },
          edges:{
            smooth: false,
          }
    };
    grafo = new vis.Network(lienzo, data, opciones);

    grafo.on('click', clicNodo);
}

function agregarNodo() {
    modoAgregarNodo = true;
    grafo.off('click');
    grafo.on('click', function(event) {
        if (modoAgregarNodo) {
            let xa = parseFloat(prompt('Ingrese la coordenada X del nodo:'));
            let ya = parseFloat(prompt('Ingrese la coordenada Y del nodo:'));
            const position = event.pointer.canvas;
            const nuevoId = nodosDataSet.length + 1;
            nodosDataSet.add({ id: nuevoId, label: 'Nodo ' + nuevoId, x: position.x, y: position.y, userX: xa, userY: ya });
            modoAgregarNodo = false;
            grafo.off('click', arguments.callee);
            grafo.on('click', clicNodo);
        }
    });
}

function eliminarNodo() {
    if (seleccionado !== undefined && nodosDataSet.get(seleccionado)) {
        nodosDataSet.remove({ id: seleccionado });
        const aristas = aristasDataSet.get({ filter: function (item) { return item.from === seleccionado || item.to === seleccionado; } });
        aristas.forEach(function (arista) {
            aristasDataSet.remove({ id: arista.id });
        });
        seleccionado = undefined; // Clear the selection after deletion
    } else {
        alert('Por favor, seleccione un nodo primero.');
    }
}

function cambiarNombre() {
    if (seleccionado !== undefined && nodosDataSet.get(seleccionado)) {
        const nodo = nodosDataSet.get(seleccionado);
        const nuevoNombre = prompt('Ingrese el nuevo nombre para el nodo:', nodo.label);
        if (nuevoNombre !== null) {
            nodosDataSet.update({ id: seleccionado, label: nuevoNombre });
        }
        seleccionado = undefined;
    } else {
        alert('Por favor, seleccione un nodo primero.');
    }
}

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

function cargarGrafo() {
    const inputArchivo = document.getElementById('inputArchivo');
    const file = inputArchivo.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const contenido = event.target.result;
        const datos = JSON.parse(contenido);
        nodosDataSet.clear();
        aristasDataSet.clear();
        nodosDataSet.add(datos.nodos);
        aristasDataSet.add(datos.aristas);
    };
    reader.readAsText(file);
}

function calcularBaricentro() {
    const nodos = nodosDataSet.get();
    const totalNodos = nodos.length;

    if (totalNodos > 0) {
        let sumaUserX = 0, sumaUserY = 0;
        let sumaGraficoX = 0, sumaGraficoY = 0;

        nodos.forEach(nodo => {
            sumaUserX += nodo.userX;
            sumaUserY += nodo.userY;
            sumaGraficoX += nodo.x;
            sumaGraficoY += nodo.y;
        });

        const baricentroUserX = sumaUserX / totalNodos;
        const baricentroUserY = sumaUserY / totalNodos;
        const baricentroGraficoX = sumaGraficoX / totalNodos;
        const baricentroGraficoY = sumaGraficoY / totalNodos;

        if (nodoCentralId !== null) {
            nodosDataSet.remove(nodoCentralId);
        }

        nodoCentralId = Math.max(...nodos.map(n => n.id)) + 1;

        nodosDataSet.add({
            id: nodoCentralId,
            label: ` (${baricentroUserX.toFixed(2)}, ${baricentroUserY.toFixed(2)})`,
            x: baricentroGraficoX,
            y: baricentroGraficoY,
            userX: baricentroUserX,
            userY: baricentroUserY,
            color: 'green',
            fixed: true
        });

        const baricentroTextoElement = document.getElementById('baricentroTexto');
        if (baricentroTextoElement) {
            baricentroTextoElement.innerText = `Posición del Baricentro: (${baricentroUserX.toFixed(2)}, ${baricentroUserY.toFixed(2)})`;
        }
    } else {
        alert('No hay nodos en el grafo.');
    }
}

function mostrarPosiciones() {
    const nodos = nodosDataSet.get();
    const posiciones = nodos.map(nodo => {
        if (nodo.userX !== undefined && nodo.userY !== undefined) {
            return `Nodo ${nodo.label}: (${nodo.userX}, ${nodo.userY})`;
        } else {
            return `Nodo ${nodo.label}`;
        }
    }).join('\n');
    document.getElementById('textoPosiciones').innerText = `Posiciones de los nodos:\n${posiciones}`;
    document.getElementById('contenedorPosiciones').style.display = 'block';
}

function mostrarFormularioPosicionIndividual() {
    const formPosicionIndividual = document.getElementById('formPosicionIndividual');
    const nodoSelect = document.getElementById('nodoSelect');
    nodoSelect.innerHTML = '';
    nodosDataSet.get().forEach(nodo => {
        if (nodo.id !== nodoCentralId) {
            const option = document.createElement('option');
            option.value = nodo.id;
            option.textContent = nodo.label;
            nodoSelect.appendChild(option);
        }
    });
    formPosicionIndividual.style.display = 'block';
}

function guardarPosicionIndividual() {
    const nodoSelect = document.getElementById('nodoSelect');
    const nodoId = nodoSelect.value;
    const posX = parseFloat(document.getElementById('posX').value);
    const posY = parseFloat(document.getElementById('posY').value);

    nodosDataSet.update({ id: parseInt(nodoId), userX: posX, userY: posY });
}

function clicNodo(parametros) {
    if (parametros.nodes.length) {
        seleccionado = parametros.nodes[0];
        console.log(`Nodo ${seleccionado} seleccionado`);
    } else {
        seleccionado = undefined;
    }
}

document.addEventListener('DOMContentLoaded', inicializarGrafo);
