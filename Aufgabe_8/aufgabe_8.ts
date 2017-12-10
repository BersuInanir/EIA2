//Aufgabe 8
//Name: Bersu Inanir
//Matrikel: 254073
//Datum: 10.Dezember.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.






namespace DynHTML {

    window.addEventListener("load", input);

    function input(): void {

        let box: number = parseInt(prompt("Geben Sie eine Zahl zwischen 10 & 100 ein")); //number wird in string umgewandelt



        if (box >= 10 && box <= 100) {
            for (let i: number = 0; i < box; i++) {
                createDiv("hsl(" + Math.random() * 360 + ", 70%, 70%)", Math.random() * 1000 + 200, Math.random() * 800); //random Werte für Farbe, x und y 
            }
        }


        else { 
            alert("Bitte nur Werte zwischen 10 und 100 eingeben"); //Wenn Bedingung nicht erfüllt ist 
            input();

        }


    }

    function createDiv(_color: string, _x: number, _y: number): void {  //Boxen erzeugen

        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        
        let box: CSSStyleDeclaration = div.style;
        
        box.width = "20px";
        box.height = "20px";
        box.backgroundColor = _color;
        box.borderRadius = "50px";
        box.left = _x + "px";
        box.bottom = _x + "px";
        box.bottom = _y + "px";
        box.right = _y + "px";
        
        
    }




}