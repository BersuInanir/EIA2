//    let table: HTMLTableElement = document.createElement("table");
//    let row: HTMLTableRowElement = document.createElement("tr");
//    let column: HTMLTableCellElement = document.createElement ("td");
//    
//    table.appendChild(row);
//    row.appendChild(column);
//    
//    document.body.appendChild(table);
//    };
window.onload = function () {
    var rice = 1;
    var line = 0;
    var i = 0;
    for (var i_1 = 0; i_1 < 64; i_1++) {
        var element = document.createElement("div");
        if (((i_1 + line) % 2) == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        if (((i_1 + 1) % 8) == 0) {
            line++;
        }
        element.innerText = " " + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
};
//# sourceMappingURL=Aufgabe2.js.map