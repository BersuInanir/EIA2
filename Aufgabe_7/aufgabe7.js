var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben"); //Promt erscheint zur Abfrage
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 male oder 1 female) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    // saveData = neues Objekt vom Typ StudentData f�llen und in students ablegen
    function saveData(_input) {
        let datenArray = _input.split(", "); // split-methode teilt einen String in ein Array & wird durch Kommas (" , ") getrennt
        let studentData = {
            //Daten werden im Array Students abgelegt
            matrikelnummer: parseInt(datenArray[0]),
            name: datenArray[1],
            vorname: datenArray[2],
            alter: parseInt(datenArray[3]),
            geschlecht: parseInt(datenArray[4]) == 1,
            kommentar: datenArray[5]
        };
        students.push(studentData); // in students werden alle angelegten Daten von studentData gepusht
        let sex = studentData.geschlecht ? "female" : "male"; // ? Kurzform if-else wird sp�ter in queryData gepr�ft 
        // geschlecht = boolescher Ausdruck
        if (Number.isNaN(studentData.matrikelnummer)) {
            // false or true ?
            return "Ihre Matrikelnummer darf nur aus Zahlen bestehen"; // wenn Eingabe keine Zahl war
        }
        //Ausgabe f�r gespeicherte Daten
        return "Ihre Eingabe wurde gespeichert:" + "\n" + "\n MATRIKELNUMMER: " + studentData.matrikelnummer + "\n NAME: " + studentData.name + "\n VORNAME: " + studentData.vorname + "\n ALTER: " + studentData.alter + "\n GESCHLECHT: " + sex + "\n KOMMENTAR: " + studentData.kommentar;
    } //Eingegebenen Werte werden aufgelistet
    //liefert gefundenen Datensatz als string zur�ck
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (_matrikel == students[i].matrikelnummer) {
                let sex = students[i].geschlecht ? "female" : "male"; // pr�ft ob 1 female oder 0 male eingegeben wurde 
                //Ausgabe f�r einen Treffer
                return "Ihre Matrikelnummer ergab folgenden Treffer:" + "\n" + "\n MATRIKELNUMMER: " + students[i].matrikelnummer + "\n NAME: " + students[i].name + "\n VORNAME: " + students[i].vorname + "\n ALTER: " + students[i].alter + "\n GESCHLECHT: " + sex + "\n KOMMENTAR: " + students[i].kommentar;
            }
        }
        //Ausgabe wenn kein Treffer mit der eingegebenen Matrikelnummer gefunden wurde
        return "Es wurden keine Daten gefunden, bitte checken Sie ihre Angaben!";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe7.js.map