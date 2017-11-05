//Aufgabe 3 canvas
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 05.Oktober 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.



namespace L3_Canvas {

    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;
    let imageData: ImageData;

    let arrayX: number[] = [];
    let arrayY: number[] = [];

    let x: number[] = [];
    let y: number[] = [];

    let xSki: number[] = [];
    let ySki: number[] = [];

    function init(): void {

        let canvas: HTMLCanvasElement;
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



        //Hügel1

        crc2.beginPath();
        crc2.moveTo(450, 600);
        crc2.quadraticCurveTo(600, 300, 1000, 600);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.stroke();


        //Hügel2
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



        for (let i: number = 0; i < 5; i++) {
            let x: number = 580 + Math.random() * 200;
            let y: number = 450 + Math.random() * 110;
            drawTree(x, y, "#085014");
        }

        for (let i: number = 0; i < 5; i++) {
            let x: number = 580 + Math.random() * 200;
            let y: number = 450 + Math.random() * 110;
            drawTree(x, y, "#16451e");
        }





        //Aufgabe 3

        

        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.lineWidth = 3;
        crc2.moveTo(100, 400);




        //ImageData
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        // Startposition Schneeflocken
        for (let i: number = 0; i < 100; i++) {    // 100 Schneeflocken
            arrayX[i] = 0 + Math.random() * 800;  // Verteilung der Schneeflocken auf die ganze Canvas-Breite
            arrayY[i] = 0 + Math.random() * 300;  // Verteilung der Schneeflocken auf die Canvas-Höhe
        }




        // Startposition der Wolken
        for (let i: number = 0; i < 3; i++) {

            x[i] = 2 + Math.random() * 700;
            y[i] = 80;

        }

        //Startposition Skifahrer 
        for (let i: number = 0; i < 4; i++) {

            xSki[i] = 0 + Math.random() * 30;
            ySki[i] = 300 + Math.random() * 200;
        }


        //Funktion animate aufrufen
        animate();


    }

    //Funktionen


    function drawWolke(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.arc(_x, _y, 24, 0, 2 * Math.PI);
        crc2.arc(_x - 20, _y + 30, 26, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 20, _y + 40, 32, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 10, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();


    }


    function drawBerg(_x: number, _y: number, _color: string): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 250, _y + 450);
        crc2.lineTo(_x - 250, _y + 450);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }


    function drawTree(_x: number, _y: number, _color: string): void {
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




    function drawSnowflake(_x: number, _y: number, _radius: number, _sAngle: number, _eAngle: number, _color: string): void {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _sAngle, _eAngle * Math.PI);
        crc2.fillStyle = _color;
        crc2.closePath();
        crc2.fill();
    }


    //Skifahrer 
    function drawSki(_x: number, _y: number, _color: string): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.fillRect(_x - 3, _y + 3, 3, 30);
        crc2.fill();
        crc2.fillStyle = "blue";
        crc2.fillRect(_x - 15, _y + 32, 40, 3);
        crc2.fillRect(_x + 24, _y + 26, 3, 9);
        crc2.fill();
    }



    // Aufgabe 3
    // Animate-Funktion
    function animate(): void {

        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(imageData, 0, 0);



        //Schneeflocken
        for (let i: number = 0; i < arrayX.length; i++) {

            arrayX[i] += Math.random() * 2;    // Geschwindigkeit der Schneeflocken in X-Richtung
            arrayY[i] += Math.random() * 6;    // Geschwindigkeit der Schneeflocken in Y-Richtung


            if (arrayY[i] >= 450) {         // Wenn arrayY[i] >= 600px 
                arrayY[i] = 0;              // dann [i] auf Startposition 0 setzen
            }
            if (arrayX[i] >= 800) {         // Wenn arrayX[i] >= 800px
                arrayX[i] = 0;              // dann [i] auf Startposition 0 setzen 
            }
            drawSnowflake(arrayX[i], arrayY[i], 4, 0, 2, "white");

        }


        //Wolken
        for (let i: number = 0; i < x.length; i++) {

            x[i] += Math.random() * 2;


            if (x[i] >= 850) {          //Geschwindigkeit der Wolke in X-Richtung
                x[i] = 0;
            }

            drawWolke(x[i], y[i], "white");
        }


        //Skifahrer
        for (let i: number = 0; i < xSki.length; i++) {

            xSki[i] += Math.random() * 10;
            ySki[i] += Math.random() * 6;

            if (xSki[i] >= 450) {
                xSki[i] = -10;
                ySki[i] = 350;
            }
            if (ySki[i] >= 650) {
                ySki[i] = 350;
                xSki[i] = -10;
            }

            drawSki(xSki[i], ySki[i], "black");
        }
        window.setTimeout(animate, 30);
    }




}
