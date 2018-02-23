namespace Abschlussaufgabe {

    // Subklasse Sternschnuppen von Superklasse Stern
    export class Sternschnuppe extends Sterne {


        dy: number;
        grd: CanvasGradient;
        firstcolor: string;


        constructor() {
            super();
            this.x = 0 + Math.random() * 900;
            this.y = 0 + Math.random() * 600;
            this.dx = 6 + Math.random() * 10;
            this.dy = 4 + Math.random() * 6;
            this.firstcolor = "#f6ff82";
            this.color = "#9ef6ff";
        }




        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x >= 1100) {
                this.x = 0;
            }
            if (this.y >= 800) {
                this.y = 0;
            }

        }


        draw(): void {
            crc2.beginPath();
            crc2.lineWidth = 3;
            this.grd = crc2.createLinearGradient(500, 250, 700, 500);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            crc2.fillStyle = this.grd;
            
            crc2.beginPath();
            crc2.moveTo(this.x - 45, this.y - 13);
            crc2.lineTo(this.x + 4, this.y - 5);
            crc2.lineTo(this.x + 11, this.y - 25);
            crc2.lineTo(this.x + 18, this.y - 5);
            crc2.lineTo(this.x + 33, this.y - 5);
            crc2.lineTo(this.x + 21, this.y + 5);
            crc2.lineTo(this.x + 26, this.y + 25);
            crc2.lineTo(this.x + 11, this.y + 10);
            crc2.lineTo(this.x - 4, this.y + 25);
            crc2.lineTo(this.x + 1, this.y + 5);
            crc2.lineTo(this.x - 45, this.y - 13);
            crc2.stroke();
            crc2.fill();


        }
    }
}