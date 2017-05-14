var L7_ObjektorienteProgrammierung;
(function (L7_ObjektorienteProgrammierung) {
    var Biene = (function () {
        function Biene(_x, _y, _color, _size) {
            this.x = _x;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 7 + 5;
        }
        Biene.prototype.update = function () {
            this.move();
            this.drawBiene();
        };
        Biene.prototype.drawBiene = function () {
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.lineWidth = 2;
            L7_ObjektorienteProgrammierung.crc2.fillStyle = this.color;
            L7_ObjektorienteProgrammierung.crc2.strokeStyle = "black";
            L7_ObjektorienteProgrammierung.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.arc(this.x - 10, this.y, this.size, 0, 2 * Math.PI);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.fillStyle = "white";
            L7_ObjektorienteProgrammierung.crc2.strokeStyle = "black";
            L7_ObjektorienteProgrammierung.crc2.arc(this.x + 3, this.y - 14, this.size, 0, 2);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
        };
        Biene.prototype.move = function () {
            this.x += Math.random() * 4 - 2.1;
            this.y += Math.random() * 7 - 3.5;
            if (this.x < 0) {
                this.x = L7_ObjektorienteProgrammierung.crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = L7_ObjektorienteProgrammierung.crc2.canvas.height;
            }
            if (this.y >= L7_ObjektorienteProgrammierung.crc2.canvas.height) {
                this.y = 0;
            }
        };
        return Biene;
    }());
    L7_ObjektorienteProgrammierung.Biene = Biene;
})(L7_ObjektorienteProgrammierung || (L7_ObjektorienteProgrammierung = {}));
//# sourceMappingURL=bee.js.map