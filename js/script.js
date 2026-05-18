// EQUIPO: Aquí pueden añadir validaciones más complejas si el profesor lo pide.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del formulario de contacto
    const form = document.getElementById('contactForm');

    if(form) {
        form.addEventListener('submit', function(event) {

            event.preventDefault();

            const nombre = document.getElementById('nombre').value;

            alert(`¡Gracias ${nombre}! Tu consulta ha sido registrada. Un asesor te contactará pronto.`);

            form.reset();
        });
    }

    // 2. Scroll suave para los enlaces del menú
    const links = document.querySelectorAll('.navbar nav a');

    links.forEach(link => {

        link.addEventListener('click', function(e) {

            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            const targetSection = document.getElementById(targetId);

            if(targetSection) {

                window.scrollTo({

                    top: targetSection.offsetTop - 60,

                    behavior: 'smooth'
                });
            }
        });
    });


    // ==========================
    // SELECT DINÁMICO DE MODELOS
    // ==========================

    const categoria = document.getElementById("categoria");

    const modelo = document.getElementById("modelo");

    const modelos = {

        Camiones: [
            "F1300L Chasis",
            "Titan V8",
            "Urban X",
            "Cargo Max"
        ],

        Volquetes: [
            "Volquete Pro",
            "Heavy Dump",
            "Miner X"
        ],

        Buses: [
            "KingBus 300",
            "InterCity Max",
            "Urban Bus"
        ],

        Minibuses: [
            "MiniVan Plus",
            "Travel Mini",
            "Tourist Van"
        ]
    };

    categoria.addEventListener("change", () => {

        modelo.innerHTML = "";

        const seleccion = categoria.value;

        modelos[seleccion].forEach(item => {

            const option = document.createElement("option");

            option.value = item;

            option.textContent = item;

            modelo.appendChild(option);

        });

    });

});