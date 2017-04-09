/*
Aufgabe: Aufgabe 3b
Name: Bersu Inanir
Matrikel: 254872
Datum: 8. April 2017
    
Dieser "Code" wurde in Zusammenarbeit mit Lisa Würstle erstellt. 


*/



window.onload = function (): void {
    
    let kartenStapel: string[] = ["Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As",
                        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As",
                        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As",
                        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As"];
    let k = kartenStapel.length;
    
    let ablage: string[] = [];         
    
    let hand: string[] = [];
    let h = hand.length;
    
    
    document.getElementById("Kartenstapel").textContent = "Kartenstapel" + " " + k;
    document.getElementById("Ablage").textContent = "Ablagestapel";
    
    
    document.getElementById("Kartenstapel").addEventListener("click", function() {
    if ( k > 0 && h < 5 ) {
        let i : number = Math.floor((Math.random() * k) + 0); } } 
   
    ;)}