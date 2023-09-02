function cartel(){
    alert("HOLA!");
}


const boton = document.getElementById("miBoton");
const div = document.getElementById("miDiv");

boton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    cartel(); 
});

div.addEventListener("click", function(event) {
    alert("Hola soy el div!");
});