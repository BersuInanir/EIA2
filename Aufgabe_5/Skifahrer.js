var L5_Canvas;
(function (L5_Canvas) {
    class SkiInfo {
        constructor() {
            this.skifahrer = [];
            this.x = 0 + Math.random() * 10;
            this.y = 300 + Math.random() * 200;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.setRandomStyle();
        }
        update() {
            this.moveSkier();
            this.drawSkier();
        }
        moveSkier() {
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
        drawSkier() {
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.fillStyle = "black";
            L5_Canvas.crc2.moveTo(this.x, this.y);
            L5_Canvas.crc2.fillRect(this.x - 3, this.y + 3, 6, 16);
            L5_Canvas.crc2.fillRect(this.x, this.y + 12, 8, 3);
            L5_Canvas.crc2.fill();
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.fillStyle = this.colorHose;
            L5_Canvas.crc2.fillRect(this.x - 3, this.y + 18, 6, 16);
            L5_Canvas.crc2.fill();
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.fillStyle = this.colorHut;
            L5_Canvas.crc2.moveTo(this.x, this.y);
            L5_Canvas.crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            L5_Canvas.crc2.fill();
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.moveTo(this.x, this.y);
            L5_Canvas.crc2.arc(this.x, this.y, 8, 0, 1 * Math.PI);
            L5_Canvas.crc2.fillStyle = "khaki";
            L5_Canvas.crc2.fill();
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.fill();
            L5_Canvas.crc2.fillStyle = "black";
            L5_Canvas.crc2.fillRect(this.x - 15, this.y + 32, 40, 3);
            L5_Canvas.crc2.fillRect(this.x + 24, this.y + 26, 3, 9);
            L5_Canvas.crc2.fill();
        }
        setRandomStyle() {
            this.colorHose = "hsl(" + Math.random() * 360 + ", 90%, 60%)";
            this.colorHut = "hsl(" + Math.random() * 360 + ", 50%, 40%)";
        }
    }
    L5_Canvas.SkiInfo = SkiInfo;
})(L5_Canvas || (L5_Canvas = {}));
//# sourceMappingURL=Skifahrer.js.map