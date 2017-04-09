window.onload = function () {
    var kartenStapel = ["Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As"];
    var ablage = [];
    var hand = [];
    var k = kartenStapel.length;
    document.getElementById("Kartenstapel").textContent = "Kartenstapel" + " " + k;
    document.getElementById("Ablage").textContent = "Ablagestapel";
    ;
};
//# sourceMappingURL=aufgabe3b.js.map