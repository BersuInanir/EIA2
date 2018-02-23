var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    // Subklasse Jupiter 
    class Jupiter extends Abschlussaufgabe.Planeten {
        constructor() {
            super();
            this.x = 790;
            this.y = 420;
            this.radius = 68;
            this.firstcolor = "white";
            this.color = "#c98600";
            this.info = "Der Jupiter \n Der Jupiter ist der größte und fünfte Planet des Sonnensystem \n Entfernung von der Sonne: 778.500.000 km \n Radius: 69.911 km \n Umlaufzeit: 12 Jahre";
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            this.grd = Abschlussaufgabe.crc2.createLinearGradient(700, 310, 700, 480);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            Abschlussaufgabe.crc2.fillStyle = this.grd;
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Jupiter = Jupiter;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Jupiter.js.map