document.addEventListener("DOMContentLoaded", function() {
    const salir = document.getElementById('salir');
    const carrito = document.getElementById('carrito');


    if (localStorage.getItem('email') == null) {
        if (salir) {
            salir.style.display = "none";
        }
        if (carrito) {
            carrito.style.display = "none";
        }
        if (login) {
            login.style.display = "block";
            login.addEventListener('click', function() {
                window.location.href = './../../index.html';
            });
        }
    } else {
        if (salir) {
            salir.addEventListener('click', function() {
                alert('Haz cerrado sesión correctamente!');
                window.location.href = './../../home.html';
                localStorage.removeItem('email');
            });
        }
        if (login) {
            login.style.display = "none";
        }
    }
    if (document.getElementById('productosid') == null) {
        if (carrito) {
            carrito.addEventListener('click', function() {
                window.location.href = './../../componentes/productos/carrito.html';
            });
            }
        } else {
            if (carrito) {
                carrito.addEventListener('click', function() {
                    window.location.href = './carrito.html';
                });
            }
    }
});
