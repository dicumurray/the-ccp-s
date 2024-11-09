document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('logoText');
    const textContent = text.textContent;
    text.innerHTML = ''; // Limpiar el contenido original del texto

    // Crear un efecto de onda en cada letra
    textContent.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1}s`; // Animación secuencial
        text.appendChild(span);
    });
});
