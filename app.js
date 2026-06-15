/* =========================================
   INICIALIZACIÓN DE ANIMACIONES (AOS)
   ========================================= */
AOS.init({
    duration: 1000,       /* La animación dura 1 segundo */
    once: true,           /* Solo se anima la primera vez que bajas */
    offset: 100,          /* Aparece un poco antes de estar en pantalla */
    easing: 'ease-in-out' /* Hace que la entrada y salida sean súper suaves */
});

/* =========================================
   FUNCIONALIDAD RESPONSIVA (MENÚ DE CELULAR)
   ========================================= */
const btnMenu = document.getElementById('btnMenu');
const navLinks = document.getElementById('navLinks');

if (btnMenu && navLinks) {
    // Cuando tocamos el botón de las 3 rayitas...
    btnMenu.addEventListener('click', () => {
        // Abrimos o cerramos el menú
        navLinks.classList.toggle('activo');
        
        // Efecto Pro: Cambiar el ícono de 3 rayitas a una 'X'
        const icono = btnMenu.querySelector('i');
        if (navLinks.classList.contains('activo')) {
            icono.classList.remove('fa-bars');
            icono.classList.add('fa-xmark'); 
        } else {
            icono.classList.remove('fa-xmark');
            icono.classList.add('fa-bars'); 
        }
    });

    // Cerrar el menú automáticamente cuando el usuario elige una opción
    const enlaces = navLinks.querySelectorAll('a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            navLinks.classList.remove('activo');
            
            // Regresar el ícono a las 3 rayitas
            const icono = btnMenu.querySelector('i');
            icono.classList.remove('fa-xmark');
            icono.classList.add('fa-bars');
        });
    });
}

/* =========================================
   EFECTO PRO: SOMBRA EN EL MENÚ AL BAJAR (SCROLL)
   ========================================= */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Agrega una sombra elegante cuando el usuario empieza a bajar
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        // Quita la sombra cuando está hasta arriba
        header.style.boxShadow = 'none';
    }
});