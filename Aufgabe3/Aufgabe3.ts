/*
Aufgabe: Aufgabe 3a
Name: Bersu Inanir
Matrikel: 254872
Datum: 8. April 2017
    
Dieser "Code" wurde in Zusammenarbeit mit Lisa Würstle erstellt. 


*/


namespace 3a_Schachbrett {
    let sum: num = 0;
    let div: HTMLDivElement;


    window.onload = function(): void {

        let rice: number = 1;
        let line: number = 0;
        let i: number = 0;

        for (let i: number = 0; i < 64; i++) {
            let element: HTMLElement = document.createElement("div");

            if (i < 8) {
                element.addEventListener("click", selectDiv);
            }


            if (((i + line) % 2) == 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
            if (((i + 1) % 8) == 0) {
                line++;
            }

            element.innerText = " " + rice;
            rice *= 2;
            document.body.appendChild(element);
        }

        div = document.createElement("div");
        div.id = "move";
        document.addEventListener("mousemove", updateRice);
        document.body.appendChild(div);

    };

    function selectDiv(event: MouseEvent): void {
        let clickeDiv: HTMLDivElement = <HTMLDivElement>event.target;
        if (clickeDiv.classList.toggle("selected")) {
            sum += parseInt(clickedDiv.textContent);
        }
        else {
            sum -= parseInt(clickedDiv.textContent);
        }
    }
    
    function updateRice(event: MouseEvent): void {
        div.style.top = event.clientY + 10 + "px";
        div.style.left = event.clientX + 10 + "px";
        div.textContent = "Summe zur Basis 10 = " + sum + "Summe zur Basis 16 = " + sum.toString(16);
    }
};


