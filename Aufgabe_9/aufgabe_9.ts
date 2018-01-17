namespace aufgabe9 {

    window.addEventListener("load", init);  // Register for eventhandling
    window.addEventListener("keydown", handleKeyDown);

    let alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let currentLetter: string = ""; // leerer String um gewählte Buchstabe abzuspeichern
    


    
    
    function init(_event: Event): void { 

        for (let i: number = 0; i < alphabet.length; i++) {  //erzeugt Div-Boxen von A - Z   

            let div: HTMLDivElement = document.createElement("div");  // create div element

            //style der Div-Box
            div.style.textAlign = "center";
            div.style.fontSize = "25px";
            div.style.backgroundColor = "black";
            div.style.margin = "0.5%";
            div.style.padding = "0.5%";
            div.style.borderRadius = "10px";
            div.style.color = "white";
            div.style.fontFamily = "sans-serif";
            div.style.display = "inline";

            div.innerText = alphabet[i]; //Buchstaben A-Z werden in Div-Boxen hinzugefügt
            div.id = alphabet[i].toLowerCase(); 


            div.addEventListener("mousedown", handleMouseEvent); //Document erhält Ohr für das Event "mousedown"
            document.body.appendChild(div); //Append Div to Body

        }

        // Brief für die Eingabe der Buchstaben erzeugen 
        let div2: HTMLDivElement = document.createElement("div"); //create Div

        div2.style.width = "58em";
        div2.style.height = "30em";
        div2.style.backgroundColor = "lightgrey";
        div2.style.color = "white";
        div2.style.margin = "0% auto";
        div2.style.marginTop = "5%";
        div2.style.border = "1px solid black";

        div2.addEventListener("mousedown", toPositionLetter);   // Event für Mausklick für die Funktion -> handleMouseEvent
        document.body.appendChild(div2);    //Append div to body 

    }



    // Buchstabe anklicken/auswählen mit dem MouseEvent
    function handleMouseEvent(_event: MouseEvent): void { //empfängt ein Event von der Klasse MouseEvent -> mousedown

        let letter: HTMLDivElement = <HTMLDivElement>_event.target; //zeigt Element an durch den das Ereignis ausgelöst wurde //Ausgewählte Buchstabe

        letter.style.color = "maroon";                  // Ausgewählte Buchstabe färbt sich rot
        letter.style.backgroundColor = "white";         // Hintergund färbt sich weiß
        currentLetter = letter.innerText;               // Buchstabe wird eingefügt 
        currentLetter = letter.id.toUpperCase();        // Buchstabe wird in Großbuchstaben wiedergegeben
    }



    // Buchstabe wird positioniert mit dem MousEvent
    function toPositionLetter(_event: MouseEvent): void { //empfängt ein Event der Klasse MouseEvent -> mousedown

        let position: HTMLDivElement = document.createElement("div");

        position.innerText = currentLetter; //ausgewählte Buchstabe
        position.style.fontSize = "25px";
        position.style.position = "absolute";
        position.style.color = "black";
        position.style.left = _event.pageX + "px";  // X-Position
        position.style.top = _event.pageY + "px";   // Y-Position

        position.addEventListener("mousedown", handleMouseDown); // Event für Mausclick für die Funktion -> handleMouseDown
        document.body.appendChild(position); //Append Position to Body

    }

    
    
    function handleKeyDown(_event: KeyboardEvent): void {  //empfängt ein Event der Klasse KeyboardEvent -> keydown

        if (alphabet.indexOf(_event.key.toUpperCase()) != -1) { //gibt den ersten Index zurück, an dem das übergebene Element im Feld gefunden wurde, oder -1, wenn es nicht vorhanden ist

            let keyboardLetter: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            keyboardLetter.style.color = "green";
            keyboardLetter.style.backgroundColor = "white";
            currentLetter = _event.key.toUpperCase();

        }
    }

    function handleMouseDown(_event: MouseEvent): void {        //empfängt ein Event der Klasse MouseEvent -> mousedown
        if (_event.altKey == false)                             // wenn alt-Taste nicht gedrückt wird 
            return;

        else {                                                  // wenn alt-Taste gedrückt wird, wird der ausgewählte Buchstabe entfernt
            let remove: HTMLDivElement = <HTMLDivElement>_event.target; 
            document.body.removeChild(remove);
        }
    }



}