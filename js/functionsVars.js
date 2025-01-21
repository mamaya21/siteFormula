(function () {
    // Ejecutar al cargar la página y al redimensionar
    window.addEventListener('load', updateAllSlides);
    window.addEventListener('resize', updateAllSlides);

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

function updateAllSlides() {
  // Actualizar cada conjunto de sliders con un prefijo único para identificar sus imágenes
  updateBackgrounds('slide1', 'slide1');
  updateBackgrounds('slide2', 'slide2');
  updateBackgrounds('slide3', 'slide3');
}

function updateBackgrounds(slideClass, prefix) {
  const slides = document.querySelectorAll(`.${slideClass}`);
  const screenWidth = window.innerWidth;

  slides.forEach((slide) => {
    let newBackground = '';

    if (screenWidth >= 1920) {
      // Pantallas muy grandes (desktop 4K)
      newBackground = slide.dataset.slideBg.replace('background_', `${prefix}_ultra_`);
    } else if (screenWidth >= 1440) {
      // Desktop grande
      newBackground = slide.dataset.slideBg.replace('background_', `${prefix}_large_`);
    } else if (screenWidth >= 1024) {
      // Tablets y laptops
      newBackground = slide.dataset.slideBg.replace('background_', `${prefix}_medium_`);
    } else if (screenWidth >= 768) {
      // Tablets pequeñas
      newBackground = slide.dataset.slideBg.replace('background_', `${prefix}_small_`);
    } else if (screenWidth >= 480) {
      // Smartphones grandes
      newBackground = slide.dataset.slideBg.replace('background_', `${prefix}_xsmall_`);
    } else {
      // Smartphones pequeños
      newBackground = slide.dataset.slideBg.replace('background_', `${prefix}_xxsmall_`);
    }

    // Aplicar el fondo dinámico
    //slide.style.backgroundImage = `url('${newBackground}')`;
    
    const img = new Image();
    const timestamp = new Date().getTime(); // Evitar caché
    img.src = `${newBackground}?t=${timestamp}`;
    img.onload = () => {
        slide.style.backgroundImage = `url('${img.src}')`;
    };
  });
}

function sendWhatsAppMessage(telefono, mensaje) {
        
  // Codificar el mensaje para la URL
  const encodedMessage = encodeURIComponent(mensaje);
  
  // Crear el enlace de WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
  
  // Redirigir al usuario al enlace
  window.open(whatsappLink, "_blank");
}