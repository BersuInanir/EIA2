//Aufgabe 5 canvas
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 19.Oktober 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var L5_Canvas;
(function (L5_Canvas) {
    window.addEventListener("load", init);
    let imageData;
    let x = [];
    let y = [];
    //Aufgabe 5
    let schneeflocken = [];
    let skifahrer = []; // Variable erzeugen f�r die Class SkiInfo
    let gondel = [];
    function init() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L5_Canvas.crc2 = canvas.getContext("2d");
        console.log(L5_Canvas.crc2);
        //Himmel
        L5_Canvas.crc2.fillStyle = "#cbe8ea";
        L5_Canvas.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.arc(40, 70, 70, 0, 2 * Math.PI);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.fillStyle = "#f9f778";
        L5_Canvas.crc2.fill();
        // Berg
        drawBerg(350, 150, "grey");
        drawBerg(450, 100, "Darkgrey");
        //Berg
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.moveTo(450, 100);
        L5_Canvas.crc2.lineTo(730, 600);
        L5_Canvas.crc2.lineTo(640, 600);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.fillStyle = "Dimgrey";
        L5_Canvas.crc2.fill();
        //H�gel1
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.moveTo(450, 600);
        L5_Canvas.crc2.quadraticCurveTo(600, 300, 1000, 600);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.fillStyle = "white";
        L5_Canvas.crc2.fill();
        L5_Canvas.crc2.stroke();
        //H�gel2
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.moveTo(-650, 620);
        L5_Canvas.crc2.quadraticCurveTo(100, -70, 620, 600);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.fillStyle = "white";
        L5_Canvas.crc2.fill();
        L5_Canvas.crc2.stroke();
        //Funktionsaufrufe drawTree
        drawTree(705, 510, "#085014");
        drawTree(40, 240, "#085014");
        drawTree(55, 250, "#16451e");
        drawTree(735, 460, "#16451e");
        drawTree(655, 430, "darkgreen");
        for (let i = 0; i < 5; i++) {
            let x = 580 + Math.random() * 200;
            let y = 450 + Math.random() * 110;
            drawTree(x, y, "#085014");
        }
        for (let i = 0; i < 5; i++) {
            let x = 580 + Math.random() * 200;
            let y = 450 + Math.random() * 110;
            drawTree(x, y, "#16451e");
        }
        //ImageData
        imageData = L5_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Aufgabe 5
        //Gondel
        for (let i = 0; i < 3; i++) {
            let g = new L5_Canvas.GondelInfo();
            gondel[i] = g;
        }
        //Schneeflocken 
        for (let i = 0; i < 100; i++) {
            let sw = new L5_Canvas.Snow(); // new ruft die Constructor-Methode auf und erzeugt Objekt der Klasse 
            schneeflocken[i] = sw;
        }
        // Startposition der Wolken
        for (let i = 0; i < 3; i++) {
            x[i] = 2 + Math.random() * 700;
            y[i] = 80;
        }
        //Skifahrer Aufgabe 5        
        for (let i = 0; i < 5; i++) {
            let s = new L5_Canvas.SkiInfo(); // new ruft die Constructor-Methode auf und erzeugt Objekt der Klasse 
            skifahrer[i] = s;
        }
        //Funktion animate aufrufen
        animate();
    }
    //Funktionen
    function drawWolke(_x, _y, _color) {
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.arc(_x, _y, 24, 0, 2 * Math.PI);
        L5_Canvas.crc2.arc(_x - 20, _y + 30, 26, 0, 2 * Math.PI);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.fillStyle = _color;
        L5_Canvas.crc2.fill();
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.arc(_x + 20, _y + 40, 32, 0, 2 * Math.PI);
        L5_Canvas.crc2.arc(_x + 50, _y + 10, 30, 0, 2 * Math.PI);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.fillStyle = _color;
        L5_Canvas.crc2.fill();
    }
    function drawBerg(_x, _y, _color) {
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.moveTo(_x, _y);
        L5_Canvas.crc2.lineTo(_x + 250, _y + 450);
        L5_Canvas.crc2.lineTo(_x - 250, _y + 450);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.stroke();
        L5_Canvas.crc2.fillStyle = _color;
        L5_Canvas.crc2.fill();
    }
    function drawTree(_x, _y, _color) {
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.fillStyle = _color;
        L5_Canvas.crc2.moveTo(_x, _y + 5);
        L5_Canvas.crc2.lineTo(_x + 10, _y + 35);
        L5_Canvas.crc2.lineTo(_x - 10, _y + 35);
        L5_Canvas.crc2.fill();
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.moveTo(_x, _y - 5);
        L5_Canvas.crc2.lineTo(_x + 10, _y + 20);
        L5_Canvas.crc2.lineTo(_x - 10, _y + 20);
        L5_Canvas.crc2.fill();
        L5_Canvas.crc2.beginPath();
        L5_Canvas.crc2.moveTo(_x, _y - 20);
        L5_Canvas.crc2.lineTo(_x + 10, _y + 5);
        L5_Canvas.crc2.lineTo(_x - 10, _y + 5);
        L5_Canvas.crc2.closePath();
        L5_Canvas.crc2.fill();
    }
    // Aufgabe 3
    // Animate-Funktion
    function animate() {
        L5_Canvas.crc2.clearRect(0, 0, 800, 600);
        L5_Canvas.crc2.putImageData(imageData, 0, 0);
        //Schneeflocken Aufgabe 5
        for (let i = 0; i < schneeflocken.length; i++) {
            let sw = schneeflocken[i];
            sw.update(); // Schneeflocken werden bewegt und gezeichnet  update = (move/draw)Methode
        }
        //Wolken
        for (let i = 0; i < x.length; i++) {
            x[i] += Math.random() * 2;
            if (x[i] >= 850) {
                x[i] = 0;
            }
            drawWolke(x[i], y[i], "white");
        }
        //Skifahrer Aufgabe 5 
        for (let i = 0; i < skifahrer.length; i++) {
            let s = skifahrer[i];
            skifahrer[i].update(); //Skifahrer wird gezeichnet und bewegt
        } // . ruft die Methoden auf
        //Gondel Aufgabe 5 
        for (let i = 0; i < gondel.length; i++) {
            let g = gondel[i];
            gondel[i].update();
        }
        window.setTimeout(animate, 30);
    }
})(L5_Canvas || (L5_Canvas = {}));
//# sourceMappingURL=aufgabe_5_Main.js.map