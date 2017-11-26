//Aufgabe 6 canvas
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 26.November 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var L6_Canvas;
(function (L6_Canvas) {
    window.addEventListener("load", init);
    let imageData;
    let objects = []; //SuperKlasse erzeugen
    let x = [];
    let y = [];
    function init() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L6_Canvas.crc2 = canvas.getContext("2d");
        console.log(L6_Canvas.crc2);
        //Himmel
        L6_Canvas.crc2.fillStyle = "#cbe8ea";
        L6_Canvas.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.arc(40, 70, 70, 0, 2 * Math.PI);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.fillStyle = "#f9f778";
        L6_Canvas.crc2.fill();
        // Berg
        drawBerg(350, 150, "grey");
        drawBerg(450, 100, "Darkgrey");
        //Berg
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.moveTo(450, 100);
        L6_Canvas.crc2.lineTo(730, 600);
        L6_Canvas.crc2.lineTo(640, 600);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.fillStyle = "Dimgrey";
        L6_Canvas.crc2.fill();
        //H�gel1
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.moveTo(450, 600);
        L6_Canvas.crc2.quadraticCurveTo(600, 300, 1000, 600);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.fillStyle = "white";
        L6_Canvas.crc2.fill();
        L6_Canvas.crc2.stroke();
        //H�gel2
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.moveTo(-650, 620);
        L6_Canvas.crc2.quadraticCurveTo(100, -70, 620, 600);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.fillStyle = "white";
        L6_Canvas.crc2.fill();
        L6_Canvas.crc2.stroke();
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
        imageData = L6_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Aufgabe 6 
        //Gondel
        for (let i = 0; i < 3; i++) {
            let g = new L6_Canvas.GondelInfo();
            objects.push(g);
        }
        //Schneeflocken
        for (let i = 0; i < 100; i++) {
            let sw = new L6_Canvas.Snow();
            objects.push(sw);
        }
        //Skier
        for (let i = 0; i < 5; i++) {
            let sf = new L6_Canvas.SkiInfo();
            objects.push(sf);
        }
        // Startposition der Wolken
        for (let i = 0; i < 3; i++) {
            x[i] = 2 + Math.random() * 700;
            y[i] = 80;
        }
        //Funktion animate aufrufen
        animate();
    }
    //Funktionen
    function drawWolke(_x, _y, _color) {
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.arc(_x, _y, 24, 0, 2 * Math.PI);
        L6_Canvas.crc2.arc(_x - 20, _y + 30, 26, 0, 2 * Math.PI);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.fillStyle = _color;
        L6_Canvas.crc2.fill();
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.arc(_x + 20, _y + 40, 32, 0, 2 * Math.PI);
        L6_Canvas.crc2.arc(_x + 50, _y + 10, 30, 0, 2 * Math.PI);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.fillStyle = _color;
        L6_Canvas.crc2.fill();
    }
    function drawBerg(_x, _y, _color) {
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.moveTo(_x, _y);
        L6_Canvas.crc2.lineTo(_x + 250, _y + 450);
        L6_Canvas.crc2.lineTo(_x - 250, _y + 450);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.stroke();
        L6_Canvas.crc2.fillStyle = _color;
        L6_Canvas.crc2.fill();
    }
    function drawTree(_x, _y, _color) {
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.fillStyle = _color;
        L6_Canvas.crc2.moveTo(_x, _y + 5);
        L6_Canvas.crc2.lineTo(_x + 10, _y + 35);
        L6_Canvas.crc2.lineTo(_x - 10, _y + 35);
        L6_Canvas.crc2.fill();
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.moveTo(_x, _y - 5);
        L6_Canvas.crc2.lineTo(_x + 10, _y + 20);
        L6_Canvas.crc2.lineTo(_x - 10, _y + 20);
        L6_Canvas.crc2.fill();
        L6_Canvas.crc2.beginPath();
        L6_Canvas.crc2.moveTo(_x, _y - 20);
        L6_Canvas.crc2.lineTo(_x + 10, _y + 5);
        L6_Canvas.crc2.lineTo(_x - 10, _y + 5);
        L6_Canvas.crc2.closePath();
        L6_Canvas.crc2.fill();
    }
    //Animate-Funktion
    function animate() {
        L6_Canvas.crc2.clearRect(0, 0, 800, 600);
        L6_Canvas.crc2.putImageData(imageData, 0, 0);
        //Aufgabe 6
        for (let i = 0; i < objects.length; i++) {
            let m = objects[i];
            m.update();
        }
        //Wolken
        for (let i = 0; i < x.length; i++) {
            x[i] += Math.random() * 2;
            if (x[i] >= 850) {
                x[i] = 0;
            }
            drawWolke(x[i], y[i], "white");
        }
        window.setTimeout(animate, 30);
    }
})(L6_Canvas || (L6_Canvas = {}));
//# sourceMappingURL=aufgabe_6_Main.js.map