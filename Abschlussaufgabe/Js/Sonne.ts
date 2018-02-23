namespace Abschlussaufgabe {

    // Subklasse Sonne
    export class Sonne extends Planeten {



        constructor() {

            super();
            this.x = 530;
            this.y = 310;
            this.radius = 115;
            this.info = "Die Sonne \n Die Sonne ist der Stern im Zentrum des Sonnensystems \n Oberflächentemperatur: 5.778 Kelvin \n Radius: 695.700 km \n Alter: 4,75 Mrd \n Rotationsperiode: 25,38 Tage";
        }

        draw(): void {
            let sunny: HTMLImageElement;
            sunny = <HTMLImageElement>document.getElementById("Sonne");
            crc2.drawImage(sunny, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
    }
}