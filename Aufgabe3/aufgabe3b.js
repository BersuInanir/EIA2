/*
Aufgabe: Aufgabe 3b
Name: Bersu Inanir
Matrikel: 254872
Datum: 8. April 2017
    
Dieser "Code" wurde in Zusammenarbeit mit Lisa Würstle erstellt.


*/
var Nr3b;
(function (Nr3b) {
    var kartenStapel = ["Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As"];
    var ablage = [];
    var hand = [];
    window.onload = function () {
        createFeld();
    };
    function createFeld() {
        var div;
        for (var i = 0; i < 7; i++) {
            div = document.createElement("div");
            switch (i) {
                case 0:
                    div.id = "stapel";
                    div.textContent = "Stapel";
                    div.addEventListener("click", ziehen);
                    break;
                case 6:
                    div.id = "ablage";
                    break;
                default:
                    div.className = "hand";
                    div.addEventListener("click", ablegen);
            }
            document.body.appendChild(div);
        }
    }
    function ziehen() {
        if (hand.length < 5) {
            var n = Math.round(Math.random() * (kartenStapel.length - 1));
            hand.push(kartenStapel.splice(n, 1)[0]);
        }
        update();
    }
    function ablegen(event) {
        var div = event.target;
        var card = div.textContent;
        var index = hand.indexOf(card);
        ablage.push(hand.splice(index, 1)[0]);
        update();
    }
    function update() {
        var hands = document.getElementsByClassName("hand");
        for (var i = 0; i < hands.length; i++) {
            hands[i].textContent = hand[i];
        }
        var ablagestapel = document.getElementById("ablage");
        ablagestapel.textContent = ablage[ablage.length - 1];
    }
})(Nr3b || (Nr3b = {}));
;
//# sourceMappingURL=aufgabe3b.js.map