var nodes = null;
var edges = null;
var network = null;

function destroy() {
  if (network !== null) {
    network.destroy();
    network = null;
  }
}

function draw() {
  destroy();
  // randomly create some nodes and edges
  var nodeCount = document.getElementById("nodeCount").value;
  var data = getScaleFreeNetwork(nodeCount);

  // create a network
  var container = document.getElementById("mynetwork");
  var directionInput = document.getElementById("direction").value;
  var options = {
    layout: {
      hierarchical: {
        direction: directionInput,
      },
    },
  };
  network = new vis.Network(container, data, options);

  // add event listeners
  network.on("select", function (params) {
    document.getElementById("selection").innerText =
      "Selection: " + params.nodes;
  });
}

var directionInput = document.getElementById("direction");
var btnUD = document.getElementById("btn-UD");
btnUD.onclick = function () {
  directionInput.value = "UD";
  draw();
};
var btnDU = document.getElementById("btn-DU");
btnDU.onclick = function () {
  directionInput.value = "DU";
  draw();
};
var btnLR = document.getElementById("btn-LR");
btnLR.onclick = function () {
  directionInput.value = "LR";
  draw();
};
var btnRL = document.getElementById("btn-RL");
btnRL.onclick = function () {
  directionInput.value = "RL";
  draw();
};

window.addEventListener("load", () => {
  draw();
});
