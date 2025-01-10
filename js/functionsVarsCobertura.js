(function () {

    var phoneNumber = "51918821648"; // Número de WhatsApp sin el '+'

    document.getElementById("whatsappLinkAhora").addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la navegación predeterminada
        const message = "¡Hola! 👋 Gracias por escribirnos desde nuestra página web. 🎉 Por ello, tienes un beneficio de ¡INSTALACIÓN GRATIS! Cuéntanos cómo podemos ayudarte? 💬✨";
        sendWhatsAppMessage(phoneNumber, message);
    });

    document.getElementById("whatsappCobertura").addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la navegación predeterminada
        const message = "¡Hola! 👋 Quiero consultar si mi zona tiene cobertura.";
        sendWhatsAppMessage(phoneNumber, message);
    });

    function sendWhatsAppMessage(telefono, mensaje) {
        
        // Codificar el mensaje para la URL
        const encodedMessage = encodeURIComponent(mensaje);
        
        // Crear el enlace de WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
        
        // Redirigir al usuario al enlace
        window.open(whatsappLink, "_blank");
    }

}());