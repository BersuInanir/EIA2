var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    // Subklasse Sonne
    class Sonne extends Abschlussaufgabe.Planeten {
        constructor() {
            super();
            this.x = 530;
            this.y = 310;
            this.radius = 115;
            this.info = "Die Sonne \n Die Sonne ist der Stern im Zentrum des Sonnensystems \n Oberflächentemperatur: 5.778 Kelvin \n Radius: 695.700 km \n Alter: 4,75 Mrd \n Rotationsperiode: 25,38 Tage";
        }
        draw() {
            let sunny;
            sunny = document.getElementById("Sonne");
            Abschlussaufgabe.crc2.drawImage(sunny, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
    }
    Abschlussaufgabe.Sonne = Sonne;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Sonne.js.map