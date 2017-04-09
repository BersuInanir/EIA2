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
   
    
    
    
    /// Aufgabe 3a //////////
   let divs: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    for (let i: number = 0; i < 9; i++) {
        divs[i].addEventListener("click", handleEvent);
        console.log(Math.pow(2, i).toString(16));
    }


    let selected: any;
    function handleEvent(event: MouseEvent): void {
        selected = <HTMLDivElement>event.target;
        selected.classList.toggle("selected");
        if (selected.length < 1) {
            document.getElementById("field").style.display = "none";
            }
        else {
            document.getElementById("field").style.display = "inline";
            }
        console.log(selected.textContent);
    }

    function moveDiv(event: MouseEvent): void {
        let style: CSSStyleDeclaration = selected.style;
        style.position = "absolute";
        style.left = event.clientX.toString() + "px";
        style.top = event.clientY.toString() + "px";
    }
    };
};