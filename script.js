// MENÚ DE CELULAR

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
});


// CERRAR MENÚ AL TOCAR UN ENLACE

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });
});


// FORMULARIO

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const maquinaria = document.getElementById("maquinaria").value;
    const mensaje = document.getElementById("mensaje").value;

    if (
        nombre === "" ||
        telefono === "" ||
        maquinaria === "" ||
        mensaje === ""
    ) {
        alert("Por favor completá todos los campos.");
        return;
    }

    const numeroWhatsApp = "3544434930"

    const texto =
        "Hola, soy " + nombre + ".\n\n" +
        "Teléfono: " + telefono + "\n\n" +
        "Maquinaria: " + maquinaria + "\n\n" +
        "Problema:\n" + mensaje;

    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(texto);

    window.open(url, "_blank");

    form.reset();
});