namespace L6_Canvas {


    export class GondelInfo extends MovingObjects {  //SubKlasse Gondel

        dx: number;


        constructor() {
            super();
            this.x = 0 + Math.random() * 500;
            this.y = 160;
            this.dx = 2.5;
            
        }



        draw(): void {
            crc2.beginPath();
            crc2.lineWidth = 2.5;
            crc2.fillStyle = "black";
            crc2.moveTo(0, 160);
            crc2.lineTo(800, 160);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x + 40, this.y + 30, 50, 25);
            crc2.moveTo(this.x + 65, this.y);
            crc2.lineTo(this.x + 65, this.y + 30);
            crc2.closePath();
            crc2.stroke();

        }


        move(): void {

            this.x += this.dx;

            if (this.x >= 800) {
                this.x = 0;
            }
        }


        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 30%, 20%)";
        }
    }
}
