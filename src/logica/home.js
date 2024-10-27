const carrito = document.getElementById('carrito');

if (carrito) {
    carrito.addEventListener('click', function() {
        window.location.href = './componentes/productos/carrito.html';
    });
}

if (localStorage.getItem('email') == null) {
    if (salir) {
        salir.style.display = "none";
        if (carrito) {
            carrito.style.display = "none";
        }
        if (login) {
            login.style.display = "block";
            login.addEventListener('click', function() {
                window.location.href = './index.html';
            });
        }
    }
} else {
    salir.style.display = "block";
    salir.addEventListener('click', function() {
        alert('Haz cerrado sesión correctamente!');
        window.location.reload();
        localStorage.removeItem('email');
    });
    if (login) {
        login.style.display = "none";
    }
}