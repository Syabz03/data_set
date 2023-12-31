$(document).ready(function() {
  sortTable();
  reindexTable();
});

function sortTable() {
    var tbl = document.getElementById("datasetTbl").tBodies[0];
    var store = [];
  
    for (var i = 0, len = tbl.rows.length; i < len; i++) {
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[0].textContent || row.cells[0].innerText);
        if(!isNaN(sortnr)) store.push([sortnr, row]);
    }
  
    store.sort(function(x, y) {
        return x[0] - y[0];
    });
  
    for (var i = 0, len = store.length; i < len; i++) {
        tbl.appendChild(store[i][1]);
    }
  
    store = null;
}

function reindexTable() {
  var tbl = document.getElementById("datasetTbl");
  
  for (var i = 1; i < tbl.rows.length; i++) {
    tbl.rows[i].cells[0].innerHTML = i;
  }
}