var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    // Subklasse Saturn 
    class Saturn extends Abschlussaufgabe.Planeten {
        constructor() {
            super();
            this.x = 750;
            this.y = 100;
            this.radius = 60;
            this.firstcolor = "#5b5a59";
            this.color = "#f7a34f";
            this.info = "Der Saturn \n Der Saturn ist der sechste und nach Jupiter der zweitgrößte Planet des Sonnensystems\n Radius: 58.232 km \n Entfernung von der Sonne: 1,429 × 10^9 km \n Umlaufzeit: 29 Jahre";
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            this.grd = Abschlussaufgabe.crc2.createLinearGradient(660, 80, 700, 200);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            Abschlussaufgabe.crc2.fillStyle = this.grd;
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(680, 70);
            Abschlussaufgabe.crc2.lineTo(820, 130);
            Abschlussaufgabe.crc2.lineWidth = 8;
            Abschlussaufgabe.crc2.strokeStyle = "#a89f97";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Saturn = Saturn;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Saturn.js.map