var L7_ObjektorienteProgrammierung;
(function (L7_ObjektorienteProgrammierung) {
    var Floret = (function () {
        function Floret(_x, _y) {
            this.florets = [];
            this.x = _x;
            this.y = _y;
        }
        Floret.prototype.zufallPosition = function () {
            for (var i = 0; i < 5; i++) {
                var minWidth = 30;
                var minHeight = 200;
                var maxWidth = 350;
                var maxHeight = 300;
                var n = Math.floor((Math.random() * 2) + 0);
                this.x = Math.floor(Math.random() * (maxWidth - minWidth + 0) + minWidth);
                this.y = Math.floor(Math.random() * (maxHeight - minHeight + 0) + minHeight);
                this.drawBlume();
            }
            this.florets.push(new Floret(this.x, this.y));
        };
        Floret.prototype.drawBlume = function () {
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.fillStyle = "#19760c";
            L7_ObjektorienteProgrammierung.crc2.fillRect(this.x + 5, this.y + 15, 3, 25);
            L7_ObjektorienteProgrammierung.crc2.arc(this.x + 4, this.y + 20, 12, 0, 1.5);
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.fillStyle = "#5e4781";
            L7_ObjektorienteProgrammierung.crc2.strokeStyle = "white";
            L7_ObjektorienteProgrammierung.crc2.lineWidth = 1;
            L7_ObjektorienteProgrammierung.crc2.arc(this.x - 3, this.y + 0, 9, 0, 2 * Math.PI);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.arc(this.x + 8, this.y - 12, 9, 0, 2 * Math.PI);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.arc(this.x + 19, this.y - 1, 9, 0, 2 * Math.PI);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.arc(this.y + 8, this.y + 15, 9, 0, 2 * Math.PI);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
            L7_ObjektorienteProgrammierung.crc2.beginPath();
            L7_ObjektorienteProgrammierung.crc2.fillStyle = "#f5ee5c";
            L7_ObjektorienteProgrammierung.crc2.arc(this.x + 8, this.y + 0, 6, 0, 2 * Math.PI);
            L7_ObjektorienteProgrammierung.crc2.closePath();
            L7_ObjektorienteProgrammierung.crc2.fill();
            L7_ObjektorienteProgrammierung.crc2.stroke();
        };
        return Floret;
    }());
    L7_ObjektorienteProgrammierung.Floret = Floret;
})(L7_ObjektorienteProgrammierung || (L7_ObjektorienteProgrammierung = {}));
//# sourceMappingURL=flower.js.map