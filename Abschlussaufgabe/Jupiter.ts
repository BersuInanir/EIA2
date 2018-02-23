namespace Abschlussaufgabe {

    // Subklasse Jupiter 
    export class Jupiter extends Planeten {



        constructor() {

            super();
            this.x = 790;
            this.y = 420;
            this.radius = 68;
            this.firstcolor = "white";
            this.color = "#c98600";
            this.info = "Der Jupiter \n Der Jupiter ist der größte und fünfte Planet des Sonnensystem \n Entfernung von der Sonne: 778.500.000 km \n Radius: 69.911 km \n Umlaufzeit: 12 Jahre";
        }
        
        draw(): void {
            crc2.beginPath();
            this.grd = crc2.createLinearGradient(700, 310, 700, 480);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            crc2.fillStyle = this.grd;
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
        }
    }
}

