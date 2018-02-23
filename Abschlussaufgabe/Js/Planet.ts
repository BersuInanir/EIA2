namespace Abschlussaufgabe {

    //Superklasse für Planeten 
    export class Planeten {

        x: number;
        y: number;
        radius: number;
        firstcolor: string;
        color: string;
        grd: CanvasGradient;
        info: string; //Info-Text für die Planeten

        constructor() {


        }

        //Draw-Methode
        draw(): void {

        }

        // Prüft nach ob angeklickter Punkt innerhalb des Planeten ist
        // Wenn True dann ist klick innerhalb des Planeten 
        // Bestimmt Position des aktuellen Planeten und berechnet den Abstand aus und prüft ob der Abstand kleiner ist als der Radius
        // Vektorrechnung, gibt Funktion die Quadratwurzel einer Zahl zurück 
       
        hasClick(_x: number, _y: number): boolean {
            return Math.sqrt((this.x - _x) * (this.x - _x) + (this.y - _y) * (this.y - _y)) <= this.radius;   
        }


        handleClick(): void {
            if (document.getElementById("Planetinfo") != null) { // Wenn schon ein Element mit der ID "Planetinfo" geöffnet ist, soll mit null keine weitere geöffnet werden 
                return;
            }

            //Div-Box und Button erzeugen
            let div: HTMLDivElement = document.createElement("div");
            let button: HTMLButtonElement = document.createElement("button");
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
        buttonClick(): void {
            let remove: HTMLElement = document.getElementById("Planetinfo");
            document.body.removeChild(remove);
        }



    }
}
