namespace L7_ObjektorienteProgrammierung {

    export class Floret {

        x: number;
        y: number;
        florets: Floret[] = [];

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        zufallPosition(): void {
            for (var i: number = 0; i < 5; i++) {
                var minWidth: number = 30;
                var minHeight: number = 200;
                var maxWidth: number = 350;
                var maxHeight: number = 300;
                var n: number = Math.floor((Math.random() * 2) + 0);
                this.x = Math.floor(Math.random() * (maxWidth - minWidth + 0) + minWidth);
                this.y = Math.floor(Math.random() * (maxHeight - minHeight + 0) + minHeight);

                this.drawBlume();

            }
            this.florets.push(new Floret(this.x, this.y));
        }

        drawBlume(): void {

        crc2.beginPath();
        crc2.fillStyle = "#19760c";
        crc2.fillRect(this.x + 5, this.y + 15, 3, 25);
        crc2.arc(this.x + 4, this.y + 20, 12, 0, 1.5);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#5e4781";
        crc2.strokeStyle = "white";
        crc2.lineWidth = 1;
        crc2.arc(this.x - 3, this.y + 0, 9, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(this.x + 8, this.y - 12, 9, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(this.x + 19, this.y - 1, 9, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(this.y + 8, this.y + 15, 9, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "#f5ee5c";
        crc2.arc(this.x + 8, this.y + 0, 6, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    }








}