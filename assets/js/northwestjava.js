let grafo;
let nodosDataSet;
let aristasDataSet;
let seleccionado;
let modoEliminarArista = false;
let modoAgregarNodo = false;

function inicializarGrafo() {
    const lienzo = document.getElementById('lienzo');
    nodosDataSet = new vis.DataSet();
    aristasDataSet = new vis.DataSet();
    const data = { nodes: nodosDataSet, edges: aristasDataSet };
    const opciones = {};
    grafo = new vis.Network(lienzo, data, opciones);

    grafo.on('click', clicEnNodo);
    grafo.on('doubleClick', dobleClicEnArista);
    grafo.on('click', eliminarAristaSeleccionada);
}

var options = {
    physics: {
        enabled: false
    }
};

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

function agregarNodo(tipo) {
    modoAgregarNodo = true;

    grafo.off('click');

    grafo.on('click', function(event) {
        if (modoAgregarNodo) {
            const position = event.pointer.canvas;
            const nuevoId = nodosDataSet.length + 1;

            let label;
            let valorNodo;
            if (tipo === 'oferta') {
                label = 'Oferta';
            } else if (tipo === 'demanda') {
                label = 'Demanda';
            } else {
                console.error('Tipo de nodo no válido');
                return;
            }

            let nombreValido = false;
            while (!nombreValido) {
                valorNodo = prompt(`Ingrese el valor para el nodo ${label} ${nuevoId} (debe ser un número entero):`, '');
                if (/^\d+$/.test(valorNodo)) {
                    nombreValido = true;
                } else {
                    alert('El valor debe ser un número entero.');
                }
            }

            label += ' ' + valorNodo;

            // Agregar el nuevo nodo con el valor ingresado por el usuario
            nodosDataSet.add({ id: nuevoId, label: label, x: position.x, y: position.y });

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
        const aristas = aristasDataSet.get({ filter: function(item) { return item.from === seleccionado || item.to === seleccionado; } });
        aristas.forEach(function(arista) {
            aristasDataSet.remove({ id: arista.id });
        });
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



function calcularNorthwest() {
    const nodos = nodosDataSet.get({ fields: ['id', 'label'] });
    const aristas = aristasDataSet.get({ fields: ['from', 'to', 'label'] });

    // Initialize arrays for supply, demand, and costs
    let oferta = [];
    let demanda = [];
    let costos = []; // Initialize cost matrix

    // Extract supply and demand from node labels
    nodos.forEach(nodo => {
        const valor = parseInt(nodo.label.split(' ')[1]);
        if (nodo.label.startsWith('Oferta')) {
            oferta.push(valor);
        } else if (nodo.label.startsWith('Demanda')) {
            demanda.push(valor);
        }
    });

    // Populate cost matrix based on edge labels and node IDs
    for (let i = 0; i < nodos.length; i++) {
        costos[i] = [];
        for (let j = 0; j < nodos.length; j++) {
            costos[i][j] = 0; // Initialize each cell with zero
        }
    }

    aristas.forEach(arista => {
        const fromId = arista.from;
        const toId = arista.to;
        const valor = parseInt(arista.label) || 0;

        // Find corresponding node indices in the cost matrix
        const fromIndex = nodos.findIndex(node => node.id === fromId);
        const toIndex = nodos.findIndex(node => node.id === toId);

        if (fromIndex !== -1 && toIndex !== -1) {
            // Update the cost matrix with the value
            costos[fromIndex][toIndex] = valor;
        } else {
            console.error("No se encontraron los nodos correspondientes para la arista:", arista);
        }
    });

    // Check if oferta and demanda arrays are not empty
    if (oferta.length === 0 || demanda.length === 0) {
        console.warn("La oferta o la demanda está vacía.");
        return;
    }

    // Log the current state of oferta and demanda arrays
    console.log("Oferta:", oferta);
    console.log("Demanda:", demanda);

    // Create copies of oferta and demanda arrays
    let oferta2 = [...oferta];
    let demanda2 = [...demanda];

    // Calculate Northwest corner matrix
    let nwc = [];
    let i = 0;
    let j = 0;

    // Initialize the Northwest corner matrix with zeros
    for (let k = 0; k < oferta.length; k++) {
        nwc.push(new Array(demanda.length).fill(0));
    }

    while (i < oferta.length && j < demanda.length) {
        let x = Math.min(oferta[i], demanda[j]); // Calculate the amount to be allocated

        // Update the Northwest corner matrix with the calculated amount
        nwc[i][j] = x;

        // Adjust supply and demand
        oferta[i] -= x;
        demanda[j] -= x;

        // Move to the next row or column based on the remaining supply or demand
        if (oferta[i] === 0) i++;
        if (demanda[j] === 0) j++;
    }

    // Calculate total cost
    let totalCost = 0;
    for (let i = 0; i < oferta2.length; i++) {
        for (let j = 0; j < demanda2.length; j++) {
            totalCost += nwc[i][j] * costos[i][j]; // Multiply the amount in the Northwest corner matrix by the corresponding cost
        }
    }

    // Log the results
    generarMatriz(oferta2, demanda2, nwc, totalCost);
    console.log("Northwest corner matrix (NWC):", nwc);
    console.log("Total cost =", totalCost);
    console.log("Supply (Oferta):", oferta);
    console.log("Demand (Demanda):", demanda);
    console.log("Cost matrix (Costos):", costos);
}


function generarMatriz(oferta, demanda, nwc, totalCost) {
    const contenedorMatriz = document.getElementById('matriz');
    let html = '<h2>Matriz de Asignaciones del Algoritmo Northwest</h2>';
    html += '<table style="border-collapse: collapse;border: 2px solid black;">'; // Added style for border collapse
    html += '<tr><th style="padding: 10px;border: 2px solid black;"></th>'; // Added padding to header cells
    for (let i = 0; i < demanda.length; i++) {
        html += `<th style="padding: 10px;border: 2px solid black;">${i + 1}</th>`; // Added padding to header cells
    }
    html += '<th style="padding: 10px;background-color: red;border: 2px solid black;">| Oferta</th>'; // Added padding to header cell
    html += '</tr>';
    for (let i = 0; i < oferta.length; i++) {
        html += `<tr><th style="padding: 10px;border: 2px solid black;">${i + 1}</th>`; // Added padding to row header cell
        for (let j = 0; j < demanda.length; j++) {
            html += `<td style="padding: 10px;border: 2px solid black;">${nwc[i][j]}</td>`; // Added padding to data cells
        }
        html += `<td style="padding: 10px;border: 2px solid black;">${oferta[i]}</td>`; // Added padding to data cell
        html += '</tr>';
    }
    html += '<tr><th style="padding: 10px;background-color: green;border: 2px solid black;">Demanda |</th>'; // Added padding to row header cell
    for (let j = 0; j < demanda.length; j++) {
        html += `<td style="padding: 10px;border: 2px solid black;">${demanda[j]}</td>`; // Added padding to data cells
    }
    //html += `<td>Total cost: ${totalCost}</td>`;
    html += '</tr>';
    html += '</table>';
    contenedorMatriz.innerHTML = html;
}



document.addEventListener('DOMContentLoaded', () => {
    inicializarGrafo();
});
