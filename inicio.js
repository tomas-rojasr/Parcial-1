function botonCambiarContenido() {
    let nuevoContenido = "¡Estamos ansiosos por recibirte en nuestra tienda! En cada visita, encontrarás una experiencia única llena de pasión por el deporte y la moda. Descubre nuestra amplia selección de polos deportivos que te permitirán lucir el orgullo de tu equipo favorito en cada ocasión. Ven y únete a nuestra comunidad de aficionados, donde la emoción del deporte se combina con la moda en cada prenda. ¡Te esperamos con los brazos abiertos para que descubras la colección de polos deportivos que tenemos para ti!";
    document.getElementById("texto1").textContent = nuevoContenido;
}

function botonCambiarColor() {
    let body = document.body;
    let texto = document.getElementById('texto1');

    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        texto.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        texto.style.color = 'black';
    }
}