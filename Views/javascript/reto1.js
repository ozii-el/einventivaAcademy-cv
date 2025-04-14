function resaltarPalabrasLargas(idParrafo) {
    const parrafo = document.getElementById(idParrafo);
    if (!parrafo) return;

    const palabras = parrafo.textContent.split(/\s+/);

    const nuevoHTML = palabras.map(palabra => {
        let limpia = palabra.replace(/[.,;!?]+$/, '');
        if (limpia.length > 8) {
            return `<span style="background-color: yellow;">${palabra}</span>`;
        } else {
            return palabra;
        }
    }).join(' ');

    parrafo.innerHTML = nuevoHTML;
}

// Función para agregar enlace sobre el párrafo
function agregarEnlaceSobreParrafo(idParrafo, url, texto) {
    const parrafo = document.getElementById(idParrafo);
    if (!parrafo) return;

    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.textContent = texto;
    enlace.target = '_blank'; // abre en otra pestaña
    enlace.style.display = 'block';
    enlace.style.marginBottom = '8px';

    parrafo.parentNode.insertBefore(enlace, parrafo);
}

function separarParrafoEnLineas(idParrafo) {
    const parrafo = document.getElementById(idParrafo);
    if (!parrafo) return;

    const texto = parrafo.textContent;
    const oraciones = texto.split('.').filter(o => o.trim().length > 0); // Eliminar vacíos

    const nuevoHTML = oraciones.map(oracion => {
        return `${oracion.trim()}.<br>`;
    }).join('');

    parrafo.innerHTML = nuevoHTML;
}

// Función para contar palabras
function contarPalabras(idParrafo, idContador) {
    const parrafo = document.getElementById(idParrafo);
    const contador = document.getElementById(idContador);
    if (!parrafo || !contador) return;

    const texto = parrafo.textContent.trim();
    const palabras = texto.split(/\s+/); // dividir por espacios
    const total = palabras.filter(p => p.length > 0).length;

    contador.textContent = `Total de palabras: ${total}`;
}

function reemplazarSignosPorEmojis(idParrafo) {
    const parrafo = document.getElementById(idParrafo);
    if (!parrafo) return;

    let texto = parrafo.innerHTML;
    texto = texto.replace(/\?/g, '🤔');
    texto = texto.replace(/\!/g, '😲');

    parrafo.innerHTML = texto;
}


// Ejecución en orden
document.addEventListener("DOMContentLoaded", function() {
    resaltarPalabrasLargas('miParrafo');
    agregarEnlaceSobreParrafo('miParrafo', 'https://ozii-el.github.io/einventivaAcademy-cv/Views/', 'Visitar sitio:');
    separarParrafoEnLineas('miParrafo');
    contarPalabras('miParrafo', 'contadorPalabras');
    reemplazarSignosPorEmojis('miParrafo');
});