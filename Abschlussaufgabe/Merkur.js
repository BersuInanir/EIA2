var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //Subklasse Merkur 
    class Merkur extends Abschlussaufgabe.Planeten {
        constructor() {
            super();
            this.x = 345;
            this.y = 280;
            this.radius = 15;
            this.firstcolor = "#444444";
            this.color = "#d8d8d8";
            this.info = "Der Merkur \n Der Merkur ist mit seinem Durchmesser der kleinste, sonnennächste und schnellste Planet im Sonnensystem \n Radius: 2.440 km \n Entfernung von der Sonne: 57.910.000 km \n Umlaufzeit: 88 Tage ";
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            this.grd = Abschlussaufgabe.crc2.createLinearGradient(330, 280, 350, 300);
            this.grd.addColorStop(0, this.firstcolor);
            this.grd.addColorStop(1, this.color);
            Abschlussaufgabe.crc2.fillStyle = this.grd;
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Merkur = Merkur;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Merkur.js.map