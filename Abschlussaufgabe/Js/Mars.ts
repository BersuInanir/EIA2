namespace Abschlussaufgabe {

    //Subklasse Mars 
    export class Mars extends Planeten {



        constructor() {

            super();
            this.x = 590;
            this.y = 555;
            this.radius = 26;
            this.firstcolor = "#8c4c21";
            this.color = "#b51d09";
            this.info = "Der Mars \n Der Mars ist, von der Sonne aus gezählt, der vierte Planet im Sonnensystem und der äußere Nachbar der Erde \n Radius: 3.390 km \n Entfernung von der Sonne: 227.900.000 km \n Umlaufzeit: 687 Tage";
        }



        draw(): void {
            crc2.beginPath();
            this.grd = crc2.createLinearGradient(530, 500, 600, 480);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            crc2.fillStyle = this.grd;
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
        }



    }
}


