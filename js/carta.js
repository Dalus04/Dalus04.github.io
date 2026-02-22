document.addEventListener('DOMContentLoaded', function () {
    // Hacer que las fotos sean interactivas
    const frames = document.querySelectorAll('.photo-frame, .polaroid, .tiktok-frame, .roblox-frame');

    frames.forEach(frame => {
        frame.addEventListener('mouseover', function () {
            this.style.zIndex = '10';
        });

        frame.addEventListener('mouseout', function () {
            setTimeout(() => {
                this.style.zIndex = '';
            }, 300);
        });
    });

    // Función para cargar imágenes de manera adaptable
    function loadAdaptiveImages() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            // Asegurarse de que las imágenes se carguen correctamente
            img.addEventListener('error', function () {
                // Si hay un error al cargar la imagen, usar un placeholder
                this.src = `/placeholder.svg?height=300&width=300`;
            });

            // Asegurarse de que las imágenes se ajusten correctamente
            img.addEventListener('load', function () {
                this.classList.add('loaded');
            });
        });
    }

    loadAdaptiveImages();

    // Función para manejar la visualización en dispositivos móviles
    function handleMobileView() {
        const isMobile = window.innerWidth <= 768;
        const photoFrames = document.querySelectorAll('.photo-frame');

        if (isMobile) {
            photoFrames.forEach(frame => {
                // Resetear rotaciones en móvil para mejor visualización
                frame.style.transform = 'none';
            });
        } else {
            photoFrames.forEach(frame => {
                // Restaurar rotaciones en desktop
                const rotation = frame.style.getPropertyValue('--rotation') || '0deg';
                frame.style.transform = `rotate(${rotation})`;
            });
        }
    }

    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    handleMobileView();
    window.addEventListener('resize', handleMobileView);
});