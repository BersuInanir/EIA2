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
    /// Aufgabe 3a //////////
    var divs = document.getElementsByTagName("div");
    for (var i_2 = 0; i_2 < 9; i_2++) {
        divs[i_2].addEventListener("click", handleEvent);
        console.log(Math.pow(2, i_2).toString(16));
    }
    var selected;
    function handleEvent(event) {
        selected = event.target;
        selected.classList.toggle("selected");
        if (selected.length > 1) {
            document.getElementById("field").style.display = "inline";
        }
        else {
            document.getElementById("field").style.display = "none";
        }
        console.log(selected.textContent);
    }
    function moveDiv(event) {
        var style = selected.style;
        style.position = "absolute";
        style.left = event.clientX.toString() + "px";
        style.top = event.clientY.toString() + "px";
    }
};
//# sourceMappingURL=Aufgabe3.js.map