// Modify the Matrix constructor to initialize rows and cols
function Matrix(rows, cols) { //Esto se ejecuta al presionar "CREAR MATRIZ"
    console.log("Se ejecuta Matrix(rows, cols)");
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
    console.log("Se ejecuta extractMatrixDataFromForm()");
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

// Define cols in a scope accessible to both the event listeners and the functions
let cols = 0; // Default value, can be overridden later

function setColsValue(value) {
    cols = value;
}

//---------------------------------------------------

function matrix(rows, cols){ //Esto se ejecuta cuando se presiona "MAXIMIZAR" o "MINIMIZAR"
    console.log("Se ejecuta matrix(rows, cols)");
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
    console.log("Se ejecuta makeForm()");
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
}

function getValuesFromMatrix(){
    console.log("Se ejecuta getValuesFromMatrix()");
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
    console.log("Se ejecuta showMatrixCosts(m))");
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
    console.log("Se ejecuta showMatrixUnits(m)");
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
    console.log("Se ejecuta showMatrixShadows(m");
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
    console.log("Se ejecuta showMatrixImps(m)");
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
    console.log("Se ejecuta northWestStep(m, i, j)");
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
    console.log("Se ejecuta northWest(m)");
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
    console.log("Se ejecuta shadowCosts(m)");
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
    console.log("Se ejecuta improvementIndices(m)");
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
    console.log("Se ejecuta clearStones(m)");
	for (var i = 0; i < m.r; i++) {
		for (var j = 0; j < m.c; j++) {
			m.stones[i][j] = 'X';			
		}
	}
}

function clearImps(m) {
    console.log("Se ejecuta clearImps(m)");
	for (var i = 0; i < m.r; i++) {
		for (var j = 0; j < m.c; j++) {
			m.imp[i][j] = 'X';
		}	
	}
}

function clearShadows(m) {
    console.log("Se ejecuta clearShadows(m)");
	for (var i = 0; i < m.r; i++) {
		m.shadowS[i] = 'X';
	}
	for (var j = 0; j < m.c; j++) {
		m.shadowD[j] = 'X';	
	}
}

function findCellsInRowAndColumn(m, c){
    console.log("Se ejecuta findCellsInRowAndColumn(m, c)");
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
    console.log("Se ejecuta findClosedPath(m)");
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
    console.log("Se ejecuta improvedAllocation(m, cellsList)");
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

function doAlgorithm() {
    console.log("Se ejecuta doAlgorithm()");
    // Clear output div when button is re-pressed
    document.getElementById('findOptimal').innerHTML = '';
    var matrix = getValuesFromMatrix();
	console.log(matrix);
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
    console.log("Se ejecuta improvedAllocationm(m, cellsList)");
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
    console.log("Se ejecuta moAlgorithm()");
    // Clear output div when button is re-pressed
    document.getElementById('findOptimal').innerHTML = '';
    var matrix = getValuesFromMatrix();
	console.log(matrix);
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
    console.log("Se ejecuta improvedAllocationm(m, cellsList)");
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
    console.log("Se ejecuta northWestm(m)");
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
    console.log("Se ejecuta northWestStepm(m, i, j)");
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
    console.log("Se ejecuta improvementIndicesm(m)");
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

// Función para guardar la matriz en localStorage
function guardarMatriz() {
    console.log("Se ejecuta guardarMatriz(m)");
    const nombreArchivo = prompt('Por favor, ingresa un nombre para guardar:', 'nw_matriz');

    if (nombreArchivo !== null) {
		cantFilas = Math.abs(parseInt(document.sizeForm.rowValue.value));
		cantColumnas = Math.abs(parseInt(document.sizeForm.colValue.value));

		var counter=((cantFilas + 1)*(cantColumnas + 1)) - 1;
		tabla_guardar = [];
		var c;
		for(c = 0; c<counter; c++){
			console.log(Math.abs(parseFloat(document.networkForm.elements[c].value)));
			tabla_guardar.push(Math.abs(parseFloat(document.networkForm.elements[c].value)));

		}
        const datos = {
            cFilas: cantFilas,
            cColumnas: cantColumnas,
            tabla: tabla_guardar,
        };
        const grafoJSON = JSON.stringify(datos);
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

// Función para cargar la matriz desde localStorage
function cargarMatriz() {
    const inputArchivo = document.getElementById('inputArchivo');
    const file = inputArchivo.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const contenido = event.target.result;
        const datos = JSON.parse(contenido);
        // Limpiar rowValue y colValue si tuvieran algo
        document.sizeForm.rowValue.value = '';
        document.sizeForm.colValue.value = '';
        // Asignar valores cargados a rowValue y colValue
        document.sizeForm.rowValue.value = datos.cFilas;
        document.sizeForm.colValue.value = datos.cColumnas;
		tabla_guardada = datos.tabla;
		//crea la tabla (vacía)
		makeForm();

		// Para llenar la tabla :3
		cantFilas = Math.abs(parseInt(document.sizeForm.rowValue.value));
		cantColumnas = Math.abs(parseInt(document.sizeForm.colValue.value));
		var counter=((cantFilas + 1)*(cantColumnas + 1)) - 1;
		var c;
		for(c = 0; c<counter; c++){
			document.networkForm.elements[c].value = tabla_guardada[c];
		}
        console.log("Archivo cargado correctamente:", datos);
    };
    reader.readAsText(file);
}
