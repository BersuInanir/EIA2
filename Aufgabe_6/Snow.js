var L6_Canvas;
(function (L6_Canvas) {
    class Snow extends L6_Canvas.MovingObjects {
        constructor() {
            super();
            this.x = 0 + Math.random() * 800;
            this.y = 0 + Math.random() * 300;
        }
        move() {
            this.x += Math.random() * 2; // Geschwindigkeit der Schneeflocken in X-Richtung
            this.y += Math.random() * 6; // Geschwindigkeit der Schneeflocken in Y-Richtung
            if (this.y >= 450) {
                this.y = 0; // dann [i] auf Startposition 0 setzen
            }
            if (this.x >= 800) {
                this.x = 0; // dann [i] auf Startposition 0 setzen 
            }
        }
        draw() {
            L6_Canvas.crc2.beginPath();
            L6_Canvas.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            L6_Canvas.crc2.fillStyle = this.color;
            L6_Canvas.crc2.closePath();
            L6_Canvas.crc2.fill();
        }
        setRandomStyle() {
            this.color = "white";
        }
    }
    L6_Canvas.Snow = Snow;
})(L6_Canvas || (L6_Canvas = {}));
//# sourceMappingURL=Snow.js.map