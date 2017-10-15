//Aufgabe 1 canvas
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 15.Oktober 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.



namespace L1_Canvas {

    window.addEventListener("load", init);



    function init(): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        console.log(crc2);

        //Himmel
        crc2.fillStyle = "AliceBlue";
        crc2.fillRect(0, 0, 800, 600);


        //Sonne
        crc2.beginPath();
        crc2.arc(780, 70, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "gold";
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


        //Berg    

        crc2.beginPath();
        crc2.moveTo(350, 150);
        crc2.lineTo(600, 600);
        crc2.lineTo(100, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "SlateGrey";
        crc2.fill();




        //Berg

        crc2.beginPath();
        crc2.moveTo(450, 100);
        crc2.lineTo(700, 600);
        crc2.lineTo(200, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "Darkgrey";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(450, 98);
        crc2.lineTo(477, 150);
        crc2.lineTo(423, 150);
        crc2.closePath();
        crc2.fillStyle = "white";
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
        crc2.strokeRect(60, 160, 50, 25);
        crc2.moveTo(85, 160);
        crc2.lineTo(85, 140);
        crc2.closePath();
        crc2.stroke();


        crc2.beginPath();
        crc2.strokeRect(600, 280, 50, 25);
        crc2.moveTo(625, 280);
        crc2.lineTo(625, 260);
        crc2.closePath();
        crc2.stroke();


        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "Sienna";
        crc2.fillRect(700, 500, 10, 40);
        crc2.fill();
        crc2.closePath();

        //Tanne
        crc2.beginPath();
        crc2.fillStyle = "DarkGreen";
        crc2.moveTo(705, 480);
        crc2.lineTo(725, 510);
        crc2.lineTo(685, 510);
        crc2.closePath();
        crc2.fill();
        crc2.moveTo(705, 450);
        crc2.lineTo(725, 490);
        crc2.lineTo(685, 490);
        crc2.closePath();
        crc2.fill();



        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "Sienna";
        crc2.fillRect(730, 480, 10, 40);
        crc2.fill();
        crc2.closePath();

        //Tanne
        crc2.beginPath();
        crc2.fillStyle = "DarkGreen";
        crc2.moveTo(735, 460);
        crc2.lineTo(755, 490);
        crc2.lineTo(715, 490);
        crc2.closePath();
        crc2.fill();
        crc2.moveTo(735, 430);
        crc2.lineTo(755, 470);
        crc2.lineTo(715, 470);
        crc2.closePath();
        crc2.fill();


        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "Sienna";
        crc2.fillRect(650, 430, 10, 40);
        crc2.fill();
        crc2.closePath();

        //Tanne
        crc2.beginPath();
        crc2.fillStyle = "DarkGreen";
        crc2.moveTo(655, 410);
        crc2.lineTo(675, 440);
        crc2.lineTo(635, 440);
        crc2.closePath();
        crc2.fill();
        crc2.moveTo(655, 380);
        crc2.lineTo(675, 420);
        crc2.lineTo(635, 420);
        crc2.closePath();
        crc2.fill();






    }


}


