window.onload = function () {
    var table = document.createElement("table");
    var row = document.createElement("tr");
    var column = document.createElement("td");
    table.appendChild(row);
    row.appendChild(column);
    document.body.appendChild(table);
};
function placeDivs() {
    for (var i = 0; i < 64; i++) {
        var element = document.createElement("div");
        if (i % 2 == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        document.body.appendChild(element);
    }
}
;
//# sourceMappingURL=Aufgabe2.js.map