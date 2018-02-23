var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    // Subklasse Sternschnuppen von Superklasse Stern
    class Sternschnuppe extends Abschlussaufgabe.Sterne {
        constructor() {
            super();
            this.x = 0 + Math.random() * 900;
            this.y = 0 + Math.random() * 600;
            this.dx = 6 + Math.random() * 10;
            this.dy = 4 + Math.random() * 6;
            this.firstcolor = "#f6ff82";
            this.color = "#9ef6ff";
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x >= 1100) {
                this.x = 0;
            }
            if (this.y >= 800) {
                this.y = 0;
            }
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.lineWidth = 3;
            this.grd = Abschlussaufgabe.crc2.createLinearGradient(500, 250, 700, 500);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            Abschlussaufgabe.crc2.fillStyle = this.grd;
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 45, this.y - 13);
            Abschlussaufgabe.crc2.lineTo(this.x + 4, this.y - 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 11, this.y - 25);
            Abschlussaufgabe.crc2.lineTo(this.x + 18, this.y - 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 33, this.y - 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 21, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 26, this.y + 25);
            Abschlussaufgabe.crc2.lineTo(this.x + 11, this.y + 10);
            Abschlussaufgabe.crc2.lineTo(this.x - 4, this.y + 25);
            Abschlussaufgabe.crc2.lineTo(this.x + 1, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x - 45, this.y - 13);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Sternschnuppe = Sternschnuppe;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Sternschnuppe.js.map