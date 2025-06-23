// Funciones del modal
function showModal() {
    const overlay = document.getElementById("modalOverlay")
    if (!overlay) return

    overlay.classList.add("active")
    createModalParticles()

    document.body.style.overflow = "hidden"
}

function closeModal(event) {
    if (event && event.target !== document.getElementById("modalOverlay")) {
        return
    }

    const overlay = document.getElementById("modalOverlay")
    if (!overlay) return

    overlay.classList.remove("active")

    document.body.style.overflow = "auto"
}

// Crear partículas en el modal
function createModalParticles() {
    const particlesContainer = document.getElementById("modalParticles")
    if (!particlesContainer) return

    particlesContainer.innerHTML = ""

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.top = Math.random() * 100 + "%"
        particle.style.animationDelay = Math.random() * 4 + "s"
        particle.style.animationDuration = Math.random() * 2 + 3 + "s"
        particlesContainer.appendChild(particle)
    }
}

// Cerrar modal con tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal()
    }
})
