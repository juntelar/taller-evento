function cartel(){
    alert("HOLA!");
}

const div= document.getElementById("miDiv")
div.addEventListener("click",function(event){
alert("hola soy el div!");
event.stopPropagation();
})    