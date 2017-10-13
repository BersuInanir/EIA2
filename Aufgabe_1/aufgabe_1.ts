namespace L1_Canvas {
    
 window.addEventListener("load", init);
    
   
        function init(_event: Event): void {
        console.log("Hallo");
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
            
        let crc2: CanvasRenderingContext2D; 
        console.log(crc2);

}

}