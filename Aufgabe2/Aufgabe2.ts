
window.onload = function (): void {
    let table: HTMLTableElement = document.createElement("table");
    let row: HTMLTableRowElement = document.createElement("tr");
    let column: HTMLTableCellElement = document.createElement ("td");
    
    table.appendChild(row);
    row.appendChild(column);
    
    document.body.appendChild(table);
    };
    
    

function placeDivs() : void {
   
for (let i = 0; i < 64; i++) { 
       let element: HTMLElement = document.createElement("div");
    
    
       if (i % 2 == 0 ) {
           element.className = "board white";
          
          } else {
           element.className = "board black";
           }
    
    document.body.appendChild(element);
    }
    
    
};