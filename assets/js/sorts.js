// Variables
let bars_container = document.getElementById("bars_container");
let slider = document.getElementById("slider");
let output = document.getElementById("output");
let randomizearray = document.getElementById("randomizearray_button");
let sort_button = document.getElementById("sort_button");
let algo_select = document.getElementById("algo");
let heightFactor = 2;

// Helper functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray(numOfBars) {
    let array = new Array(numOfBars);
    for (let i = 0; i < numOfBars; i++) {
        array[i] = randomNum(10, 300);
    }
    return array;
}

// Function to draw bars
async function drawBars(array, color = "blue") {
    bars_container.innerHTML = "";
    let maxValue = Math.max(...array); // Obtenemos el valor máximo en la lista
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        // Establecemos la altura de la barra en función del valor y del valor máximo
        bar.style.height = (array[i] / maxValue) * 500 + "px";
        bar.style.backgroundColor = color;
        bars_container.appendChild(bar);
    }
    await sleep(100);
}


// Algorithm functions
async function shellSort(arr) {
    console.log(arr)
    let bars = document.getElementsByClassName("bar");
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
                bars[j].style.backgroundColor = "orange";
                bars[j - gap].style.backgroundColor = "white";
                await sleep(30);
                bars[j].style.height = arr[j] * heightFactor + 'px';
            }
            arr[j] = temp;
            bars[j].style.height = arr[j] * heightFactor + 'px';
            bars[j].style.backgroundColor = "orange";
            await sleep(30);
        }

    }
    console.log(arr)
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "#A2F314";
    }
    return arr;
}
async function InsertionSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
            bars[j + 1].style.backgroundColor = "white";
            await sleep(30);

            for (let k = 0; k < bars.length; k++) {
                if (k != j + 1) {
                    bars[k].style.backgroundColor = "yellow";
                }
            }
            j = j - 1;
        }
        array[j + 1] = key;
        bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
        bars[j + 1].style.backgroundColor = "yellow";
        await sleep(30);
    }

    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "#A2F314";
    }
    return array;
}

async function selectionSort(arr) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < arr.length; i++) {
        bars[i].style.height = arr[i] * heightFactor + 'px';

        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
                bars[j].style.height = arr[j] * heightFactor + 'px';
            }

        }
        if (lowest !== i) {
            ;
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
            bars[i].style.height = arr[i] * heightFactor + 'px';
            bars[i].style.backgroundColor = "violet";
            bars[lowest].style.backgroundColor = "white";
            await sleep(30);
        }
        await sleep(30)

    }
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "#A2F314";
    }
    return arr
}
async function merge(arr, l, m, r) {
    let bars = document.getElementsByClassName("bar");
    var i, j, k;
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = Array(n1).fill(0);
    var R = Array(n2).fill(0);

    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        bars[i].style.height = arr[i] * heightFactor + "px";
        bars[i].style.backgroundColor = "cyan";
        await sleep(30);
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            bars[k].style.height = arr[k] * heightFactor + "px";
            bars[k].style.backgroundColor = "cyan";
            i++;
        } else {
            arr[k] = R[j];
            bars[k].style.height = arr[k] * heightFactor + "px";
            bars[k].style.backgroundColor = "cyan";
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        bars[k].style.height = arr[k] * heightFactor + "px";
        bars[k].style.backgroundColor = "cyan";
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        bars[k].style.height = arr[k] * heightFactor + "px";
        bars[k].style.backgroundColor = "cyan";
        j++;
        k++;
    }
}
async function mergeSort(arr) {
    let bars = document.getElementsByClassName("bar");
    n = arr.length
    var curr_size;
    var left_start;
    for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
        for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
            var mid = Math.min(left_start + curr_size - 1, n - 1);
            var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
            await merge(arr, left_start, mid, right_end);
        }
        await sleep(30);
    }
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "#A2F314";
    }
}

// Event listeners
randomizearray.addEventListener("click", () => {
    let numOfBars = parseInt(output.innerHTML);
    let newArray = createRandomArray(numOfBars);
    drawBars(newArray);
});

async function measureSortingTime(algorithm, array) {
    let start = performance.now(); // Registra el tiempo de inicio
    
    switch (algorithm) {
        case "shell":
            await shellSort(array);            
            break;
        case "insertion":
            await InsertionSort(array);
            break;
        case "selection":
            await selectionSort(array);
            break;
        case "merge":
            await mergeSort(array);
            break;
        default:
            console.error("Selecciona un algoritmo de ordenamiento válido.");
            break;
    }
    
    let end = performance.now(); // Registra el tiempo de finalización
    let time = end - start; // Calcula el tiempo transcurrido en milisegundos
    
    // Actualizar el elemento HTML para mostrar el tiempo de ordenamiento
    let sortingTimeDisplay = document.getElementById("sorting_time_display");
    if (sortingTimeDisplay) {
        sortingTimeDisplay.innerText = "Tiempo de ordenamiento: " + time.toFixed(2) + " milisegundos";
    } else {
        console.error("No se pudo encontrar el elemento HTML con el ID 'sorting_time_display'.");
    }

    return time; // Devuelve el tiempo de ordenamiento calculado
}




sort_button.addEventListener("click", async () => {
    let start = performance.now();
    let inputArray = document.getElementById("input_array").value.trim();
    let array;
    
    if (inputArray === "") {
        let numOfBars = parseInt(output.innerHTML);
        array = createRandomArray(numOfBars);
        drawBars(array);
    } else {
        array = inputArray.split(",").map(num => parseInt(num.trim()));
        drawBars(array);
    }
    
    let algo = algo_select.value;
    
    switch (algo) {
        case "shell":
            await shellSort(array);            
            break;
        case "insertion":
            await InsertionSort(array);
            break;
        case "selection":
            await selectionSort(array);
            break;
        case "merge":
            await mergeSort(array);
            break;
        default:
            console.error("Selecciona un algoritmo de ordenamiento válido.");
            break;
    }
    
    let sortingTime = await measureSortingTime(algo, array); // Solo se llama a measureSortingTime una vez con await
    
    let sortingTimeDisplay = document.getElementById("sorting_time_display");
    sortingTimeDisplay.innerText = "Tiempo de ordenamiento: " + sortingTime.toFixed(2) + " milisegundos";
});


slider.oninput = function() {
    output.innerHTML = this.value;
    randomizearray.click();
};
