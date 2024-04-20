const boton = document.getElementById("noSe");
const boton2 = document.getElementById("si");


boton2.addEventListener('click', function() {
    Swal.fire("Agarrate, que voy enserio por ti ❤️‍🔥❤️‍🔥❤️‍🔥");
});

boton = addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    boton.style.setProperty('top', randomY+'%');
    boton.style.setProperty('left', randomX+'%');
    boton.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})