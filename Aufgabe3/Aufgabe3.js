/*
Aufgabe: Aufgabe 3a
Name: Bersu Inanir
Matrikel: 254872
Datum: 8. April 2017
    
Dieser "Code" wurde in Zusammenarbeit mit Lisa Würstle erstellt.


*/
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
//# sourceMappingURL=Aufgabe3.js.map