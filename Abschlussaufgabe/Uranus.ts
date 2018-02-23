namespace Abschlussaufgabe {

    // Subklasse Uranus 
    export class Uranus extends Planeten {



        constructor() {

            super();
            this.x = 360;
            this.y = 50;
            this.radius = 24;
            this.firstcolor = "white";
            this.color = "blue";
            this.info = "Der Uranus \n Der Uranus ist von der Sonne der siebte Planet im Sonnensystem \n Entfernung von der Sonne: 2,9 Mrd. km \n Umlaufzeit: 84 Jahre";
        }



        draw(): void {
            crc2.beginPath();
            this.grd = crc2.createLinearGradient(280, 280, 600, 150);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            crc2.fillStyle = this.grd;
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
        }
    }
}
