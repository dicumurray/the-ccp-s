document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('logoText');
    const textContent = text.textContent;
    text.innerHTML = ''; // Limpiar el contenido del texto original

    // Crear un efecto de onda en cada letra
    textContent.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;

        // Si el carácter es un espacio, manejarlo adecuadamente
        if (char === ' ') {
            span.style.width = '10px'; // Ajustar el ancho del espacio según sea necesario
        }

        span.style.display = 'inline-block';
        span.style.animation = `wave 2s ease-in-out infinite`;
        span.style.animationDelay = `${index * 0.1}s`;
        text.appendChild(span);
    });
});
