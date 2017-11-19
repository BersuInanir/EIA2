var L5_Canvas;
(function (L5_Canvas) {
    class GondelInfo {
        constructor() {
            this.x = 0 + Math.random() * 500;
            this.y = 160;
            this.dx = 2.5;
            this.color = "hsl(" + Math.random() * 360 + ", 30%, 20%)";
        }
        update() {
            this.moveGondel();
            this.drawGondel();
        }
        drawGondel() {
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.lineWidth = 2.5;
            L5_Canvas.crc2.fillStyle = "black";
            L5_Canvas.crc2.moveTo(0, 160);
            L5_Canvas.crc2.lineTo(800, 160);
            L5_Canvas.crc2.closePath();
            L5_Canvas.crc2.stroke();
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.fillStyle = this.color;
            L5_Canvas.crc2.fillRect(this.x + 40, this.y + 30, 50, 25);
            L5_Canvas.crc2.moveTo(this.x + 65, this.y);
            L5_Canvas.crc2.lineTo(this.x + 65, this.y + 30);
            L5_Canvas.crc2.closePath();
            L5_Canvas.crc2.stroke();
        }
        moveGondel() {
            this.x += this.dx;
            if (this.x >= 800) {
                this.x = 0;
            }
        }
    }
    L5_Canvas.GondelInfo = GondelInfo;
})(L5_Canvas || (L5_Canvas = {}));
//# sourceMappingURL=Gondel.js.map