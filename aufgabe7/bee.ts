namespace L7_ObjektorienteProgrammierung {

    export class Biene {

        x: number;
        y: number;
        size: number;
        color: string;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 7 + 5;
        }


        update(): void {
            this.move();
            this.drawBiene();
        }


        drawBiene(): void {
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "black";
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(this.x - 10, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.arc(this.x + 3, this.y - 14, this.size, 0, 2);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        move(): void {
            this.x += Math.random() * 4 - 2.1;
            this.y += Math.random() * 7 - 3.5;
            
            if (this.x < 0) {
                this.x = crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }
            if (this.y >= crc2.canvas.height) {
                this.y = 0;
            }
        }
    }
    
   }