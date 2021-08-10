let boton = document.getElementById("login");
let btnSalir = document.getElementById("btnSalir");
let enlaces = document.getElementById("mostrar");
let contador = 0;

boton.addEventListener("click",function(){
        mostrar.className = ('mostrar dos');
})

btnSalir.addEventListener("click",function(){
    mostrar.classList.remove('dos');
    mostrar.className = ('mostrar uno');
})