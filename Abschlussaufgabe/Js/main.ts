
/*
Aufgabe: Abschlussaufgabe
Name: Bersu Inanir
Matrikel: 254073
Datum: 22.02.2018   
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/




namespace Abschlussaufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    
    let grd: CanvasGradient;
    
    let imageData: ImageData; // Variable um Hintergrund zu speichern 

    //SUPERKLASSE STERNE
    let stern: Sterne[] = [];
    


    //SUPERKLASSE PLANETEN 
    let planets: Planeten[] = [];

    
    //Function init
    function init(): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //BACKGROUND 
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 1000, 700);

        //STERNBILD 
        crc2.beginPath();
        crc2.moveTo(110, 70);
        crc2.lineTo(200, 80);
        crc2.lineTo(170, 150);
        crc2.lineTo(195, 230);
        crc2.moveTo(170, 150);
        crc2.lineTo(110, 160);
        crc2.lineTo(90, 240);
        crc2.moveTo(110, 160);
        crc2.lineTo(110, 70);
        crc2.arc(110, 70, 2, 0, Math.PI * 2);
        crc2.moveTo(170, 150);
        crc2.arc(170, 150, 2, 0, Math.PI * 2);
        crc2.moveTo(200, 80);
        crc2.arc(200, 80, 2, 0, Math.PI * 2);
        crc2.moveTo(195, 230);
        crc2.arc(195, 230, 2, 0, Math.PI * 2);
        crc2.moveTo(110, 160);
        crc2.arc(110, 160, 2, 0, Math.PI * 2);
        crc2.moveTo(90, 240);
        crc2.arc(90, 240, 2, 0, Math.PI * 2);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.beginPath();

        //STERNBILD
        crc2.beginPath();
        crc2.moveTo(700, 300);
        crc2.arc(700, 300, 2, 0, Math.PI * 2);
        crc2.lineTo(740, 280);
        crc2.arc(740, 280, 2, 0, Math.PI * 2);
        crc2.lineTo(780, 285);
        crc2.arc(780, 285, 2, 0, Math.PI * 2);
        crc2.lineTo(825, 280);
        crc2.arc(825, 280, 2, 0, Math.PI * 2);
        crc2.lineTo(855, 330);
        crc2.arc(855, 330, 2, 0, Math.PI * 2);
        crc2.lineTo(940, 300);
        crc2.arc(940, 300, 2, 0, Math.PI * 2);
        crc2.lineTo(945, 235);
        crc2.arc(945, 235, 2, 0, Math.PI * 2);
        crc2.lineTo(825, 280);
        crc2.strokeStyle = "white";
        crc2.stroke();

        
        
        //STERNE
        for (let i: number = 0; i < 200; i++) {
            let s: Sterne = new Sterne();
            stern[i] = s;
        }
    
        //PLANETEN 
        //new erzeugt neues Objekt 
        //Push fügt es dem Array Planets Hinzu
        planets.push(new Sonne());
        planets.push(new Merkur());
        planets.push(new Venus());
        planets.push(new Erde());
        planets.push(new Mars());
        planets.push(new Jupiter());
        planets.push(new Saturn());
        planets.push(new Uranus());

        
        // Background speichern
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        
        //STERNSCHNUPPEN
        for (let i: number = 0; i < 2; i++) {
            let ss: Sternschnuppe = new Sternschnuppe();
            stern.push(ss);
        }

        
        //EVENTLISTENER STERNSCHNUPPE
        canvas.addEventListener("click", handleClick);
        //TABLET SMARTPHONE
        canvas.addEventListener("touchstart", handleClick);

        
         
        window.setTimeout(animate, 30);
        
        }

        //FUNKTION ANIMATE
        function animate(): void {

            crc2.clearRect(0, 0, 1000, 700);
            crc2.putImageData(imageData, 0, 0);

            //PLANTEN
            for (let i: number = 0; i < planets.length; i++) {
                let m: Planeten = planets[i];
                m.draw();
            }
            
            //STERNE 
            for (let i: number = 0; i < stern.length; i++) {
                let star: Sterne = stern[i];
                star.update();
            }
            


            //TIMEOUT
            window.setTimeout(animate, 30);                         
        }

        function handleClick(_event: MouseEvent): void {            // Empfängt ein Event von der Klasse MouseEvent
            let hadClick: boolean = false;                          // Mit der Variable wird überprüft ob es einen Click auf den Planeten gab   
            for (let i: number = 0; i < planets.length; i++) {      // Durchläuft die einzelnen Planeten 
                let m: Planeten = planets[i];                       // Neue Variable den aktuellen Wert aus dem Array zuweisen 
                if (m.hasClick(_event.offsetX, _event.offsetY)) {   // Wenn der Click innerhalb des Radius eines Planeten ist liefert die Funktion True zurück 
                    m.handleClick();                                // handleClick in Planeten wird aufgerufen 
                                                                    
                    hadClick = true;                                
                }
            }
            if (!hadClick) {                                        // Wenn keiner der Planeten angeklickt wurde dann wird die Funktion addSternschnuppe aufgerufen 
                addSternschnuppe();
                
            }
        }


        //STERNSCHNUPPEN ERZEUGEN        
        function addSternschnuppe(): void {

            for (let i: number = 0; i < 2; i++) {                   // Pro Click werden zwei neue Sternschnuppen erzeugt
                createSchnuppe();
            }
        }


        //NEUE STERNSCHNUPPEN ERZEUGEN
        function createSchnuppe(): void {
            let ss: Sternschnuppe = new Sternschnuppe();            // Neuen Sternschnuppen werden gezeichnet
            stern.push(ss);
        }






    }






