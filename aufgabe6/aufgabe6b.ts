/*Aufgabe: Nr. 6b
Name: Bersu Inanir
Datum: 07.05.2017
In Zusammenarbeit mit Lisa Würstle */


namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen

        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für M und 1 für W) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let datenArray: string[] = _input.split(",");
        let s: StudentData = {                          //Array erstellen
            matrikelnummer: parseInt(datenArray[0]),
            name: datenArray[1],
            vorname: datenArray[2],
            alter: parseInt(datenArray[3]),
            geschlecht: parseInt(datenArray[4]) == 1,
            kommentar: datenArray[5]

        };
        students.push(s);

        let geschlecht: string;
        if (parseInt(datenArray[4]) == 1) {   // DatenArray[4] = 4. Schublade
                                               // 1 = weiblich
            geschlecht = "weiblich";
        }
        else {                      // 0 = männlich 
            geschlecht = "männlich";
        }

        return "Ihre Eingabe wurde gespeichert:" + "\n" + "\n MATRIKELNUMMER: " + s.matrikelnummer + "\n NAME: " + s.name + "\n VORNAME: " + s.vorname + "\n ALTER: " + s.alter + "\n GESCHLECHT: " + geschlecht + "\n KOMMENTAR: " + s.kommentar;
    }

    function queryData(_matrikel: number): string {
        let i: number = 0;
        for (i = 0; i < students.length; i++) { //durchsuchen der gespeicherten Daten
            if (_matrikel == students[i].matrikelnummer) {
                let geschlecht: string = students[i].geschlecht ? "female" : "male";
                //Ausgabe wenn es einen Treffer erzielt
                return "Ihre Suche in StudiVZ ergab folgenden Treffer:" + "\n" + "\n MATRIKELNUMMER: " + students[i].matrikelnummer + "\n NAME: " + students[i].name + "\n VORNAME: " + students[i].vorname + "\n ALTER: " + students[i].alter + "\n GESCHLECHT: " + geschlecht + "\n KOMMENTAR: " + students[i].kommentar;
            }
        }
        //Ausgabe wenn es keinen Treffer erzielt
        return "Matrikelnummer ist nicht vorhanden. Überprüfen Sie bitte Ihre Angaben!";
    }
}