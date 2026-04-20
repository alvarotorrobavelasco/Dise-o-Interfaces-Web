// ==================== 1. ACTIVAR TOOLTIPS DE BOOTSTRAP ====================
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ==================== 2. MODAL DINÁMICO (cambia texto según destino) ====================
var modalInfo = document.getElementById('modalInfo');
if (modalInfo) {
    modalInfo.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget; // Botón que abrió el modal
        var destino = button.getAttribute('data-bs-info');
        var modalBody = modalInfo.querySelector('.modal-body');
        if (destino === 'suiza') {
            modalBody.innerHTML = 'Suiza: mejor época junio-septiembre. Imprescindible el Jungfraujoch y los paseos en tren.';
        } else if (destino === 'japon') {
            modalBody.innerHTML = 'Japón: primavera para los cerezos en flor, otoño para colores cálidos. Visita Kioto y sus templos.';
        } else {
            modalBody.innerHTML = 'Destino tropical: temporada seca de noviembre a abril. Disfruta de las islas Phi Phi.';
        }
    });
}

// ==================== 3. CANVAS ANIMADO (barra que crece y decrece) ====================
var canvas = document.getElementById('canvasViajes');
if (canvas) {
    var ctx = canvas.getContext('2d');
    var ancho = 50; // Ancho inicial de la barra
    var creciendo = true;
    function dibujarCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Dibujar barra principal
        ctx.fillStyle = '#0d6efd';
        ctx.fillRect(50, 30, ancho, 40);
        // Texto
        ctx.fillStyle = '#212529';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('Países visitados: ' + Math.floor(ancho/2), 50, 20);
        // Lógica de animación
        if (creciendo) {
            ancho += 1;
            if (ancho >= 150) creciendo = false;
        } else {
            ancho -= 1;
            if (ancho <= 30) creciendo = true;
        }
        requestAnimationFrame(dibujarCanvas);
    }
    dibujarCanvas();
}

// ==================== 4. VALIDACIÓN DE FORMULARIO (BOOTSTRAP) ====================
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                alert('¡Gracias! Recibirás tu guía de viaje en tu correo electrónico.');
                event.preventDefault(); // Evita el envío real (simulación)
            }
            form.classList.add('was-validated');
        }, false);
    });
})();