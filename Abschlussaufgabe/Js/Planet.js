var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //Superklasse für Planeten 
    class Planeten {
        constructor() {
        }
        //Draw-Methode
        draw() {
        }
        // Prüft nach ob angeklickter Punkt innerhalb des Planeten ist
        // Wenn True dann ist klick innerhalb des Planeten 
        // Bestimmt Position des aktuellen Planeten und berechnet den Abstand aus und prüft ob der Abstand kleiner ist als der Radius
        // Vektorrechnung
        hasClick(_x, _y) {
            return Math.sqrt((this.x - _x) * (this.x - _x) + (this.y - _y) * (this.y - _y)) <= this.radius;
        }
        handleClick() {
            if (document.getElementById("Planetinfo") != null) {
                return;
            }
            //Div-Box und Button erzeugen
            let div = document.createElement("div");
            let button = document.createElement("button");
            div.id = "Planetinfo";
            button.id = "button";
            button.value = "click";
            button.innerText = "Zurück";
            div.innerText = this.info;
            document.body.appendChild(div);
            document.getElementById("Planetinfo").appendChild(button);
            //EventListener für Button
            button.addEventListener("click", this.buttonClick); //Methode aufrufen
            button.addEventListener("touchstart", this.buttonClick);
        }
        // Durch Klick auf den Button schließt sich die Div-Box 
        buttonClick() {
            let remove = document.getElementById("Planetinfo");
            document.body.removeChild(remove);
        }
    }
    Abschlussaufgabe.Planeten = Planeten;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Planet.js.map