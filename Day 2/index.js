// Counter functionality

let count = 0; 
document.getElementById("increase").onclick = function() {
    count++;
    document.getElementById("countLabel").textContent = count;
}
document.getElementById("decrease").onclick = function() {
    count--;
    document.getElementById("countLabel").textContent = count;
}
document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("countLabel").textContent = count;
}