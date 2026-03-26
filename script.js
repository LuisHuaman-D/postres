document.addEventListener('DOMContentLoaded', () => {
    // Configuración del número de WhatsApp (Cambiar este número por el real)
    const WHATSAPP_NUMBER = "51906302238";

    // 1. Manejo de botones "Hacer Pedido" en las tarjetas de productos
    const orderButtons = document.querySelectorAll('.btn-order');

    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const productName = card.querySelector('.card-title').innerText;
            const productPrice = card.querySelector('.price').innerText;

            const message = `Hola Dolce Cake, me gustaría pedir el *${productName}* que está a *${productPrice}*. Mi dirección es:`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    });

    // 2. El botón flotante ya tiene su enlace directo en el HTML para contacto general, 
    // pero podemos añadir un log o analítica aquí si fuera necesario.
});
