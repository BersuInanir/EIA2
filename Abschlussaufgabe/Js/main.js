/*
Aufgabe: Abschlussaufgabe
Name: Bersu Inanir
Matrikel: 254073
Datum: 22.02.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let grd;
    let imageData; // Variable um Hintergrund zu speichern 
    //SUPERKLASSE STERNE
    let stern = [];
    //SUPERKLASSE PLANETEN 
    let planets = [];
    //Function init
    function init() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //BACKGROUND 
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fillRect(0, 0, 1000, 700);
        //STERNBILD 
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(110, 70);
        Abschlussaufgabe.crc2.lineTo(200, 80);
        Abschlussaufgabe.crc2.lineTo(170, 150);
        Abschlussaufgabe.crc2.lineTo(195, 230);
        Abschlussaufgabe.crc2.moveTo(170, 150);
        Abschlussaufgabe.crc2.lineTo(110, 160);
        Abschlussaufgabe.crc2.lineTo(90, 240);
        Abschlussaufgabe.crc2.moveTo(110, 160);
        Abschlussaufgabe.crc2.lineTo(110, 70);
        Abschlussaufgabe.crc2.arc(110, 70, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.moveTo(170, 150);
        Abschlussaufgabe.crc2.arc(170, 150, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.moveTo(200, 80);
        Abschlussaufgabe.crc2.arc(200, 80, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.moveTo(195, 230);
        Abschlussaufgabe.crc2.arc(195, 230, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.moveTo(110, 160);
        Abschlussaufgabe.crc2.arc(110, 160, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.moveTo(90, 240);
        Abschlussaufgabe.crc2.arc(90, 240, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.strokeStyle = "white";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        //STERNBILD
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(700, 300);
        Abschlussaufgabe.crc2.arc(700, 300, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.lineTo(740, 280);
        Abschlussaufgabe.crc2.arc(740, 280, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.lineTo(780, 285);
        Abschlussaufgabe.crc2.arc(780, 285, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.lineTo(825, 280);
        Abschlussaufgabe.crc2.arc(825, 280, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.lineTo(855, 330);
        Abschlussaufgabe.crc2.arc(855, 330, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.lineTo(940, 300);
        Abschlussaufgabe.crc2.arc(940, 300, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.lineTo(945, 235);
        Abschlussaufgabe.crc2.arc(945, 235, 2, 0, Math.PI * 2);
        Abschlussaufgabe.crc2.lineTo(825, 280);
        Abschlussaufgabe.crc2.strokeStyle = "white";
        Abschlussaufgabe.crc2.stroke();
        //STERNE
        for (let i = 0; i < 200; i++) {
            let s = new Abschlussaufgabe.Sterne();
            stern[i] = s;
        }
        //PLANETEN 
        //new erzeugt neues Objekt 
        //Push f�gt es dem Array Planets Hinzu
        planets.push(new Abschlussaufgabe.Sonne());
        planets.push(new Abschlussaufgabe.Merkur());
        planets.push(new Abschlussaufgabe.Venus());
        planets.push(new Abschlussaufgabe.Erde());
        planets.push(new Abschlussaufgabe.Mars());
        planets.push(new Abschlussaufgabe.Jupiter());
        planets.push(new Abschlussaufgabe.Saturn());
        planets.push(new Abschlussaufgabe.Uranus());
        // Background speichern
        imageData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //STERNSCHNUPPEN
        for (let i = 0; i < 2; i++) {
            let ss = new Abschlussaufgabe.Sternschnuppe();
            stern.push(ss);
        }
        //EVENTLISTENER STERNSCHNUPPE
        canvas.addEventListener("click", handleClick);
        //TABLET SMARTPHONE
        canvas.addEventListener("touchstart", handleClick);
        window.setTimeout(animate, 30);
    }
    //FUNKTION ANIMATE
    function animate() {
        Abschlussaufgabe.crc2.clearRect(0, 0, 1000, 700);
        Abschlussaufgabe.crc2.putImageData(imageData, 0, 0);
        //PLANTEN
        for (let i = 0; i < planets.length; i++) {
            let m = planets[i];
            m.draw();
        }
        //STERNE 
        for (let i = 0; i < stern.length; i++) {
            let star = stern[i];
            star.update();
        }
        //TIMEOUT
        window.setTimeout(animate, 30);
    }
    function handleClick(_event) {
        let hadClick = false; // Mit der Variable wird �berpr�ft ob es einen Click auf den Planeten gab   
        for (let i = 0; i < planets.length; i++) {
            let m = planets[i]; // Neue Variable den aktuellen Wert aus dem Array zuweisen 
            if (m.hasClick(_event.offsetX, _event.offsetY)) {
                m.handleClick(); // handleClick in Planeten wird aufgerufen 
                hadClick = true;
            }
        }
        if (!hadClick) {
            addSternschnuppe();
        }
    }
    //STERNSCHNUPPEN ERZEUGEN        
    function addSternschnuppe() {
        for (let i = 0; i < 2; i++) {
            createSchnuppe();
        }
    }
    //NEUE STERNSCHNUPPEN ERZEUGEN
    function createSchnuppe() {
        let ss = new Abschlussaufgabe.Sternschnuppe(); // Neuen Sternschnuppen werden gezeichnet
        stern.push(ss);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map