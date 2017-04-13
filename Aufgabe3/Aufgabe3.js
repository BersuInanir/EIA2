/*
Aufgabe: Aufgabe 3a
Name: Bersu Inanir
Matrikel: 254872
Datum: 8. April 2017
    
Dieser "Code" wurde in Zusammenarbeit mit Lisa Würstle erstellt.
*/
var aufgabe3a;
(function (aufgabe3a) {
    var sum = 0;
    var div;
    window.onload = function () {
        var rice = 1;
        var line = 0;
        var i = 0;
        for (var i_1 = 0; i_1 < 64; i_1++) {
            var element = document.createElement("div");
            if (i_1 < 8) {
                element.addEventListener("click", selectDiv);
            }
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
        div = document.createElement("div");
        div.id = "move";
        document.addEventListener("mousemove", updateRice);
        document.body.appendChild(div);
    };
    function selectDiv(event) {
        var clickedDiv = event.target;
        if (clickedDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }
    function updateRice(event) {
        div.style.top = event.clientY + 10 + "px";
        div.style.left = event.clientX + 10 + "px";
        div.textContent = "Summe zur Basis 10 = " + sum + "Summe zur Basis 16 = " + sum.toString(16);
    }
})(aufgabe3a || (aufgabe3a = {}));
//# sourceMappingURL=Aufgabe3.js.map