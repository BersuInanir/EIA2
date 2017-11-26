var L6_Canvas;
(function (L6_Canvas) {
    class GondelInfo extends L6_Canvas.MovingObjects {
        constructor() {
            super();
            this.x = 0 + Math.random() * 500;
            this.y = 160;
            this.dx = 2.5;
        }
        draw() {
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.lineWidth = 2.5;
            L6_Canvas.crc2.fillStyle = "black";
            L6_Canvas.crc2.moveTo(0, 160);
            L6_Canvas.crc2.lineTo(800, 160);
            L6_Canvas.crc2.closePath();
            L6_Canvas.crc2.stroke();
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.fillStyle = this.color;
            L6_Canvas.crc2.fillRect(this.x + 40, this.y + 30, 50, 25);
            L6_Canvas.crc2.moveTo(this.x + 65, this.y);
            L6_Canvas.crc2.lineTo(this.x + 65, this.y + 30);
            L6_Canvas.crc2.closePath();
            L6_Canvas.crc2.stroke();
        }
        move() {
            this.x += this.dx;
            if (this.x >= 800) {
                this.x = 0;
            }
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 30%, 20%)";
        }
    }
    L6_Canvas.GondelInfo = GondelInfo;
})(L6_Canvas || (L6_Canvas = {}));
//# sourceMappingURL=Gondel.js.map