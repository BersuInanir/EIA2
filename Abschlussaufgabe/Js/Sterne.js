var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Sterne {
        constructor() {
            this.x = 10 + Math.random() * 980;
            this.y = 10 + Math.random() * 690;
            this.dx = 0.2;
            this.radius = 0 + Math.random() * 2;
            this.color = "white";
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x >= 990) {
                this.x = 0;
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Sterne = Sterne;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Sterne.js.map