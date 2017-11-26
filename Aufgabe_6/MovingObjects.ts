namespace L6_Canvas {

    export class MovingObjects  {

        x: number;
        y: number;
        color: string;


        constructor() {
        this.setRandomStyle();
            }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        move(): void {
            
            }
        
        draw(): void {
            
            }
        
        setRandomStyle(): void {
            
            }
        }
    }