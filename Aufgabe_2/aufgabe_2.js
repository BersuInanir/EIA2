//Aufgabe 2 canvas
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 22.Oktober 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var L2_Canvas;
(function (L2_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        crc2.fillStyle = "#cbe8ea";
        crc2.fillRect(0, 0, 800, 600);
        //Sonne
        crc2.beginPath();
        crc2.arc(40, 70, 70, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#f9f778";
        crc2.fill();
        //Wolken
        crc2.beginPath();
        crc2.arc(160, 70, 24, 0, 2 * Math.PI);
        crc2.arc(140, 100, 26, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(180, 110, 32, 0, 2 * Math.PI);
        crc2.arc(210, 80, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(630, 110, 24, 0, 2 * Math.PI);
        crc2.arc(600, 140, 24, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(645, 150, 32, 0, 2 * Math.PI);
        crc2.arc(680, 130, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        // Berg
        drawBerg(350, 150, "grey");
        drawBerg(450, 100, "Darkgrey");
        //Berg
        crc2.beginPath();
        crc2.moveTo(450, 100);
        crc2.lineTo(730, 600);
        crc2.lineTo(640, 600);
        crc2.closePath();
        crc2.fillStyle = "Dimgrey";
        crc2.fill();
        //H�gel1
        crc2.beginPath();
        crc2.moveTo(450, 600);
        crc2.quadraticCurveTo(600, 300, 1000, 600);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.stroke();
        //H�gel2
        crc2.beginPath();
        crc2.moveTo(-650, 620);
        crc2.quadraticCurveTo(100, -70, 620, 600);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.stroke();
        //Gondel
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.moveTo(0, 120);
        crc2.lineTo(800, 300);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "dimgrey";
        crc2.fillRect(60, 160, 50, 25);
        crc2.moveTo(85, 160);
        crc2.lineTo(85, 140);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillRect(600, 280, 50, 25);
        crc2.moveTo(625, 280);
        crc2.lineTo(625, 260);
        crc2.closePath();
        crc2.stroke();
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
        //Schneeflocken
        drawSnowflake(10, 10, 3, 0, 2, "white");
        drawSnowflake(20, 20, 2, 0, 2, "white");
        drawSnowflake(20, 20, 4, 0, 2, "white");
        //For-Schleifen f�r verschiedene Gr��en
        for (let i = 0; i < 130; i++) {
            let x = 10 + Math.random() * 790;
            let y = 10 + Math.random() * 590;
            let radius = 3;
            let sAngle = 0;
            let eAngle = 2;
            drawSnowflake(x, y, radius, sAngle, eAngle, "white");
        }
        for (let i = 0; i < 180; i++) {
            let x = 10 + Math.random() * 790;
            let y = 10 + Math.random() * 590;
            let radius = 2;
            let sAngle = 0;
            let eAngle = 2;
            drawSnowflake(x, y, radius, sAngle, eAngle, "white");
        }
        for (let i = 0; i < 70; i++) {
            let x = 10 + Math.random() * 790;
            let y = 10 + Math.random() * 590;
            let radius = 4;
            let sAngle = 0;
            let eAngle = 2;
            drawSnowflake(x, y, radius, sAngle, eAngle, "white");
        }
    }
    //Funktionen
    function drawBerg(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 250, _y + 450);
        crc2.lineTo(_x - 250, _y + 450);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    function drawTree(_x, _y, _color) {
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.moveTo(_x, _y + 5);
        crc2.lineTo(_x + 10, _y + 35);
        crc2.lineTo(_x - 10, _y + 35);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y - 5);
        crc2.lineTo(_x + 10, _y + 20);
        crc2.lineTo(_x - 10, _y + 20);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y - 20);
        crc2.lineTo(_x + 10, _y + 5);
        crc2.lineTo(_x - 10, _y + 5);
        crc2.closePath();
        crc2.fill();
    }
    
    function drawSnowflake(_x, _y, _radius, _sAngle, _eAngle, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _sAngle, _eAngle * Math.PI);
        crc2.fillStyle = _color;
        crc2.closePath();
        crc2.fill();
    }
})(L2_Canvas || (L2_Canvas = {}));
//# sourceMappingURL=aufgabe_2.js.map