namespace Abschlussaufgabe {

    //Subklasse Erde 
    export class Erde extends Planeten {

        constructor() {

            super();
            this.x = 380;
            this.y = 520;
            this.radius = 45;
            this.info = "Die Erde \n Die Erde ist der dichteste, fünftgrößte und der Sonne drittnächste Planet des Sonnensystems. Sie ist Ursprungsort und Heimat aller bekannten Lebewesen. \n Durchmesser: über 12.700 Kilometer \n Alter: 4,6 Mrd. Jahre \n Entfernung von der Sonne: 149.600.000 km \n Umlaufzeit: 365 Tage";
        }

        draw(): void {
            let earth: HTMLImageElement;
            earth = <HTMLImageElement>document.getElementById("Erde");
            crc2.drawImage(earth, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
    }
}
