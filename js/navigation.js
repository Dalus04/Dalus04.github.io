
function navigateTo(page) {
    document.body.style.transition = "opacity 0.5s ease-out"
    document.body.style.opacity = "0"

    setTimeout(() => {
        window.location.href = page
    }, 500)
}

function goBack() {
    window.history.back()
}

function preloadPages() {
    const pages = ["index.html", "game-scene.html", "romantic-message.html", "final-screen.html"]

    pages.forEach((page) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = page
        document.head.appendChild(link)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    preloadPages()

    setTimeout(() => {
        document.body.style.opacity = "1"
    }, 100)
})
