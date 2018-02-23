namespace Abschlussaufgabe {

    export class Sterne {

        x: number;
        y: number;
        dx: number;
        radius: number;
        color: string;


        constructor() {
            this.x = 10 + Math.random() * 980;
            this.y = 10 + Math.random() * 690;
            this.dx = 0.2;
            this.radius = 0 + Math.random() * 2;
            this.color = "white";
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;

            if (this.x >= 990) {
                this.x = 0;
            }
        }

        
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.fill();
        }


    }
}