/*
Aufgabe: Aufgabe 3a
Name: Bersu Inanir
Matrikel: 254872
Datum: 8. April 2017
    
Dieser "Code" wurde in Zusammenarbeit mit Lisa Würstle erstellt. 


*/





window.onload = function (): void {
 
    let rice: number = 1 ; 
    let line: number = 0 ; 
    let i: number = 0; 
   
    for (let i: number = 0; i < 64; i++) {
        let element: HTMLElement = document.createElement("div");

        if (((i + line) % 2) == 0) {
            element.className = "board white";
            }
        else {
            element.className = "board black";
            }
        if (((i + 1) % 8) == 0) {
            line++; }
        
        element.innerText = " " + rice;
        rice *= 2;
        document.body.appendChild(element);
        }
    };
        

