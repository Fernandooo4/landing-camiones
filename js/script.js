// EQUIPO: Aquí pueden añadir validaciones más complejas si el profesor lo pide.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del formulario de contacto
    const form = document.getElementById('contactForm');

    if(form) {
        form.addEventListener('submit', function(event) {
            // Evita que la página se recargue al enviar el formulario
            event.preventDefault();

            // Capturar el valor del nombre para personalizar la alerta
            const nombre = document.getElementById('nombre').value;

            alert(`¡Gracias ${nombre}! Tu consulta ha sido registrada. Un asesor te contactará pronto.`);

            // Limpiar los campos del formulario después de enviar
            form.reset();
        });
    }

    // 2. Scroll suave para los enlaces del menú (Smooth Scrolling)
    const links = document.querySelectorAll('.navbar nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if(targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Restamos 60px para que el menú fijo no tape el título
                    behavior: 'smooth'
                });
            }
        });
    });

});