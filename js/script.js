/*console.log("Hola mundo desde el archivo");

//DOM
let link = document.querySelectorAll("a");

//Foreach
link.forEach(function(link){
    console.log(link);
})
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
})
//Recorrer
let link = document.querySelectorAll(".close");

link.forEach(function(link){
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        return false;
        
    });
});*/

//Cambiar animacion
let link = document.querySelectorAll(".close");
link.forEach(function (link) {
    link.addEventListener("click", function (ev) {
        ev.preventDefault();

        //Obtenemos
        let content = document.querySelector('-content');

        //Quitar la animacion
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");


        //Animar
        content.classList.remove("animate__fadeOutUp");
        content.classList.remove("animate__animated");

        //Agregarmos un time
        setTimeout(function () {
            location.href = "/";
        }, 600);

        return false;
    });
});
//Iconos
