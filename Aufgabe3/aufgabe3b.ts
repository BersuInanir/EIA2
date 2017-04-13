/*
Aufgabe: Aufgabe 3b
Name: Bersu Inanir
Matrikel: 254872
Datum: 8. April 2017
    
Dieser "Code" wurde in Zusammenarbeit mit Lisa Würstle erstellt. 


*/



namespace Nr3b {

    let kartenStapel: string[] = ["Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As"];


    let ablage: string[] = [];

    let hand: string[] = [];

    window.onload = function(): void {
        createFeld();

    };

    function createFeld(): void {
        let div: HTMLDivElement;
        for (let i: number = 0; i < 7; i++) {
            div = <HTMLDivElement>document.createElement("div");
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

function ziehen (): void {
    if (hand.length < 5 ) {
        let n: number = Math.round(Math.random() * (kartenStapel.length - 1));
        hand.push(kartenStapel.splice(n, 1)[0]);
        }
    update();
    
}
    
    function ablegen(event: MouseEvent): void {
        let div: HTMLDivElement = <HTMLDivElement>event.target;
        let card: string = div.textContent;
        let index: number = hand.indexOf(card);
        ablage.push(hand.splice(index, 1)[0]);
        
        update();
        
        
        }
    function update(): void {
        let hands: NodeListOf<Element> = document.getElementsByClassName("hand");
        for (let i: number = 0; i < hands.length; i++) {
            hands[i].textContent = hand[i];
            }
        
        let ablagestapel: HTMLDivElement = <HTMLDivElement>document.getElementById("ablage");
        ablagestapel.textContent = ablage[ablage.length - 1]; 
        }


};