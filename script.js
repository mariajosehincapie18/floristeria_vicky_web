const formulario = document.getElementById("formulario-contacto");
const mensajeExitoso = document.getElementById("mensaje-exitoso");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    mensajeExitoso.textContent =  "🌷 ¡Gracias por contactar a Floristería Vicky! Te responderemos pronto.";

    formulario.reset();
});

const botonwhatsapp = document.getElementById("boton-whatsapp");
botonwhatsapp.addEventListener("click",function(event){
    event.preventDefault();
    const numero= "573148308537";
    const mensaje = "Hola, Floristería Vicky. Estoy interesado/a en uno de sus arreglos florales.";
    const url  = `https://wa.me/${3148302537}?text=${encodeURIComponent(mensaje)}`; 
     window.open(url, "_blank");
});