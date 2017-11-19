//Aufgabe 5 canvas
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 19.Oktober 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.



namespace L5_Canvas {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let imageData: ImageData;




    let x: number[] = [];
    let y: number[] = [];

    
    
    //Aufgabe 5
    let schneeflocken: Snow[] = [];

    let skifahrer: SkiInfo[] = []; // Variable erzeugen für die Class SkiInfo

    let gondel: GondelInfo[] = [];




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





        //Funktionsaufrufe drawTree
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






        //ImageData
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);




        
        //Aufgabe 5
        
        //Gondel
        for (let i: number = 0; i < 3; i++) {
            let g: GondelInfo = new GondelInfo();
            gondel[i] = g;

        }



        //Schneeflocken 
        for (let i: number = 0; i < 100; i++) {
            let sw: Snow = new Snow();                  // new ruft die Constructor-Methode auf und erzeugt Objekt der Klasse 

            schneeflocken[i] = sw;

        }


        
        // Startposition der Wolken
        for (let i: number = 0; i < 3; i++) {

            x[i] = 2 + Math.random() * 700;
            y[i] = 80;
        }




        //Skifahrer Aufgabe 5        
        for (let i: number = 0; i < 5; i++) {       
            let s: SkiInfo = new SkiInfo();         // new ruft die Constructor-Methode auf und erzeugt Objekt der Klasse 
            skifahrer[i] = s;

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










    // Aufgabe 3
    // Animate-Funktion

    function animate(): void {

        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(imageData, 0, 0);



        //Schneeflocken Aufgabe 5
        for (let i: number = 0; i < schneeflocken.length; i++) {

            let sw: Snow = schneeflocken[i];
            sw.update();                        // Schneeflocken werden bewegt und gezeichnet  update = (move/draw)Methode

        }



        //Wolken
        for (let i: number = 0; i < x.length; i++) {

            x[i] += Math.random() * 2;


            if (x[i] >= 850) {          //Geschwindigkeit der Wolke in X-Richtung
                x[i] = 0;
            }

            drawWolke(x[i], y[i], "white");
        }






        //Skifahrer Aufgabe 5 
        for (let i: number = 0; i < skifahrer.length; i++) {

            let s: SkiInfo = skifahrer[i];
            skifahrer[i].update();                                 //Skifahrer wird gezeichnet und bewegt
        }                                                          // . ruft die Methoden auf





        //Gondel Aufgabe 5 

        for (let i: number = 0; i < gondel.length; i++) {
            let g: GondelInfo = gondel[i];
            gondel[i].update();

        }


        window.setTimeout(animate, 30);
    }




}
