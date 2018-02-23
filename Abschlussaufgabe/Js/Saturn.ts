namespace Abschlussaufgabe {

    // Subklasse Saturn 
    export class Saturn extends Planeten {



        constructor() {

            super();
            this.x = 750;
            this.y = 100;
            this.radius = 60;
            this.firstcolor = "#5b5a59";
            this.color = "#f7a34f";
            this.info = "Der Saturn \n Der Saturn ist der sechste und nach Jupiter der zweitgrößte Planet des Sonnensystems\n Radius: 58.232 km \n Entfernung von der Sonne: 1,429 × 10^9 km \n Umlaufzeit: 29 Jahre";
        }



        draw(): void {

            crc2.beginPath();
            this.grd = crc2.createLinearGradient(660, 80, 700, 200);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            crc2.fillStyle = this.grd;
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(680, 70);
            crc2.lineTo(820, 130);
            crc2.lineWidth = 8;
            crc2.strokeStyle = "#a89f97";
            crc2.stroke();
            crc2.closePath();
        }


    }
}
























