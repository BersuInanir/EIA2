var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //Subklasse Mars 
    class Mars extends Abschlussaufgabe.Planeten {
        constructor() {
            super();
            this.x = 590;
            this.y = 555;
            this.radius = 26;
            this.firstcolor = "#8c4c21";
            this.color = "#b51d09";
            this.info = "Der Mars \n Der Mars ist, von der Sonne aus gezählt, der vierte Planet im Sonnensystem und der äußere Nachbar der Erde \n Radius: 3.390 km \n Entfernung von der Sonne: 227.900.000 km \n Umlaufzeit: 687 Tage";
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            this.grd = Abschlussaufgabe.crc2.createLinearGradient(530, 500, 600, 480);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            Abschlussaufgabe.crc2.fillStyle = this.grd;
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Mars = Mars;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Mars.js.map