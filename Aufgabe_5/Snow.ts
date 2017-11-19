namespace L5_Canvas {

    export class Snow {
        x: number;
        y: number;
        color: string;
        schneeflocken: Snow[] = [];


        constructor() {
            this.x = 0 + Math.random() * 800;
            this.y = 0 + Math.random() * 300;
            this.color = "white";
        }

        update(): void {
            this.moveSnow();
            this.drawSnow();
        }

        moveSnow(): void {
            this.x += Math.random() * 2;    // Geschwindigkeit der Schneeflocken in X-Richtung
            this.y += Math.random() * 6;    // Geschwindigkeit der Schneeflocken in Y-Richtung

            if (this.y >= 450) {         // Wenn arrayY[i] >= 600px 
                this.y = 0;              // dann [i] auf Startposition 0 setzen
            }
            if (this.x >= 800) {         // Wenn arrayX[i] >= 800px
                this.x = 0;              // dann [i] auf Startposition 0 setzen 
            }
        }

        drawSnow(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.fill();
        }
    }

}