// CODE IN ZUSAMMENARBEIT MIT KRISTINA NOVIKOV


namespace aufgabe10 {

    window.addEventListener("load", init);


    // ARRAY Weihnachtsbaum 
    let weihnachtsbaum: string[] = ["Nordmanntanne", "Blaufichte", "Edeltanne", "Colorado-Tanne"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputWeihnachtsbaum: HTMLInputElement[] = [];

    // ARRAY Halterung
    let halterung: string[] = ["Metall", "Messing"];
    // Leeres HTMLInputElement Array um Artikel abzuspeichern
    let inputHalterung: HTMLInputElement[] = [];

    // ARRAY Dekoration 
    let dekoration: string[] = ["Plastikkugeln", "Glaskugeln", "Glocken", "Lametta", "Schneeflocken", "Christbaumspitze"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputDekoration: HTMLInputElement[] = [];

    //Array Beleuchtung
    let beleuchtung: string[] = ["Lichterketten", "LED-Kugeln", "LED-Sterne"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputBeleuchtung: HTMLInputElement[] = [];

    // ARRAY Lieferung
    let lieferung: string[] = ["Standard", "Express"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputLieferung: HTMLInputElement[] = [];


    // Erstellte Variablen sollen HTML-Element sein
    let Baum: HTMLElement;
    let Halterung: HTMLElement;
    let Dekoration: HTMLElement;
    let Beleuchtung: HTMLElement;
    let Lieferung: HTMLElement;

    let Warenkorb: HTMLElement;
    let Warenkorbbutton: HTMLElement;




    function init(): void {


        // Die erstellten Variablen werden der Id im HTML-Dokument zugewiesen

        Baum = document.getElementById("baum");           // Variable erhält zugriff auf ID im HTML
        Baum.addEventListener("change", changeOrder);     //EventListener Change wird bei erfolgter Änderung ausgelöst
        //Wenn Wert verändert wird, wird EventListener aktiviert

        Halterung = document.getElementById("halterung");
        Halterung.addEventListener("change", changeOrder);

        Dekoration = document.getElementById("dekoration");
        Dekoration.addEventListener("change", changeOrder);

        Lieferung = document.getElementById("lieferung");
        Lieferung.addEventListener("change", changeOrder);

        Beleuchtung = document.getElementById("beleuchtung");
        Beleuchtung.addEventListener("change", changeOrder);

        Warenkorb = document.getElementById("warenkorb");
        Warenkorbbutton = document.getElementById("warenkorbbutton");
        Warenkorbbutton.addEventListener("click", checkOrder);



        // Funktionen zur Erstellung des Formulars
        createBaum();
        createHalterung();
        createDekoration();
        createBeleuchtung();
        createLieferung();




    }


    //For-Schleife zur Erzeugnung Weihnachtsbaum
    function createBaum(): void {
        //erstellt pro Baum einen Input
        for (let i: number = 0; i < weihnachtsbaum.length; i++) {
            createInputBaum(weihnachtsbaum[i]);
        }
    }


    // Input und Label werden erzeugt 
    function createInputBaum(_baum: string): void {  // Für den Artikel werden Input & Label erzeugt

        let label: HTMLLabelElement = document.createElement("label"); //Create Label 
        let input: HTMLInputElement = document.createElement("input"); // Create Input 

        label.innerText = _baum;        //Artikel
        label.appendChild(input);       //Append Input to Label

        input.type = "radio";           //Input vom Typ Radio
        input.name = "Radiogroup";
        input.value = "radioboxes";
        input.id = "radio";
        Baum.appendChild(label);        //Append Label to Baum 
        inputWeihnachtsbaum.push(input); // input wird in das leere Array gepusht

    }


    //For-Schleife zur Erzeugnung Halterung
    function createHalterung(): void {
        //erstellt pro Halterung einen Input
        for (let i: number = 0; i < halterung.length; i++) {
            createInputHalterung(halterung[i]);
        }
    }


    function createInputHalterung(_halterung: string): void {   // Für den Artikel werden Input & Label erzeugt

        let label: HTMLLabelElement = document.createElement("label"); //label wird erzeugt
        let input: HTMLInputElement = document.createElement("input"); // input wird erzeugt

        label.innerText = _halterung;   //Artikel
        label.appendChild(input);       //Append Input to Label

        input.type = "radio";           //Input vom Typ Radio
        input.name = "NameHalterung";
        input.value = "radioboxes";
        Halterung.appendChild(label);   //Append Label to Halterung
        inputHalterung.push(input);     //Input wird ins leere Array gepusht
    }



    // For-Schleife zur Erzeugung Dekoration 
    function createDekoration(): void {
        //erstellt pro Dekoration einen Input
        for (let i: number = 0; i < dekoration.length; i++) {
            createInputDekoration(dekoration[i]);
        }
    }


    function createInputDekoration(_dekoration: string): void { //Für den Artikel werden Input & Label erzeugt

        let label: HTMLLabelElement = document.createElement("label"); //label wird erzeugt
        let input: HTMLInputElement = document.createElement("input"); // input wird erzeugt

        label.innerText = _dekoration;      //Artikel
        label.appendChild(input);           //Append Input to Label 

        input.type = "number";              //Input vom Typ Number
        input.name = "NameDekoration";
        input.value = "0";   // Wert 0 
        input.min = "0";     //mindestwert
        input.max = "50";    //höchstwert  
        Dekoration.appendChild(label);      //Append label to Dekoration 
        inputDekoration.push(input);        //Input wird ins leere Array gepusht
    }


    //For-Schleife zur Erzeugung Beleuchtung
    function createBeleuchtung(): void {
        //erstellt pro Beleuchtung einen Input 
        for (let i: number = 0; i < beleuchtung.length; i++) {
            createInputBeleuchtung(beleuchtung[i]);
        }
    }

    function createInputBeleuchtung(_beleuchtung: string): void {   //Für den Artikel werden Input und Label erzeugt

        let label: HTMLLabelElement = document.createElement("label"); //label wird erzeugt
        let input: HTMLInputElement = document.createElement("input"); // input wird erzeugt

        label.innerText = _beleuchtung; //Artikel
        label.appendChild(input);       //Append Input to label

        input.type = "number";          //Input vom Typ number
        input.name = "NameDekoration";
        input.value = "0";  //Wert 0 
        input.min = "0";    //mindestwert
        input.max = "50";   //höchstwert  
        Beleuchtung.appendChild(label); //Append label to Beleuchtung
        inputBeleuchtung.push(input);   //Input wird ins leere Array gepusht
    }



    //For-Schleife zur Erzeugung Lieferung
    function createLieferung(): void {
        //erstellt pro Lieferung einen Input
        for (let i: number = 0; i < lieferung.length; i++) {
            createInputLieferung(lieferung[i]);
        }
    }

    function createInputLieferung(_lieferung: string): void {   // Für den Artikel werden Input und Label erzeugt

        let label: HTMLLabelElement = document.createElement("label"); //label wird erzeugt
        let input: HTMLInputElement = document.createElement("input"); // input wird erzeugt

        label.innerText = _lieferung;    //Artikel
        label.appendChild(input);       //Append Input to Label

        input.type = "radio";           //Input vom Typ Radio
        input.name = "NameLieferung";
        input.value = "radioboxes";
        Lieferung.appendChild(label);   //Append label to Lieferung
        inputLieferung.push(input);     //Input wird ins leere Array gepusht
    }





    function changeOrder(): void {  //Funktion changeOrder wird bei erfolgter Änderung aufgerufen  

        let summe: number = 0;  //Warenkorb leer 

        for (let i: number = 0; i < inputWeihnachtsbaum.length; i++) { //Artikel werden druchlaufen
            if (inputWeihnachtsbaum[i].checked) { //boolean bei mehrerer Auswahlmöglichkeit
                summe += 40;    //summe + 40
            }
        }


        for (let i: number = 0; i < inputHalterung.length; i++) {
            if (inputHalterung[i].checked) {    //boolean bei mehrerer Auswahlmöglichkeit
                summe += 10;
            }
        }


        for (let i: number = 0; i < inputLieferung.length; i++) {
            if (inputLieferung[i].checked) {    //boolean bei mehrerer Auswahlmöglichkeit
                summe += 5;
            }
        }

        for (let i: number = 0; i < inputDekoration.length; i++) {
            summe += (parseInt(inputDekoration[i].value) * 2);    //liest string ein und wird in number umgewandelt
        }                                                    // value = string

        for (let i: number = 0; i < inputBeleuchtung.length; i++) {
            summe += (parseInt(inputBeleuchtung[i].value) * 4); //liest string ein und wird in number umgewandelt 
        }                                                  // value = string             

        handleChange(summe); //Funktion handleChange wird aufgerufen 


    }

    // Warenkorb 
    function handleChange(_summe: number): void {  //Funktion gibt Gesamtsumme aus 


        //Greift auf Element Id im Html zu & fügt einen Text ein 
        document.getElementById("warenBaum").innerText = " ";
        document.getElementById("warenHalterung").innerText = " ";
        document.getElementById("warenDekoration").innerText = " ";
        document.getElementById("warenBeleuchtung").innerText = " ";
        document.getElementById("warenLieferung").innerText = " ";



        for (let i: number = 0; i < inputWeihnachtsbaum.length; i++) {

            if (inputWeihnachtsbaum[i].checked) {   //boolean
                document.getElementById("warenBaum").innerText += weihnachtsbaum[i] + "" + " 40 Euro" + "\n"; //Innertext = Artikel und Summe 
            }
        }


        for (let i: number = 0; i < inputHalterung.length; i++) {

            if (inputHalterung[i].checked) {    //boolean
                document.getElementById("warenHalterung").innerText += halterung[i] + " " + " 10 Euro" + "\n"; //Innertext = Artikel und Summe
            }


        }

        for (let i: number = 0; i < inputLieferung.length; i++) {

            if (inputLieferung[i].checked) { //boolean
                document.getElementById("warenLieferung").innerText += lieferung[i] + " " + " 5 Euro" + "\n"; //Innertext = Artikel und Summe 
            }


        }
        for (let i: number = 0; i < inputDekoration.length; i++) {

            if (parseInt(inputDekoration[i].value) > 0) {   //konvertiert string in zahl //value = string
                document.getElementById("warenDekoration").innerText += dekoration[i] + " " + " " + (parseInt(inputDekoration[i].value) * 2) + " Euro" + "\n";
            }
        }

        for (let i: number = 0; i < inputBeleuchtung.length; i++) {

            if (parseInt(inputBeleuchtung[i].value) > 0) {   //konvertiert string in zahl //value = string
                document.getElementById("warenBeleuchtung").innerText += beleuchtung[i] + " " + " " + (parseInt(inputBeleuchtung[i].value) * 4) + " Euro" + "\n";
            }
        }

        document.getElementById("gesamtsumme").innerText = _summe.toString() + " Euro"; // wandelt Zahl in einen String 
    }




    // Bestellung wird geprüft 
    function checkOrder(): void {


        let nachname: HTMLInputElement = <HTMLInputElement>document.getElementById("nachname");
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("vorname");
        let email: HTMLInputElement = <HTMLInputElement>document.getElementById("email");
        let strasse: HTMLInputElement = <HTMLInputElement>document.getElementById("strasse");
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("postleitzahl");
        let ort: HTMLInputElement = <HTMLInputElement>document.getElementById("ort");

        // überprüft ob etwas eingegeben wurde
        // checkValidity = boolean 
        if (nachname.checkValidity() == false || vorname.checkValidity() == false || email.checkValidity() == false || strasse.checkValidity() == false || postleitzahl.checkValidity() == false || ort.checkValidity() == false) {


            //Wenn Fehlerhaft 
            alert("Bitte alle Felder in der Liefer-Adresse ausfuellen");
        }


        //Wenn richtig 
        else {
            nachname.style.backgroundColor = "lightgreen";
            vorname.style.backgroundColor = "lightgreen";
            email.style.backgroundColor = "lightgreen";
            strasse.style.backgroundColor = "lightgreen";
            postleitzahl.style.backgroundColor = "lightgreen";
            ort.style.backgroundColor = "lightgreen";

            alert("Ihre Bestellung wurde erfolgreich abgeschickt");
        }
    }







}