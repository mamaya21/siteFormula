

(function () {

    var phoneNumber = "51918821648"; // Número de WhatsApp sin el '+'

    document.getElementById("whatsappLink").addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la navegación predeterminada
        const message = "¡Hola! 👋 Gracias por escribirnos desde nuestra página web. 🎉 Por ello, tienes un beneficio de ¡INSTALACIÓN GRATIS! Cuéntanos cómo podemos ayudarte? 💬✨";
        sendWhatsAppMessage(phoneNumber, message);
    });

    document.getElementById("whatsappLinkAhora").addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la navegación predeterminada
        const message = "¡Hola! 👋 Gracias por escribirnos desde nuestra página web. 🎉 Por ello, tienes un beneficio de ¡INSTALACIÓN GRATIS! Cuéntanos cómo podemos ayudarte? 💬✨";
        sendWhatsAppMessage(phoneNumber, message);
    });

    document.getElementById("whatsappAdquirir").addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la navegación predeterminada
        const message = "¡Hola! 👋 Gracias por escribirnos desde nuestra página web. 🎉 Por ello, tienes un beneficio de ¡INSTALACIÓN GRATIS! Cuéntanos cómo podemos ayudarte? 💬✨";
        sendWhatsAppMessage(phoneNumber, message);
    });

    document.getElementById("whatsappAdquirirPlan1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la navegación predeterminada
        const message = "¡Hola! 👋 Quiero adquirir el Plan Fórmula TV por solo s/ 35 con la promoción de la página web de INSTALACIÓN GRATIS.";
        sendWhatsAppMessage(phoneNumber, message);
    });

    document.getElementById("whatsappAdquirirPlan2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la navegación predeterminada
        const message = "¡Hola! 👋 Quiero agregar a mi Plan Fórmula una TV adicional.";
        sendWhatsAppMessage(phoneNumber, message);
    });

    // document.getElementById("whatsappCobertura").addEventListener("click", function (event) {
    //     event.preventDefault(); // Prevenir la navegación predeterminada
    //     const message = "¡Hola! 👋 Quiero consultar si mi zona tiene cobertura.";
    //     sendWhatsAppMessage(phoneNumber, message);
    // });

}());

function sendWhatsAppMessage(telefono, mensaje) {
        
  // Codificar el mensaje para la URL
  const encodedMessage = encodeURIComponent(mensaje);
  
  // Crear el enlace de WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
  
  // Redirigir al usuario al enlace
  window.open(whatsappLink, "_blank");
}

function isStringEmpty(str) {
  return !str || str.trim().length === 0;
}