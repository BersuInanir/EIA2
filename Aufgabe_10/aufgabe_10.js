// CODE IN ZUSAMMENARBEIT MIT KRISTINA NOVIKOV
var aufgabe10;
(function (aufgabe10) {
    window.addEventListener("load", init);
    // ARRAY Weihnachtsbaum 
    let weihnachtsbaum = ["Nordmanntanne", "Blaufichte", "Edeltanne", "Colorado-Tanne"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputWeihnachtsbaum = [];
    // ARRAY Halterung
    let halterung = ["Metall", "Messing"];
    // Leeres HTMLInputElement Array um Artikel abzuspeichern
    let inputHalterung = [];
    // ARRAY Dekoration 
    let dekoration = ["Plastikkugeln", "Glaskugeln", "Glocken", "Lametta", "Schneeflocken", "Christbaumspitze"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputDekoration = [];
    //Array Beleuchtung
    let beleuchtung = ["Lichterketten", "LED-Kugeln", "LED-Sterne"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputBeleuchtung = [];
    // ARRAY Lieferung
    let lieferung = ["Standard", "Express"];
    // Leeres HTMLInputElement Array um  Artikel abzuspeichern
    let inputLieferung = [];
    // Erstellte Variablen sollen HTML-Element sein
    let Baum;
    let Halterung;
    let Dekoration;
    let Beleuchtung;
    let Lieferung;
    let Warenkorb;
    let Warenkorbbutton;
    function init() {
        // Die erstellten Variablen werden der Id im HTML-Dokument zugewiesen
        Baum = document.getElementById("baum"); // Variable erh�lt zugriff auf ID im HTML
        Baum.addEventListener("change", changeOrder); //EventListener Change wird bei erfolgter �nderung ausgel�st
        //Wenn Wert ver�ndert wird, wird EventListener aktiviert
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
    function createBaum() {
        //erstellt pro Baum einen Input
        for (let i = 0; i < weihnachtsbaum.length; i++) {
            createInputBaum(weihnachtsbaum[i]);
        }
    }
    // Input und Label werden erzeugt 
    function createInputBaum(_baum) {
        let label = document.createElement("label"); //Create Label 
        let input = document.createElement("input"); // Create Input 
        label.innerText = _baum; //Artikel
        label.appendChild(input); //Append Input to Label
        input.type = "radio"; //Input vom Typ Radio
        input.name = "Radiogroup";
        input.value = "radioboxes";
        input.id = "radio";
        Baum.appendChild(label); //Append Label to Baum 
        inputWeihnachtsbaum.push(input); // input wird in das leere Array gepusht
    }
    //For-Schleife zur Erzeugnung Halterung
    function createHalterung() {
        //erstellt pro Halterung einen Input
        for (let i = 0; i < halterung.length; i++) {
            createInputHalterung(halterung[i]);
        }
    }
    function createInputHalterung(_halterung) {
        let label = document.createElement("label"); //label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _halterung; //Artikel
        label.appendChild(input); //Append Input to Label
        input.type = "radio"; //Input vom Typ Radio
        input.name = "NameHalterung";
        input.value = "radioboxes";
        Halterung.appendChild(label); //Append Label to Halterung
        inputHalterung.push(input); //Input wird ins leere Array gepusht
    }
    // For-Schleife zur Erzeugung Dekoration 
    function createDekoration() {
        //erstellt pro Dekoration einen Input
        for (let i = 0; i < dekoration.length; i++) {
            createInputDekoration(dekoration[i]);
        }
    }
    function createInputDekoration(_dekoration) {
        let label = document.createElement("label"); //label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _dekoration; //Artikel
        label.appendChild(input); //Append Input to Label 
        input.type = "number"; //Input vom Typ Number
        input.name = "NameDekoration";
        input.value = "0"; // Wert 0 
        input.min = "0"; //mindestwert
        input.max = "50"; //h�chstwert  
        Dekoration.appendChild(label); //Append label to Dekoration 
        inputDekoration.push(input); //Input wird ins leere Array gepusht
    }
    //For-Schleife zur Erzeugung Beleuchtung
    function createBeleuchtung() {
        //erstellt pro Beleuchtung einen Input 
        for (let i = 0; i < beleuchtung.length; i++) {
            createInputBeleuchtung(beleuchtung[i]);
        }
    }
    function createInputBeleuchtung(_beleuchtung) {
        let label = document.createElement("label"); //label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _beleuchtung; //Artikel
        label.appendChild(input); //Append Input to label
        input.type = "number"; //Input vom Typ number
        input.name = "NameDekoration";
        input.value = "0"; //Wert 0 
        input.min = "0"; //mindestwert
        input.max = "50"; //h�chstwert  
        Beleuchtung.appendChild(label); //Append label to Beleuchtung
        inputBeleuchtung.push(input); //Input wird ins leere Array gepusht
    }
    //For-Schleife zur Erzeugung Lieferung
    function createLieferung() {
        //erstellt pro Lieferung einen Input
        for (let i = 0; i < lieferung.length; i++) {
            createInputLieferung(lieferung[i]);
        }
    }
    function createInputLieferung(_lieferung) {
        let label = document.createElement("label"); //label wird erzeugt
        let input = document.createElement("input"); // input wird erzeugt
        label.innerText = _lieferung; //Artikel
        label.appendChild(input); //Append Input to Label
        input.type = "radio"; //Input vom Typ Radio
        input.name = "NameLieferung";
        input.value = "radioboxes";
        Lieferung.appendChild(label); //Append label to Lieferung
        inputLieferung.push(input); //Input wird ins leere Array gepusht
    }
    function changeOrder() {
        let summe = 0; //Warenkorb leer 
        for (let i = 0; i < inputWeihnachtsbaum.length; i++) {
            if (inputWeihnachtsbaum[i].checked) {
                summe += 40; //summe + 40
            }
        }
        for (let i = 0; i < inputHalterung.length; i++) {
            if (inputHalterung[i].checked) {
                summe += 10;
            }
        }
        for (let i = 0; i < inputLieferung.length; i++) {
            if (inputLieferung[i].checked) {
                summe += 5;
            }
        }
        for (let i = 0; i < inputDekoration.length; i++) {
            summe += (parseInt(inputDekoration[i].value) * 2); //liest string ein und wird in number umgewandelt
        } // value = string
        for (let i = 0; i < inputBeleuchtung.length; i++) {
            summe += (parseInt(inputBeleuchtung[i].value) * 4); //liest string ein und wird in number umgewandelt 
        } // value = string             
        handleChange(summe); //Funktion handleChange wird aufgerufen 
    }
    // Warenkorb 
    function handleChange(_summe) {
        //Greift auf Element Id im Html zu & f�gt einen Text ein 
        document.getElementById("warenBaum").innerText = " ";
        document.getElementById("warenHalterung").innerText = " ";
        document.getElementById("warenDekoration").innerText = " ";
        document.getElementById("warenBeleuchtung").innerText = " ";
        document.getElementById("warenLieferung").innerText = " ";
        for (let i = 0; i < inputWeihnachtsbaum.length; i++) {
            if (inputWeihnachtsbaum[i].checked) {
                document.getElementById("warenBaum").innerText += weihnachtsbaum[i] + "" + " 40 Euro" + "\n"; //Innertext = Artikel und Summe 
            }
        }
        for (let i = 0; i < inputHalterung.length; i++) {
            if (inputHalterung[i].checked) {
                document.getElementById("warenHalterung").innerText += halterung[i] + " " + " 10 Euro" + "\n"; //Innertext = Artikel und Summe
            }
        }
        for (let i = 0; i < inputLieferung.length; i++) {
            if (inputLieferung[i].checked) {
                document.getElementById("warenLieferung").innerText += lieferung[i] + " " + " 5 Euro" + "\n"; //Innertext = Artikel und Summe 
            }
        }
        for (let i = 0; i < inputDekoration.length; i++) {
            if (parseInt(inputDekoration[i].value) > 0) {
                document.getElementById("warenDekoration").innerText += dekoration[i] + " " + " " + (parseInt(inputDekoration[i].value) * 2) + " Euro" + "\n";
            }
        }
        for (let i = 0; i < inputBeleuchtung.length; i++) {
            if (parseInt(inputBeleuchtung[i].value) > 0) {
                document.getElementById("warenBeleuchtung").innerText += beleuchtung[i] + " " + " " + (parseInt(inputBeleuchtung[i].value) * 4) + " Euro" + "\n";
            }
        }
        document.getElementById("gesamtsumme").innerText = _summe.toString() + " Euro"; // wandelt Zahl in einen String 
    }
    // Bestellung wird gepr�ft 
    function checkOrder() {
        let nachname = document.getElementById("nachname");
        let vorname = document.getElementById("vorname");
        let email = document.getElementById("email");
        let strasse = document.getElementById("strasse");
        let postleitzahl = document.getElementById("postleitzahl");
        let ort = document.getElementById("ort");
        // �berpr�ft ob etwas eingegeben wurde
        // checkValidity = boolean 
        if (nachname.checkValidity() == false || vorname.checkValidity() == false || email.checkValidity() == false || strasse.checkValidity() == false || postleitzahl.checkValidity() == false || ort.checkValidity() == false) {
            //Wenn Fehlerhaft 
            alert("Bitte alle Felder in der Liefer-Adresse ausfuellen");
        }
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
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=aufgabe_10.js.map