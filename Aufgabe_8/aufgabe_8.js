//Aufgabe 8
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 10.Dezember.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var DynHTML;
(function (DynHTML) {
    window.addEventListener("load", input);
    function input() {
        let box = parseInt(prompt("Geben Sie eine Zahl zwischen 10 & 100 ein")); //number wird in string umgewandelt
        if (box >= 10 && box <= 100) {
            for (let i = 0; i < box; i++) {
                createDiv("hsl(" + Math.random() * 360 + ", 70%, 70%)", Math.random() * 1000 + 200, Math.random() * 800); //random Werte f�r Farbe, x und y 
            }
        }
        else {
            alert("Bitte nur Werte zwischen 10 und 100 eingeben"); //Wenn Bedingung nicht erf�llt ist 
            input();
        }
    }
    function createDiv(_color, _x, _y) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let box = div.style;
        box.width = "20px";
        box.height = "20px";
        box.backgroundColor = _color;
        box.borderRadius = "50px";
        box.left = _x + "px";
        box.bottom = _x + "px";
        box.bottom = _y + "px";
        box.right = _y + "px";
    }
})(DynHTML || (DynHTML = {}));
//# sourceMappingURL=aufgabe_8.js.map