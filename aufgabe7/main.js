var L7_ObjektorienteProgrammierung;
(function (L7_ObjektorienteProgrammierung) {
    var imageData = ImageData;
    var bienen = [];
    var n = 10;
    var florets = [];
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Hallo");
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L7_ObjektorienteProgrammierung.crc2 = canvas.getContext("2d");
        console.log(L7_ObjektorienteProgrammierung.crc2);
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#a3d7ff";
        L7_ObjektorienteProgrammierung.crc2.fillRect(0, 0, canvas.width, canvas.height);
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#a6e775";
        L7_ObjektorienteProgrammierung.crc2.fillRect(0, 200, canvas.width, canvas.height);
        L7_ObjektorienteProgrammierung.crc2.moveTo(0, 200);
        L7_ObjektorienteProgrammierung.crc2.stroke();
        // Funktionsabläufe 
        drawSonne(10, 100, "#fef965", "#fcd93e");
        drawWolke(250, 60, "#ffffff", "white");
        drawWolke(440, 5, "#ffffff", "white");
        drawFelsen(105, 115, "#ffffff", "#9eab94");
        drawFelsenSpitze(105, 70, "#ffffff", "white");
        drawBlume1(120, 200, "black", "yellow");
        drawTulpe(320, 220, "black", "black");
        drawBaumKlein(0, 0, "#8b520d", "#8b520d");
        drawPflanze(370, 250, "#8ff55c", "#8ff55c");
        drawKorb(400, 290);
        var f = new L7_ObjektorienteProgrammierung.Floret(this.x, this.y);
        f.zufallPosition();
        imageData = L7_ObjektorienteProgrammierung.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        for (var i = 0; i < n; i++) {
            var b = new L7_ObjektorienteProgrammierung.Biene(480, 190);
            bienen[i] = b;
        }
        canvas.addEventListener("click", addBee);
        //setTimeOut
        window.setTimeout(animate, 20);
    }
    //Aufgabe 5 Animation 
    //Aufgabe 6 Interface
    function animate() {
        L7_ObjektorienteProgrammierung.crc2.putImageData(imageData, 0, 0);
        for (var i = 0; i < n; i++) {
            var b = bienen[i];
            b.move();
            b.drawBiene();
        }
        window.setTimeout(animate, 20);
    }
    function addBee() {
        var biene = new L7_ObjektorienteProgrammierung.Biene(480, 190);
        bienen.push(biene);
        n++;
        console.log("added Bee");
    }
    function drawSonne(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = _strokeColor;
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 0, _y + 0, 40, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
    }
    function drawWolke(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 10, _y + 20, 30, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 60, _y + 20, 50, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 110, _y + 50, 45, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 120, _y + 20, 35, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 142, _y + 45, 35, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
    }
    function drawFelsen(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = _strokeColor;
        L7_ObjektorienteProgrammierung.crc2.moveTo(_x - 115, _y + 85);
        L7_ObjektorienteProgrammierung.crc2.lineWidth = 3;
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x - 95, _y + 40);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x - 98, _y + 10);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x - 75, _y + 10);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x - 55, _y - 8);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x - 50, _y - 30);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x, _y - 95);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 40, _y + -50);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 80, _y + -40);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 120, _y - 15);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 140, _y - 20);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 150, _y - 10);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 175, _y - 30);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 220, _y + 85);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        //draw a triangle around the coordinates (_x, _y);
    }
    function drawFelsenSpitze(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = _strokeColor;
        L7_ObjektorienteProgrammierung.crc2.moveTo(_x - 35, _y - 5);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x, _y - 50);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 27, _y - 20);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.closePath();
        //Abtrennung Felsen
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = _strokeColor;
        L7_ObjektorienteProgrammierung.crc2.moveTo(_x - 50, _y + 18);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x - 20, _y + 50);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 30, _y + 70);
        L7_ObjektorienteProgrammierung.crc2.stroke();
    }
    function drawBlume1(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#19760c";
        L7_ObjektorienteProgrammierung.crc2.fillRect(_x + 5, _y + 15, 3, 25);
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 4, _y + 20, 12, 0, 1.5);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = "white";
        L7_ObjektorienteProgrammierung.crc2.lineWidth = 1;
        L7_ObjektorienteProgrammierung.crc2.arc(_x - 3, _y + 0, 9, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 8, _y - 12, 9, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 19, _y - 1, 9, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = _fillColor;
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 8, _y + 10, 9, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#f5ee5c";
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 8, _y + 0, 6, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
    }
    function drawTulpe(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#19760c";
        L7_ObjektorienteProgrammierung.crc2.fillRect(_x + 10, _y + 30, 3, 22);
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 0, _y + 35, 12, 0, 1.5);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#d40000";
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 11.7, _y + 22, 11.5, 0, 1 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.moveTo(_x + 0, _y + 25);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x, _y + 9);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 9, _y + 18);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 12, _y + 5);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 16, _y + 18);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 23, _y + 9);
        L7_ObjektorienteProgrammierung.crc2.lineTo(_x + 23, _y + 23);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
    }
    function drawPflanze(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#277002";
        L7_ObjektorienteProgrammierung.crc2.fillRect(_x + 10, _y + 30, 3, 60);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 5, _y + 10, 24, 0, 1.5);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 10, _y + 60, 26, 0, 1.5);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 8, _y + 42, 21, 0, 1.5);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.arc(_x - 14, _y + 28, 25, 0, 1.5);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
    }
    function drawBaumKlein(_x, _y, _strokeColor, _fillColor) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#8b520d";
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = "#8b520d";
        L7_ObjektorienteProgrammierung.crc2.lineWidth = 2;
        L7_ObjektorienteProgrammierung.crc2.fillRect(420, 180, 35, 70);
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#428721";
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = "#428721";
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 420, _y + 170, 30, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 425, _y + 130, 30, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.arc(_x + 465, _y + 157, 30, 0, 2 * Math.PI);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
    }
    function drawKorb(_x, _y) {
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "Peru";
        L7_ObjektorienteProgrammierung.crc2.strokeStyle = "#000000";
        L7_ObjektorienteProgrammierung.crc2.fillRect(460, 170, 50, 35);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
        L7_ObjektorienteProgrammierung.crc2.stroke();
        L7_ObjektorienteProgrammierung.crc2.beginPath();
        L7_ObjektorienteProgrammierung.crc2.fillStyle = "#75430b";
        L7_ObjektorienteProgrammierung.crc2.fillRect(490, 190, 15, 15);
        L7_ObjektorienteProgrammierung.crc2.closePath();
        L7_ObjektorienteProgrammierung.crc2.fill();
    }
})(L7_ObjektorienteProgrammierung || (L7_ObjektorienteProgrammierung = {}));
//# sourceMappingURL=main.js.map