var L6_Interface;
(function (L6_Interface) {
    var crc2;
    var imageData = ImageData;
    var bienen = [];
    var n = 10;
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Hallo");
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "#a3d7ff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#a6e775";
        crc2.fillRect(0, 200, canvas.width, canvas.height);
        crc2.moveTo(0, 200);
        crc2.stroke();
        // Funktionsabläufe 
        drawSonne(10, 100, "#fef965", "#fcd93e");
        drawWolke(250, 60, "#ffffff", "white");
        drawWolke(440, 5, "#ffffff", "white");
        drawFelsen(105, 115, "#ffffff", "#9eab94");
        drawFelsenSpitze(105, 70, "#ffffff", "white");
        drawBlume(200, 290, "#black", "#5e4781");
        drawBlume(80, 250, "#black", "#b4232c");
        drawBlume1(150, 240, "#black", "SeaGreen");
        drawBlume1(120, 200, "black", "yellow");
        drawTulpe(320, 220, "black", "black");
        //  drawBaum(0, 0, "#8b520d", "#8b520d");
        drawBaumKlein(0, 0, "#8b520d", "#8b520d");
        drawPflanze(370, 250, "#8ff55c", "#8ff55c");
        zufallPosition();
        drawKorb(400, 290);
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        for (var i = 0; i < n; i++) {
            var b = { x: 0, y: 0, color: "", size: 0 };
            b.x = 480; //x-Koordinate Bienenkorböffnung
            b.y = 190; //y-Koordinate Bienenkorböffnung
            b.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            b.size = Math.random() * 7 + 5;
            bienen[i] = b;
        }
        canvas.addEventListener("click", addBee);
        //setTimeOut
        window.setTimeout(animate, 20);
    }
    //Aufgabe 5 Animation 
    //Aufgabe 6 Interface
    function animate() {
        crc2.putImageData(imageData, 0, 0);
        for (var i = 0; i < n; i++) {
            var b = bienen[i];
            b.x += Math.random() * 4 - 2.1;
            b.y += Math.random() * 7 - 3.5;
            if (b.x < 0) {
                b.x = crc2.canvas.width;
            }
            if (b.y < 0) {
                b.y = crc2.canvas.height;
            }
            if (b.y >= crc2.canvas.height) {
                b.y = 0;
            }
            drawBiene(b);
        }
        window.setTimeout(animate, 20);
    }
    function addBee() {
        bienen.push({ x: 480, y: 190, color: "hsl(" + Math.random() * 360 + ", 100%, 50%)", size: Math.random() * 7 + 5 });
        n++;
        console.log("added Bee");
    }
    function zufallPosition() {
        for (var i = 0; i < 7; i++) {
            var minWidth = 30;
            var minHeight = 200;
            var maxWidth = 350;
            var maxHeight = 300;
            var n = Math.floor((Math.random() * 2) + 0);
            var randomXPosition = Math.floor(Math.random() * (maxWidth - minWidth + 0) + minWidth);
            var randomYPosition = Math.floor(Math.random() * (maxHeight - minHeight + 0) + minHeight);
            drawBlume(randomXPosition, randomYPosition, "#black", "#b4232c");
        }
    }
    function drawSonne(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x + 0, _y + 0, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWolke(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 10, _y + 20, 30, 0, 2 * Math.PI);
        crc2.arc(_x + 60, _y + 20, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 110, _y + 50, 45, 0, 2 * Math.PI);
        crc2.arc(_x + 120, _y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 142, _y + 45, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawFelsen(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 115, _y + 85);
        crc2.lineWidth = 3;
        crc2.lineTo(_x - 95, _y + 40);
        crc2.lineTo(_x - 98, _y + 10);
        crc2.lineTo(_x - 75, _y + 10);
        crc2.lineTo(_x - 55, _y - 8);
        crc2.lineTo(_x - 50, _y - 30);
        crc2.lineTo(_x, _y - 95);
        crc2.lineTo(_x + 40, _y + -50);
        crc2.lineTo(_x + 80, _y + -40);
        crc2.lineTo(_x + 120, _y - 15);
        crc2.lineTo(_x + 140, _y - 20);
        crc2.lineTo(_x + 150, _y - 10);
        crc2.lineTo(_x + 175, _y - 30);
        crc2.lineTo(_x + 220, _y + 85);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //draw a triangle around the coordinates (_x, _y);
    }
    function drawFelsenSpitze(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 35, _y - 5);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x + 27, _y - 20);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Abtrennung Felsen
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 50, _y + 18);
        crc2.lineTo(_x - 20, _y + 50);
        crc2.lineTo(_x + 30, _y + 70);
        crc2.stroke();
    }
    function drawBlume(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#19760c";
        crc2.fillRect(_x + 5, _y + 15, 3, 25);
        crc2.arc(_x + 4, _y + 20, 12, 0, 1.5);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "white";
        crc2.lineWidth = 1;
        crc2.arc(_x - 3, _y + 0, 9, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 8, _y - 12, 9, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 19, _y - 1, 9, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 8, _y + 10, 9, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "#f5ee5c";
        crc2.arc(_x + 8, _y + 0, 6, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBlume1(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#19760c";
        crc2.fillRect(_x + 5, _y + 15, 3, 25);
        crc2.arc(_x + 4, _y + 20, 12, 0, 1.5);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "white";
        crc2.lineWidth = 1;
        crc2.arc(_x - 3, _y + 0, 9, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 8, _y - 12, 9, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 19, _y - 1, 9, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 8, _y + 10, 9, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "#f5ee5c";
        crc2.arc(_x + 8, _y + 0, 6, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawTulpe(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#19760c";
        crc2.fillRect(_x + 10, _y + 30, 3, 22);
        crc2.arc(_x + 0, _y + 35, 12, 0, 1.5);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#d40000";
        crc2.arc(_x + 11.7, _y + 22, 11.5, 0, 1 * Math.PI);
        crc2.moveTo(_x + 0, _y + 25);
        crc2.lineTo(_x, _y + 9);
        crc2.lineTo(_x + 9, _y + 18);
        crc2.lineTo(_x + 12, _y + 5);
        crc2.lineTo(_x + 16, _y + 18);
        crc2.lineTo(_x + 23, _y + 9);
        crc2.lineTo(_x + 23, _y + 23);
        crc2.closePath();
        crc2.fill();
    }
    function drawPflanze(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#277002";
        crc2.fillRect(_x + 10, _y + 30, 3, 60);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 5, _y + 10, 24, 0, 1.5);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 10, _y + 60, 26, 0, 1.5);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 8, _y + 42, 21, 0, 1.5);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 14, _y + 28, 25, 0, 1.5);
        crc2.closePath();
        crc2.fill();
    }
    /*
    function drawBaum(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = "#8b520d";
        crc2.strokeStyle = "#8b520d";
        crc2.lineWidth = 2;
        crc2.fillRect(420, 170, 35, 80);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#428721";
        crc2.strokeStyle = "#428721";
        crc2.arc(_x + 420, _y + 210, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.arc(_x + 460, _y + 225, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.arc(_x + 490, _y + 180, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.arc(_x + 440, _y + 170, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.arc(_x + 500, _y + 230, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    } */
    function drawBaumKlein(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#8b520d";
        crc2.strokeStyle = "#8b520d";
        crc2.lineWidth = 2;
        crc2.fillRect(420, 180, 35, 70);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#428721";
        crc2.strokeStyle = "#428721";
        crc2.arc(_x + 420, _y + 170, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.arc(_x + 425, _y + 130, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.arc(_x + 465, _y + 157, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawKorb(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "Peru";
        crc2.strokeStyle = "#000000";
        crc2.fillRect(460, 170, 50, 35);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "#75430b";
        crc2.fillRect(490, 190, 15, 15);
        crc2.closePath();
        crc2.fill();
    }
    ////// Aufgabe 6  ///////
    function drawBiene(_b) {
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.fillStyle = _b.color;
        crc2.strokeStyle = "black";
        crc2.arc(_b.x, _b.y, _b.size, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(_b.x - 10, _b.y, _b.size, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.arc(_b.x + 3, _b.y - 14, _b.size, 0, 2);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(L6_Interface || (L6_Interface = {}));
//# sourceMappingURL=aufgabe6a.js.map