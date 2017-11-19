var L5_Canvas;
(function (L5_Canvas) {
    class Snow {
        constructor() {
            this.schneeflocken = [];
            this.x = 0 + Math.random() * 800;
            this.y = 0 + Math.random() * 300;
            this.color = "white";
        }
        update() {
            this.moveSnow();
            this.drawSnow();
        }
        moveSnow() {
            this.x += Math.random() * 2; // Geschwindigkeit der Schneeflocken in X-Richtung
            this.y += Math.random() * 6; // Geschwindigkeit der Schneeflocken in Y-Richtung
            if (this.y >= 450) {
                this.y = 0; // dann [i] auf Startposition 0 setzen
            }
            if (this.x >= 800) {
                this.x = 0; // dann [i] auf Startposition 0 setzen 
            }
        }
        drawSnow() {
            L5_Canvas.crc2.beginPath();
            L5_Canvas.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            L5_Canvas.crc2.fillStyle = this.color;
            L5_Canvas.crc2.closePath();
            L5_Canvas.crc2.fill();
        }
    }
    L5_Canvas.Snow = Snow;
})(L5_Canvas || (L5_Canvas = {}));
//# sourceMappingURL=Snow.js.map