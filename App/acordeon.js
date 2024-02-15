
// Obtenemos todos los elementos de acordeón
var accordions = document.querySelectorAll('.accordion-item');

// Iteramos sobre cada elemento de acordeón
accordions.forEach(function (accordion) {
    // Añadimos un evento de clic a cada botón del acordeón
    accordion.querySelector('.accordion-header button').addEventListener('click', function () {
        // Cerramos todos los acordeones excepto el actual
        accordions.forEach(function (otherAccordion) {
            if (otherAccordion !== accordion) {
                otherAccordion.querySelector('.accordion-collapse').classList.remove('show');
            }
        });
    });
});
