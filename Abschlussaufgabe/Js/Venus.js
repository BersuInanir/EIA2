var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    // Subklasse Venus 
    class Venus extends Abschlussaufgabe.Planeten {
        constructor() {
            super();
            this.x = 300;
            this.y = 390;
            this.radius = 38;
            this.firstcolor = "#f7c24f";
            this.color = "#9b4800";
            this.info = "Die Venus \n Die Venus ist von der Sonne der zweitinnerste und drittkleinste Planet des Sonnensystems \n Entfernung von der Sonne: 108.200.000 km \n Durchmesser: 12.100 Km \n Umlaufzeit: 225 Tage";
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            this.grd = Abschlussaufgabe.crc2.createLinearGradient(290, 220, 420, 320);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            Abschlussaufgabe.crc2.fillStyle = this.grd;
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Venus = Venus;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Venus.js.map