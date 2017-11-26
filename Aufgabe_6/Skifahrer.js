var L6_Canvas;
(function (L6_Canvas) {
    class SkiInfo extends L6_Canvas.MovingObjects {
        constructor() {
            super();
            this.x = 0 + Math.random() * 10;
            this.y = 300 + Math.random() * 200;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
        }
        move() {
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
        draw() {
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.fillStyle = "black";
            L6_Canvas.crc2.moveTo(this.x, this.y);
            L6_Canvas.crc2.fillRect(this.x - 3, this.y + 3, 6, 16);
            L6_Canvas.crc2.fillRect(this.x, this.y + 12, 8, 3);
            L6_Canvas.crc2.fill();
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.fillStyle = this.colorHose;
            L6_Canvas.crc2.fillRect(this.x - 3, this.y + 18, 6, 16);
            L6_Canvas.crc2.fill();
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.fillStyle = this.colorHut;
            L6_Canvas.crc2.moveTo(this.x, this.y);
            L6_Canvas.crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            L6_Canvas.crc2.fill();
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.moveTo(this.x, this.y);
            L6_Canvas.crc2.arc(this.x, this.y, 8, 0, 1 * Math.PI);
            L6_Canvas.crc2.fillStyle = "khaki";
            L6_Canvas.crc2.fill();
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.fill();
            L6_Canvas.crc2.fillStyle = "black";
            L6_Canvas.crc2.fillRect(this.x - 15, this.y + 32, 40, 3);
            L6_Canvas.crc2.fillRect(this.x + 24, this.y + 26, 3, 9);
            L6_Canvas.crc2.fill();
        }
        setRandomStyle() {
            this.colorHose = "hsl(" + Math.random() * 360 + ", 90%, 60%)";
            this.colorHut = "hsl(" + Math.random() * 360 + ", 50%, 40%)";
        }
    }
    L6_Canvas.SkiInfo = SkiInfo;
})(L6_Canvas || (L6_Canvas = {}));
//# sourceMappingURL=Skifahrer.js.map