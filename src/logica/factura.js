const invoice = document.getElementById("invoice");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const email = JSON.parse(localStorage.getItem("email")) || [];
const total = JSON.parse(localStorage.getItem("total")) || [];

if (total != null && carrito != null && email != null) {
    invoice.innerHTML = `

    <div style="position: relative; margin-left: 20px;">
        <br>
        <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Número de Factura:</strong> ${Math.floor(Math.random() * 100000)}</p>
        <br>
        <h4>Detalles del Cliente:</h4>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <br>
        <h4>Detalles de la Compra:</h4>
        <p><strong>Total de Productos:</strong> ${carrito.length}</p>
        <br>
        <h4>Resumen de Compra:</h4>
        <h4>Total a Pagar: $${total}</h4>
        <br>
        <p>Gracias por su compra!<br>Pronto recibirá su factura en su correo electrónico.</p>
    </div>

`;

localStorage.removeItem("carrito");
localStorage.removeItem("total");
}

window.regresarProductos = () => {
    window.location.href = "productos.html";
};

if (localStorage.getItem('email') == null) {
    window.location.href = './../../index.html';
}