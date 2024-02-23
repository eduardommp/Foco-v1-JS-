window.addEventListener('load', function () {
    // Llamada a la función foco()
    // Observe como puede estar la declaración abajo de la llamada.
    foco();
});

function foco() {
    // Le agrega una clase al body
    document.querySelector('body').classList.add('oscuridad');

    // Agregamos una función en el evento click
    const img = document.getElementById('foco');
    img.addEventListener('click', () => {
        // Busca si la cadena 'apagado' esta en el attributo src
        if (img.src.indexOf("apagado") > 0) {
            // Cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        } else {
            // Cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }
    });
}
