/*Aufgabe: Nr. 6b
Name: Bersu Inanir
Datum: 07.05.2017
In Zusammenarbeit mit Lisa Würstle */
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für M und 1 für W) und Kommentar");
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
    function saveData(_input) {
        var datenArray = _input.split(",");
        var s = {
            matrikelnummer: parseInt(datenArray[0]),
            name: datenArray[1],
            vorname: datenArray[2],
            alter: parseInt(datenArray[3]),
            geschlecht: parseInt(datenArray[4]) == 1,
            kommentar: datenArray[5]
        };
        students.push(s);
        var geschlecht;
        if (parseInt(datenArray[4]) == 1) {
            // 1 = weiblich
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "männlich";
        }
        return "Ihre Eingabe wurde gespeichert:" + "\n" + "\n MATRIKELNUMMER: " + s.matrikelnummer + "\n NAME: " + s.name + "\n VORNAME: " + s.vorname + "\n ALTER: " + s.alter + "\n GESCHLECHT: " + geschlecht + "\n KOMMENTAR: " + s.kommentar;
    }
    function queryData(_matrikel) {
        var i = 0;
        for (i = 0; i < students.length; i++) {
            if (_matrikel == students[i].matrikelnummer) {
                var geschlecht = students[i].geschlecht ? "female" : "male";
                //Ausgabe wenn es einen Treffer erzielt
                return "Ihre Suche in StudiVZ ergab folgenden Treffer:" + "\n" + "\n MATRIKELNUMMER: " + students[i].matrikelnummer + "\n NAME: " + students[i].name + "\n VORNAME: " + students[i].vorname + "\n ALTER: " + students[i].alter + "\n GESCHLECHT: " + geschlecht + "\n KOMMENTAR: " + students[i].kommentar;
            }
        }
        //Ausgabe wenn es keinen Treffer erzielt
        return "Matrikelnummer ist nicht vorhanden. Überprüfen Sie bitte Ihre Angaben!";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe6b.js.map