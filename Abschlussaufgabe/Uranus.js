var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    // Subklasse Uranus 
    class Uranus extends Abschlussaufgabe.Planeten {
        constructor() {
            super();
            this.x = 360;
            this.y = 50;
            this.radius = 24;
            this.firstcolor = "white";
            this.color = "blue";
            this.info = "Der Uranus \n Der Uranus ist von der Sonne der siebte Planet im Sonnensystem \n Entfernung von der Sonne: 2,9 Mrd. km \n Umlaufzeit: 84 Jahre";
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            this.grd = Abschlussaufgabe.crc2.createLinearGradient(280, 280, 600, 150);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            Abschlussaufgabe.crc2.fillStyle = this.grd;
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Uranus = Uranus;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Uranus.js.map