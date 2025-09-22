
(function seedServicios(){
    if (!localStorage.getItem("servicios")) {
      const serviciosSeed = [
        { id: 1, nombre: "Desarrollo Web", precio: 1800000, imagen: "assets/img/desarrollo_web.jpg", descripcion: "Sitio web para empresas", cantidad: 5, promo: true },
        { id: 2, nombre: "Tienda Online", precio: 2400000, imagen: "assets/img/tienda_online.jpg", descripcion: "E-commerce completo", cantidad: 4, promo: false },
        { id: 3, nombre: "App Móvil", precio: 3600000, imagen: "assets/img/App_movil.jpg", descripcion: "App híbrida para Android y iOS", cantidad: 6, promo: false },
        { id: 4, nombre: "Chatbot IA", precio: 1200000, imagen: "assets/img/chatbot_IA.jpg", descripcion: "Automatiza atención con IA", cantidad: 10, promo: true },
        { id: 5, nombre: "Integración API", precio: 1000000, imagen: "assets/img/API.jpg", descripcion: "Conecta sistemas externos", cantidad: 7, promo: false },
        { id: 6, nombre: "Análisis de Datos", precio: 1500000, imagen: "assets/img/analisis_datos.jpg", descripcion: "Dashboard y métricas clave", cantidad: 2, promo: false },
        { id: 7, nombre: "SEO Técnico", precio: 800000, imagen: "assets/img/SEO_tecnico.jpg", descripcion: "Mejora el ranking en buscadores", cantidad: 9, promo: true },
        { id: 8, nombre: "Mantenimiento Web", precio: 600000, imagen: "assets/img/mantenimiento_web.jpg", descripcion: "Actualizaciones mensuales", cantidad: 12, promo: false },
        { id: 9, nombre: "Auditoría de Seguridad", precio: 1700000, imagen: "assets/img/seguridad.jpg", descripcion: "Revisión de vulnerabilidades", cantidad: 3, promo: false },
        { id: 10, nombre: "Soporte Prioritario", precio: 900000, imagen: "assets/img/soporte.jpg", descripcion: "Atención técnica preferente", cantidad: 15, promo: true }
      ];
      localStorage.setItem("servicios", JSON.stringify(serviciosSeed));
    }
  })();
  