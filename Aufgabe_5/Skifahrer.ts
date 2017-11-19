namespace L5_Canvas {

    export class SkiInfo {

        x: number;
        y: number;
        dx: number;
        dy: number;
        colorHose: string;
        colorHut: string;
        skifahrer: SkiInfo[] = [];

        constructor() {                         // druch new SkiInfo(); wird Constructor-Methode aufgerufen

            this.x = 0 + Math.random() * 10;
            this.y = 300 + Math.random() * 200;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.setRandomStyle();


        }
        update(): void {
            this.moveSkier();
            this.drawSkier();
        }


        moveSkier(): void {

            this.x += this.dx;
            this.y += this.dy;

            if (this.x >= 450) {
                this.x = -10;
                this.y = 350;
            }

            if (this.y >= 650) {
                this.y = 350;
                this.x = -10;
            }
        }

        drawSkier(): void {
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(this.x, this.y);
            crc2.fillRect(this.x - 3, this.y + 3, 6, 16);
            crc2.fillRect(this.x, this.y + 12, 8, 3);
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = this.colorHose;
            crc2.fillRect(this.x - 3, this.y + 18, 6, 16);
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = this.colorHut;
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);

            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 8, 0, 1 * Math.PI);
            crc2.fillStyle = "khaki";
            crc2.fill();
            crc2.beginPath();
            crc2.fill();
            crc2.fillStyle = "black";
            crc2.fillRect(this.x - 15, this.y + 32, 40, 3);
            crc2.fillRect(this.x + 24, this.y + 26, 3, 9);
            crc2.fill();
        }

        setRandomStyle(): void {
            this.colorHose = "hsl(" + Math.random() * 360 + ", 90%, 60%)";
            this.colorHut = "hsl(" + Math.random() * 360 + ", 50%, 40%)";
        }




    }


}