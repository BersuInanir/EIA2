document.addEventListener('DOMContentLoaded', function () {
    var name = prompt("Wie hei�t du denn? :)");
    var begrussung = "Herzlich Willkommen ";
    document.body.innerHTML = begrussung + name;
});
