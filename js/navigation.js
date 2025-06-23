// Sistema de navegación entre pantallas

function navigateTo(page) {
    // Efecto de transición suave
    document.body.style.transition = "opacity 0.5s ease-out"
    document.body.style.opacity = "0"

    setTimeout(() => {
        window.location.href = page
    }, 500)
}

// Función para volver atrás
function goBack() {
    window.history.back()
}

// Precargar páginas para navegación más rápida
function preloadPages() {
    const pages = ["index.html", "game-scene.html", "romantic-message.html", "final-screen.html"]

    pages.forEach((page) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = page
        document.head.appendChild(link)
    })
}

// Inicializar navegación
document.addEventListener("DOMContentLoaded", () => {
    preloadPages()

    // Restaurar opacidad al cargar
    setTimeout(() => {
        document.body.style.opacity = "1"
    }, 100)
})
